<?php

namespace App\Http\Controllers;

use App\User;
use Dingo\Api\Http\Request;
use Dingo\Api\Routing\Helpers;
use Tymon\JWTAuth\JWTAuth;

/**
 * Class AuthenticationController
 *
 * @package App\Http\Controllers
 */
class AuthController extends Controller
{
    use Helpers;

    /**
     * @var JWTAuth
     */
    protected $auth;

    /**
     * AuthController constructor.
     *
     * @param JWTAuth $auth
     */
    public function __construct(JWTAuth $auth)
    {
        $this->auth = $auth;
    }

    /**
     * Authenticate user with credentials.
     *
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!$token = $this->auth->attempt($credentials)) {
            return response()->json(['error' => 'invalid_credentials'], 401);
        }

        $user = $this->auth->setToken($token)->toUser();

        return response()->json(['data' => compact('token', 'user')]);
    }

    /**
     * Authenticate a user using JWT token.
     *
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Tymon\JWTAuth\Exceptions\JWTException
     */
    public function verify()
    {
        if (!$user = $this->auth->parseToken()->authenticate()) {
            return response()->json(['user_not_found'], 404);
        }

        // the token is valid and we have found the user via the sub claim
        return response()->json(compact('user'));
    }
}
