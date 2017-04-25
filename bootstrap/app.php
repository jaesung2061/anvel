<?php

require_once __DIR__.'/../vendor/autoload.php';
require_once __DIR__.'/helpers.php';

try {
    (new Dotenv\Dotenv(__DIR__.'/../'))->load();
}
catch (Dotenv\Exception\InvalidPathException $e) {
    //
}

/*
|--------------------------------------------------------------------------
| Create The Application
|--------------------------------------------------------------------------
|
| Here we will load the environment and create the application instance
| that serves as the central piece of this framework. We'll use this
| application as an "IoC" container and router for this framework.
|
*/

$app = new Laravel\Lumen\Application(
    realpath(__DIR__.'/../')
);

$app->withFacades();

$app->withEloquent();

/*
|--------------------------------------------------------------------------
| Register Container Bindings
|--------------------------------------------------------------------------
|
| Now we will register a few bindings in the service container. We will
| register the exception handler and the console kernel. You may add
| your own bindings here if you like or you can make another file.
|
*/

$app->singleton(
    Illuminate\Contracts\Debug\ExceptionHandler::class,
    App\Exceptions\Handler::class
);

$app->singleton(
    Illuminate\Contracts\Console\Kernel::class,
    App\Console\Kernel::class
);

/*
|--------------------------------------------------------------------------
| Register Middleware
|--------------------------------------------------------------------------
|
| Next, we will register the middleware with the application. These can
| be global middleware that run before and after each request into a
| route or middleware that'll be assigned to some specific routes.
|
*/

// $app->middleware([
//    App\Http\Middleware\ExampleMiddleware::class
// ]);

// $app->routeMiddleware([
//     'auth' => App\Http\Middleware\Authenticate::class,
// ]);

$app->alias('cache', 'Illuminate\Cache\CacheManager');
$app->alias('auth', 'Illuminate\Auth\AuthManager');

/*
|--------------------------------------------------------------------------
| Register Service Providers
|--------------------------------------------------------------------------
|
| Here we will register all of the application's service providers which
| are used to bind services into the container. Service providers are
| totally optional, so you are not required to uncomment this line.
|
*/

// $app->register(App\Providers\AppServiceProvider::class);
// $app->register(App\Providers\AuthServiceProvider::class);
// $app->register(App\Providers\EventServiceProvider::class);

$app->register(Dingo\Api\Provider\LumenServiceProvider::class);

$app->register(\Tymon\JWTAuth\Providers\JWTAuthServiceProvider::class);
$app->configure('jwt');

// Do not give explicit error messages to client in production.
if ( ! app()->environment('production')) {
    $app[Dingo\Api\Exception\Handler::class]->setErrorFormat([
        'error' => [
            'message' => ':message',
            'errors' => ':errors',
            'code' => ':code',
            'status_code' => ':status_code',
            'debug' => ':debug'
        ]
    ]);
}

app('Dingo\Api\Auth\Auth')->extend('jwt', function ($app) {
    return new Dingo\Api\Auth\Provider\JWT($app['Tymon\JWTAuth\JWTAuth']);
});

/*
|--------------------------------------------------------------------------
| Facades
|--------------------------------------------------------------------------
|
| Here you may register facades.
|
*/

if ( ! class_exists('JWTAuth')) {
    class_alias('Tymon\JWTAuth\Facades\JWTAuth', 'JWTAuth');
}

if ( ! class_exists('JWTAuth')) {
    class_alias('Tymon\JWTAuth\Facades\JWTFactory', 'JWTFactory');
}

/*
|--------------------------------------------------------------------------
| Load The Application Routes
|--------------------------------------------------------------------------
|
| Next we will include the routes file so that they can all be added to
| the application. This will provide all of the URLs the application
| can respond to, as well as the controllers that may handle them.
|
*/

$app->group(['namespace' => 'App\Http\Controllers'], function ($app) {
    require __DIR__.'/../routes/web.php';
});

/*
|--------------------------------------------------------------------------
| Exception handlers
|--------------------------------------------------------------------------
|
| Hear we can configure how errors are handled.
|
*/

app('Dingo\Api\Exception\Handler')->register(function (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
    return response()->json(['error' => 'token_expired'], $e->getCode() ?: 401);
});
app('Dingo\Api\Exception\Handler')->register(function (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
    return response()->json(['error' => 'token_invalid'], $e->getCode() ?: 401);
});
app('Dingo\Api\Exception\Handler')->register(function (\Tymon\JWTAuth\Exceptions\JWTException $e) {
    return response()->json(['error' => 'token_absent'], $e->getCode() ?: 401);
});

return $app;
