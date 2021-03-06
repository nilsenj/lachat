<?php
declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Models\Message;
use App\Models\Participant;
use App\Models\Thread;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\Http\Controllers\Controller;

class MessagesController extends Controller
{
    /**
     * get messages by thread
     *
     * @param Request $request
     * @param int $threadId
     * @return \Illuminate\Http\JsonResponse
     */
    public function threadMessages(Request $request, int $threadId)
    {
        try {
            $thread = Thread::findOrFail($threadId);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error_message' => 'The thread with ID: ' .
                $threadId . ' was not found.'], 404);
        }
        $userId = $request->user()->id;
//        $users = User::whereNotIn('id', $thread->participantsUserIds($userId))->get();
        $thread->markAsRead($userId);
        $messages = $thread->messages()->orderBy('created_at', 'DESC')->with('user')->get();

        return response()->json($messages);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Adds a new message to a current thread
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $threadId = $request->get('threadId');
        $msg = $request->get('msg');
        $thread = Thread::findOrFail($threadId);
        $thread->activateAllParticipants();
        // Message
        $msg = Message::create(
            [
                'thread_id' => $thread->id,
                'user_id' => $request->user()->id,
                'body' => $msg,
            ]
        );

        // Add replier as a participant
        $participant = Participant::firstOrCreate(
            [
                'thread_id' => $thread->id,
                'user_id' => $request->user()->id
            ]
        );
        $participant->last_read = new Carbon();
        $participant->save();
        // Recipients
        if ($request->has('recipients')) {
            $thread->addParticipants($request->get('recipients'));
        }
        $msg->load('user');

        return response()->json($msg);
    }

    /**
     * show message by id
     *
     * @param Request $request
     * @param number $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, number $id): JsonResponse
    {
        try {
            $message = Message::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error_message' => 'The thread with ID: ' .
                $id . ' was not found.'], 404);
        }
        $message->load(['recipients']);

        return response()->json($message);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
