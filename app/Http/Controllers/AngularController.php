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
        return file_get_contents(base_path('public/dist/index.html'));
    }
}
