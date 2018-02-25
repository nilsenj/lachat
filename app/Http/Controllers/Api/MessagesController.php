<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Carbon\Carbon;
use App\Models\Message;
use App\Models\Participant;
use App\Models\Thread;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use Tymon\JWTAuth\Exceptions\JWTException;

class MessagesController extends Controller
{
  /**
   * Show all of the message threads to the user
   *
   * @return mixed
   */
  public function index(Request $request)
  {
    $currentUserId = $request->user()->id;
    // All threads, ignore deleted/archived participants
    //$threads = Thread::getAllLatest()->get();
    // All threads that user is participating in
    $threads = Thread::forUser($currentUserId)->latest('updated_at')->get();
    // All threads that user is participating in, with new messages
//      $threads = Thread::forUserWithNewMessages($currentUserId)->latest('updated_at')->get();
    return response()->json($threads);
  }

  /**
   * Shows a message thread
   *
   * @param $id
   * @return mixed
   */
  public function show(Request $request, $id)
  {
    try {
      $thread = Thread::findOrFail($id);
    } catch (ModelNotFoundException $e) {
      return response()->json(['error_message' => 'The thread with ID: ' .
        $id . ' was not found.'], 404);
    }
    // show current user in list if not a current participant
    $users = User::whereIn('id', $thread->participantsUserIds())->get();
    // don't show the current user in list
    $userId = $request->user()->id;
//        $users = User::whereNotIn('id', $thread->participantsUserIds($userId))->get();
    $thread->markAsRead($userId);
    $thread->load('messages');
    return response()->json(compact('thread', 'users'));
  }

  /**
   * Stores a new message thread
   *
   * @return mixed
   */
  public function store(Request $request)
  {
    $input = Input::all();
    $thread = Thread::create(
      [
        'subject' => !empty($input['subject']) ? $input['subject'] : '',
        'author_id' => !empty($input['recipients']) ? $input['recipients'][0] : 0
      ]
    );
    // Message
    $message = Message::create(
      [
        'thread_id' => $thread->id,
        'user_id' => $request->user()->id,
        'body' => $input['message'],
      ]
    );
    $sender = Participant::create(
      [
        'thread_id' => $thread->id,
        'user_id' => $request->user()->id,
        'last_read' => new Carbon()
      ]
    );
    $participants = [];
    // Recipients
    if (Input::has('recipients')) {
      $participants = $thread->addParticipants($input['recipients']);
    }
    return response()->json([
      'thread_id' => $thread->id], 200);
  }

  /**
   * Adds a new message to a current thread
   *
   * @param $id
   * @return mixed
   */
  public function update(Request $request, $id)
  {
    try {
      $thread = Thread::findOrFail($id);
    } catch (ModelNotFoundException $e) {
      \Session::flash('error_message', 'The thread with ID: ' . $id . ' was not found.');
      return redirect('messages');
    }
    $thread->activateAllParticipants();
    // Message
    Message::create(
      [
        'thread_id' => $thread->id,
        'user_id' => $request->id(),
        'body' => Input::get('message'),
      ]
    );
    // Add replier as a participant
    $participant = Participant::firstOrCreate(
      [
        'thread_id' => $thread->id,
        'user_id' => $request->user()->id
      ]
    );
    $participant->last_read = new Carbon;
    $participant->save();
    // Recipients
    if (Input::has('recipients')) {
      $thread->addParticipants(Input::get('recipients'));
    }
    return redirect('messages/' . $id);
  }
}
