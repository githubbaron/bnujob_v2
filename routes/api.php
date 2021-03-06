<?php

use Illuminate\Http\Request;

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

//Route::post('/user/config/{user}', 'UserController@getConfig')->middleware('api');
//
//Route::post('/user/config/update/{user}', 'UserController@updateConfig')->middleware('api');

Route::get('/user/resume/{type}', 'UserController@resumeGet')->middleware('auth:api');

Route::post('/user/like/{comment_id}', 'UserController@userLikeComment')->middleware('auth:api');

