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

/* @var $api Dingo\Api\Routing\Router */
$api = app('Dingo\Api\Routing\Router');

$api->version('v1', ['namespace' => 'App\Http\Controllers'], function (Dingo\Api\Routing\Router $api) {
    // All routes in this callback is prefixed by "/api"
    // To change this, go to .env
    // Authentication routes
    $api->post('auth', 'AuthController@login');
    $api->get('auth', 'AuthController@verify');
    $api->delete('auth', 'AuthController@destroy');
    // The following call will create these routes.
    //   - GET    /api/users
    //   - POST   /api/users
    //   - PATCH  /api/users/{id}
    //   - DELETE /api/users/{id}
    // $api->resource('users', 'UsersController');
});

$app->get('/', 'AngularController@serve');
