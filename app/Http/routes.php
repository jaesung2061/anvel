<?php

/* @var $api Dingo\Api\Routing\Router */
$api = app('Dingo\Api\Routing\Router');

$api->version('v1', ['middleware' => 'cors'], function (Dingo\Api\Routing\Router $api) {
    // All routes in this callback is prefixed by "/api"
    // To change this, go to .env

    // Authentication routes
    $api->post('auth', 'App\Http\Controllers\AuthController@login');
    $api->get('auth', 'App\Http\Controllers\AuthController@verify');
    $api->delete('auth', 'App\Http\Controllers\AuthController@destroy');

    // The following call will create these routes.
    //   - GET    /api/users
    //   - POST   /api/users
    //   - PATCH  /api/users/{id}
    //   - DELETE /api/users/{id}
    // $api->resource('users', 'App\Http\Controllers\UsersController');
});

$app->get('{slug:.*}', 'AngularController@serve');
