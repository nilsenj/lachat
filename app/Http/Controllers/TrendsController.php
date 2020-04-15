<?php

namespace App\Http\Controllers;

use App\Trends;
use Illuminate\Http\Request;

class TrendsController extends Controller
{
  /**
   * @param Request $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function index(Request $request)
  {
    $trends = \App\Models\Trends::all();
    return response()->json($trends);
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
   * Display the specified resource.
   *
   * @param \App\Trends $trends
   * @return \Illuminate\Http\Response
   */
  public function show(Trends $trends)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param \App\Trends $trends
   * @return \Illuminate\Http\Response
   */
  public function edit(Trends $trends)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param \Illuminate\Http\Request $request
   * @param \App\Trends $trends
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Trends $trends)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param \App\Trends $trends
   * @return \Illuminate\Http\Response
   */
  public function destroy(Trends $trends)
  {
    //
  }
}
