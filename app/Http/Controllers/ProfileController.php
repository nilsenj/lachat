<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ProfileController extends Controller
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
   * Store a newly created resource in storage.
   *
   * @param \Illuminate\Http\Request $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * @param Request $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function show(Request $request)
  {
    $profile = $request->user()->profile;
    $profile->selectedTrends = $profile->selectedTrends();
    return response()->json($profile);

  }

  /**
   * @param Request $request
   * @param Profile $profile
   * @return \Illuminate\Http\JsonResponse
   */
  public function update(Request $request, Profile $profile)
  {
    $profile = $request->user()->profile();
    $data = $request->except('id', 'user_id');
    $data['links'] = !empty($data['links']) ? json_encode($data['links']) : null;
    $userData = !empty($data['user']) ? $data['user'] : null;
    unset($data['selectedTrends']);
    unset($data['user']);
    $profile->update($data);
    $request->user()->update($userData);
    $user = $request->user()->load('profile');
    $user['role'] = $user->roles()->first();
    $user->profile->selectedTrends = $user->profile->selectedTrends();

    return response()->json(compact('user'));
  }

  /**
   * @param Request $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function uploadAvatar(Request $request)
  {
    // Tell the validator input file should be an image & check this validation
    $rules = array(
      'avatar' => 'mimes:jpeg,jpg,png,gif,svg|required|max:2048'
    );
    // validator Rules
    $validator = \Validator::make($request->only('avatar'), $rules);
    // Check validation (fail or pass)
    if ($validator->fails()) {
      return response()->json(['type' => 'error', 'msg' => 'Image Not Uploaded ', 'errors' => $validator->errors()], 403);
    } else {
      if ($request->hasFile('avatar')) {
        $image = $request->file('avatar');
        $time = time();
        if (\Storage::disk('public')->putFileAs('avatars/' . $request->user()->id, $image, $time . '.' . $image->extension())) {
          $request->user()->avatar = env('APP_URL') . '/storage/public/avatars/' . $request->user()->id . '/' . $time . '.' . $image->extension();
          $request->user()->save();
        }
        return response()->json(['type' => 'success', 'msg' => 'Image Upload successfully']);
      }
    }
  }
}
