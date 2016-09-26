<?php

/* @var $api Dingo\Api\Routing\Router */
$api = app('Dingo\Api\Routing\Router');

$api->version('v1', ['middleware' => 'cors', 'namespace' => 'App\Http\Controllers'], function (Dingo\Api\Routing\Router $api) {
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

$app->get('{slug:.*}', 'AngularController@serve');
