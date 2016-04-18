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

//-------------------:: UI page calls: Start ::---------------------
$app->get('/', function() use ($app) {
    return view('index');
});
$app->get('/dashboard', function() use ($app) {
    return view('dashboard.index');
});
//-------------------:: UI page calls: End ::-----------------------

//-------------------:: Auth and Profile api calls: Start ::--------------------
$app->group(['prefix' => 'api','namespace' => 'App\Http\Controllers\Bowyer'], function() use ($app){
    $app->post('login','Auth\LoginController@index');
    $app->get('logout','Auth\LoginController@logout');
    $app->post('register','Auth\RegisterController@index');
    $app->post('forgotPassword','User\PasswordController@forgotPassword');
});
$app->group(['prefix' => 'api/user','namespace' => 'App\Http\Controllers\Bowyer\User','middleware' => 'auth'], function() use ($app){
    $app->get('me','ProfileController@index');
    $app->post('me','ProfileController@updateProfile');
    $app->post('resetPassword','PasswordController@index');
});
//-------------------:: Auth api calls: End ::-----------------------

//-------------------:: Reference Data api calls: Start ::-----------
$app->group(['prefix' => 'api/reference','namespace' => 'App\Http\Controllers\Bowyer\ReferenceData','middleware' => 'auth'], function() use ($app){
    $app->get('roles','CommonReferenceController@getRoles');
});
//-------------------:: Reference Data api calls: End ::--------------

//-------------------:: Admin api calls: Start ::---------------------
$app->group(['prefix' => 'api/admin','namespace' => 'App\Http\Controllers\Bowyer\Admin','middleware' => ['auth','auth.admin']], function() use ($app){
    $app->get('users','UserController@index');
    $app->post('addUser','UserController@addUser');
    $app->post('updateUser','UserController@updateUser');
    $app->delete('user/{user_id}','UserController@deleteUser');
    
    $app->get('roles','RolesController@getRoles');
});
//-------------------:: Admin api calls: End ::-----------------------

//-------------------:: HealthCheck api calls: Start ::---------------
$app->group(['prefix' => 'api/healthCheck','namespace' => 'App\Http\Controllers\Bowyer\Admin\HealthCheck','middleware' => ['auth','auth.admin']], function() use ($app){
    $app->get('apiCheck','ApiCheckController@index');
    $app->get('dbCheck','DatabaseCheckController@index');
});
//-------------------:: HealthCheck api calls: End ::-----------------