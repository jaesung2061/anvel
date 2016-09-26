<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

class Controller extends BaseController
{
    /**
     * Simple wrapper that wraps responses into a
     * format that the Angular client expects.
     *
     * @param  string  $content
     * @param  int     $status
     * @param  array   $headers
     * @return \Illuminate\Http\Response|\Laravel\Lumen\Http\ResponseFactory
     */
    public function api($content = '', $status = 200, array $headers = [])
    {
        return response(['data' => $content], $status, $headers);
    }
}
