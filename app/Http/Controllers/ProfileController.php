<?php

namespace App\Http\Controllers;

use App\Models\Profile;
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
}
