<?php

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', ['middleware' => 'cors'], function ($api)
{
    $api->resource('users', 'UsersController');

    $api->get('test', function () {
        return ['data' => ['message' => 'Hello world!']];
    });
});

$app->get('{slug:.*}', function () use ($app)
{
    return view('index');
});