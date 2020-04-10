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
    $profile->trends = $profile->trends();
    return response()->json($profile);

  }

  /**
   * Update the specified resource in storage.
   *
   * @param \Illuminate\Http\Request $request
   * @param \App\Profile $profile
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Profile $profile)
  {
    //
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
