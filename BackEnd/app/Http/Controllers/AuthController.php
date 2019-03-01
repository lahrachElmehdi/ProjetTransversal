<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignUpRequest;
use Illuminate\Http\Request;
use App\User;
use Response;
use App\Mail\ResetPasswordMail;
use Mail;
class AuthController extends Controller 
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','signup','sendEmail','hello']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Email or password doesn\'t exist'], 401);
        }

        return $this->respondWithToken($token);
    }

   

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function signup(SignUpRequest $request)
    {
        //dd(User::all());
        //$result = User::create($request->all());
        
        $user = new User;

        $user->username = $request->get('username');
        $user->email = $request->get('email');
        $user->password = $request->get('password');
        $user->id_TypeCompte = '1';
        $user->save();
        return $this->login($user);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }



    public function sendEmail(Request $request){
        
        if(!$this->validateEmail($request->email)){
            return $this->failedResponse();
        }
        $this->send($request->email);

        return $this->successResponse();
    }   

    public function send ($email){
        Mail::to($email)->send(new ResetPasswordMail);
    }

    public function validateEmail($email){
        return  !!User::where('email',$email)->first();
    }


    public function failedResponse(){
        return response()->json(
        ['error' =>'Email is not found on our database'],404); 
    }

    public function successResponse(){
        return response()->json(
        ['error' =>'Reset Email is send successfuly , Please Check Your inbox'],200); 
    }
}