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
});

$app->get('/', 'AngularController@serve');
