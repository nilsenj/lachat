<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
  return view('root');
});

Route::get('/assets/{file}', function (Request $request, $file) {
  return Storage::disk('assets')->get($file);
});

Route::get('/assets/fonts/{file}', function (Request $request, $file) {
  return Storage::disk('assets')->get('fonts/' . $file);
});

Route::get('/assets/images/{file}', function (Request $request, $file) {
  return Storage::disk('assets')->get('images/' . $file);
});

Route::get('/storage/public/avatars/{folder}/{filename}', function ($folder, $filename) {
  $path = storage_path('app/public/avatars/' . $folder . '/' . $filename);

//  if (!Storage::disk('public')->exists('avatars/' . $folder . '/' . $filename)) {
//    abort(404);
//  }

//  dd('avatars/' . $folder . '/' . $filename);
  $file = Storage::disk('public')->get('avatars/' . $folder . '/' . $filename);
//  $type = File::mimeType($path);

  $response = Response::make($file, 200);
//  $response->header("Content-Type", $type);

  return $response;
});

Route::get('/storage/public/{folder}/{filename}', function ($folder, $filename) {
  $path = storage_path('public/' . $folder . '/' . $filename);

  if (!File::exists($path)) {
    abort(404);
  }

  $file = File::get($path);
  $type = File::mimeType($path);

  $response = Response::make($file, 200);
  $response->header("Content-Type", $type);

  return $response;
});


Route::get('/storage/public/{filename}', function ($filename) {
  $path = storage_path('public/' . $filename);

  if (!File::exists($path)) {
    abort(404);
  }

  $file = File::get($path);
  $type = File::mimeType($path);

  $response = Response::make($file, 200);
  $response->header("Content-Type", $type);

  return $response;
});
