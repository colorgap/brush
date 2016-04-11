<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function() use ($app) {
    return view('index');
});
$app->get('/dashboard', function() use ($app) {
    return view('dashboard.index');
});
$app->group(['prefix' => 'api','namespace' => 'App\Http\Controllers\Bowyer\Auth'], function($app){
    $app->post('login','LoginController@index');
    $app->get('logout','LoginController@logout');
    $app->post('register','RegisterController@index');
});
$app->group(['prefix' => 'api/admin','namespace' => 'App\Http\Controllers\Bowyer\Admin','middleware' => 'auth'], function($app){
    $app->get('users','UsersController@index');
    $app->post('users','UsersController@addUser');
    $app->delete('user/{user_id}','UsersController@deleteUser');
    
    $app->get('roles','RolesController@index');
});
$app->group(['prefix' => 'api/user','namespace' => 'App\Http\Controllers\Bowyer\Admin','middleware' => 'auth'], function($app){
    $app->get('profile','ProfileController@index');
    $app->post('profile','ProfileController@saveProfile');
    $app->post('users','UsersController@addUser');
    $app->post('resetPassword','ResetPasswordController@index');
});
$app->group(['prefix' => 'api/healthCheck','namespace' => 'App\Http\Controllers\Bowyer\HealthCheck','middleware' => 'auth'], function($app){
    $app->get('apiCheck','ApiCheckController@index');
    $app->get('dbCheck','DatabaseCheckController@index');
});