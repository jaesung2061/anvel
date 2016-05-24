<?php

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', ['middleware' => 'cors'], function ($api)
{
    $api->post('auth', 'App\Http\Controllers\AuthController@login');
    $api->get('auth', 'App\Http\Controllers\AuthController@verify');
    $api->delete('auth', 'App\Http\Controllers\AuthController@destroy');
    
    $api->resource('users', 'App\Http\Controllers\UsersController');
});

$app->get('{slug:.*}', function () use ($app)
{
    $envVars = json_encode([
        'API_STANDARDS_TREE' => env('API_STANDARDS_TREE'),
        'API_SUBTYPE'        => env('API_SUBTYPE'),
        'API_VERSION'        => env('API_VERSION')
    ]);

    return view('index', compact('envVars'));
});
