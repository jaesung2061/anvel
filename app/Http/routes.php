<?php

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', ['middleware' => 'cors'], function ($api) {
    // Authentication routes
    $api->post('auth', 'App\Http\Controllers\AuthController@login');
    $api->get('auth', 'App\Http\Controllers\AuthController@verify');
    $api->delete('auth', 'App\Http\Controllers\AuthController@destroy');

    $api->resource('users', 'App\Http\Controllers\UsersController');
});

$app->get('{slug:.*}', 'AngularController@serve');
