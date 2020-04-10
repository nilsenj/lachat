<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::group(['middleware' => ['api'], 'as' => 'api.'], function () {
  if (isset($_SERVER['HTTP_ORIGIN'])) {
    $origin = !empty($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : "";
  } else {
    $origin = !empty($_SERVER['HTTP_HOST']) ? "http://" . $_SERVER['HTTP_HOST'] : "";
  }

  if ((\App::environment('local', 'staging') && ($origin == "http://localhost:4200"))
    || $origin == env('CLIENT_URL')) {
    // cors not working from middleware
    header('Access-Control-Allow-Origin:  *');
    header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PATCH, PUT, DELETE');
    header('Access-Control-Allow-Headers:  Content-Type, X-Auth_old-Token, X-CSRF-Token, Origin, Authorization');
  }
  Route::post('/register', [
    'uses' => 'Auth\AuthController@register',
  ]);

  Route::post('/login', [
    'uses' => 'Auth\AuthController@login',
  ]);

  Route::group(['middleware' => 'jwt.auth'], function () {
    Route::get('/user', [
      'uses' => 'UserController@index',
    ]);
    Route::get('/profile', [
      'uses' => 'ProfileController@show',
    ]);
    Route::get('/profile/index', [
      'uses' => 'ProfileController@index',
    ]);
    Route::post('/profile/uploadAvatar', [
      'uses' => 'ProfileController@uploadAvatar',
    ]);
    Route::post('/profile/update', [
      'uses' => 'ProfileController@update',
    ]);
    Route::get('/profile/story', [
      'uses' => 'StoryController@index',
    ]);
    Route::get('/profile/story/update', [
      'uses' => 'StoryController@update',
    ]);
    Route::group(['prefix' => 'messages', 'as' => 'messages.'], function () {
      Route::post('/openThread/{id}', [
        'uses' => 'Api\MessagesController@openThread',
        'as' => 'openThread'
      ]);
      Route::get('/thread/{threadId}', [
        'uses' => 'Api\MessagesController@threadMessages',
        'as' => 'threadMessages'
      ]);
    });
    Route::resource('messages', 'Api\MessagesController', [
      'only' => ['index', 'store', 'show']
    ]);

    Route::group(['prefix' => 'threads', 'as' => 'threads.'], function () {
      Route::get('/sideThreads', [
        'uses' => 'Api\ThreadsController@sideThreads',
        'as' => 'sideThreads'
      ]);
    });

    Route::resource('threads', 'Api\ThreadsController', []);
  });
});
Route::group(['prefix' => 'admin', 'middleware' => ['role:admin']], function () {

});
