<?php

namespace App\Http\Controllers\Api;

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
use App\Http\Controllers\Controller;

class ThreadsController extends Controller
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
    $threads = Thread::forUser($currentUserId)->latest('updated_at')->with('participants')->orderBy('subject')->get()
      ->unique();
    // All threads that user is participating in, with new messages
//      $threads = Thread::forUserWithNewMessages($currentUserId)->latest('updated_at')->get();
    return response()->json($threads);
  }

  /**
   *
   */
  public function create()
  {
    //
  }

  /**
   * Stores a new thread
   *
   * @return mixed
   */
  public function store(Request $request)
  {
    $input = $request->all();
    $thread = Thread::create(
      [
        'subject' => !empty($input['subject']) ? $input['subject'] : '',
        'author_id' => !empty($input['recipients']) ? $input['recipients'][0] : 0
      ]
    );

    // Manage recipients
    if ($request->has('recipients')) {
      $thread->addParticipants($input['recipients']);
    }

    return response()->json([
      'thread_id' => $thread->id], 200);
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
    // don't show the current user in list
    $userId = $request->user()->id;
//        $users = User::whereNotIn('id', $thread->participantsUserIds($userId))->get();
    $thread->markAsRead($userId);
    $thread->load(['participants']);

    return response()->json($thread);
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param int $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param \Illuminate\Http\Request $request
   * @param int $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param int $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    //
  }
}
