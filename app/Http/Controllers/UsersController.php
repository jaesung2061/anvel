<?php

namespace App\Http\Controllers;

use App\User;
use Dingo\Api\Contract\Http\Request;

class UsersController {
    public function index()
    {
        $users = User::limit(10)->get();

        return response()->json(['data' => compact('users')]);
    }

    public function store(Request $request)
    {
        $user = new User($request->all());

        return response()->json(['data' => compact('user')]);
    }

    public function show($id)
    {
        $user = User::find(1);

        return response()->json(['data' => compact('user')]);
    }

    public function update()
    {
        $user = User::find(1);

        return response()->json(['data' => compact('user')]);
    }

    public function destroy()
    {
        $user = User::find(1);

        return response()->json(['data' => compact('user')]);
    }
}