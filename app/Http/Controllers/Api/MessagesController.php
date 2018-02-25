<?php

namespace App\Http\Controllers\Api;

use App\Models\Message;
use App\Models\Participant;
use App\Models\Thread;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\Http\Controllers\Controller;

class MessagesController extends Controller
{
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
   * @param $id
   * @return mixed
   */
  public function store(Request $request, $threadId)
  {
    try {
      $thread = Thread::findOrFail($threadId);
    } catch (ModelNotFoundException $e) {
      \Session::flash('error_message', 'The thread with ID: ' . $threadId . ' was not found.');
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
    $participant->last_read = new Carbon();
    $participant->save();
    // Recipients
    if (Input::has('recipients')) {
      $thread->addParticipants(Input::get('recipients'));
    }
    return redirect('messages/' . $threadId);
  }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
