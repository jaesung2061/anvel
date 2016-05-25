<?php

namespace App\Http\Controllers;

class AngularController extends Controller
{
    /**
     * Serve the angular application.
     *
     * @return \Illuminate\View\View
     */
    public function serve()
    {
        // Careful not to pass secret keys to client.
        $envVars = json_encode([
            'APP_ENV'            => env('APP_ENV'),
            'API_STANDARDS_TREE' => env('API_STANDARDS_TREE'),
            'API_SUBTYPE'        => env('API_SUBTYPE'),
            'API_VERSION'        => env('API_VERSION')
        ]);

        return view('index', compact('envVars'));
    }
}
