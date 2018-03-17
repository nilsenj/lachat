<?php

namespace App\Http\Controllers\Api;

use App\Models\Company;
use App\Models\Participant;
use App\Models\Thread;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CompanyController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(Request $request)
  {
    return response()->json($request->user()->companies()->get());
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
   * @param  \Illuminate\Http\Request $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * @param Request $request
   * @param $id
   * @return \Illuminate\Http\JsonResponse
   */
  public function show(Request $request, $id)
  {
    try {
      $company = Company::findOrFail($id);
    } catch (ModelNotFoundException $e) {
      return response()->json(['error_message' => 'The company with ID: ' .
        $id . ' was not found.'], 404);
    }
    $user = $request->user();
    $threads = $company->threads()->forUser($user->id)->get();
    $company->threads = $threads;

    return response()->json($company);
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
