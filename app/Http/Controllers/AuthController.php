<?php namespace App\Http\Controllers;

use Dingo\Api\Http\Request;
use Dingo\Api\Routing\Helpers;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\JWTAuth;

/**
 * Class AuthenticationController
 * @package App\Http\Controllers
 */
class AuthController extends Controller {
    
    use Helpers;

    /**
     * @var JWTAuth
     */
    private $auth;

    /**
     * @param JWTAuth $auth
     */
    public function __construct(JWTAuth $auth)
    {
        $this->auth = $auth;
    }

    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function login(Request $request)
    {
        // grab credentials from the request
        $credentials = $request->only('email', 'password');

        try {
            // attempt to verify the credentials and create a token for the user
            $token = $this->auth->attempt($credentials);
            if (!$token) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        $user = $this->auth->setToken($token)->toUser();

        // all good so return the token
        return response()->json(['data' => compact('token', 'user')]);
    }
}
