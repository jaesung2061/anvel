<?php

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', ['middleware' => 'cors'], function ($api) {
    // Authentication routes
    $api->post('auth', 'App\Http\Controllers\AuthController@login');
    $api->get('auth', 'App\Http\Controllers\AuthController@verify');
    $api->delete('auth', 'App\Http\Controllers\AuthController@destroy');

    $api->resource('users', 'App\Http\Controllers\UsersController');
});

$app->get('{slug:.*}', function () use ($app) {
    // Careful not to pass secret keys to client here.
    $envVars = json_encode([
        'APP_ENV'            => env('APP_ENV'),
        'API_STANDARDS_TREE' => env('API_STANDARDS_TREE'),
        'API_SUBTYPE'        => env('API_SUBTYPE'),
        'API_VERSION'        => env('API_VERSION')
    ]);

    return view('index', compact('envVars'));
});
