<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $username = $request->input('username');
        $password = $request->input('password');

        if($username == null || $password == null){
            return response()->json(['status' => false, 'message' => 'Username or password is empty'], 400);
        }
        $users = User::where('username', $request->input('username'))->get();
        if(count($users) == 0){
            return response()->json(['status' => false, 'message' => 'Username is wrong'], 400);
        }

        $user = $users[0];
        if(!Hash::check($password, $user->password)){
            return response()->json(['status' => false, 'message' => 'Password is wrong'], 400);
        }
        $token = $token = JWTAuth::fromUser($user);
        // try {
        //     if (! $token = JWTAuth::fromUser($user)) {
        //         return response()->json(['status' => false, 'message' => 'Valid error'], 400);
        //     }
        // } catch (JWTException $e) {
        //     return response()->json(['status' => false, 'message' => 'Server error'], 400);
        // }
        return response()->json(['status' => true, 'message' => 'Login success', 'user' => $user, 'token' => $token], 200);
    }


    public function register(Request $request){

        $username = $request->input('username');
        $password = $request->input('password');

        if($username == null || $password == null){
            return response()->json(['status' => false, 'error' => 'Username or password is empty'], 400);
        }
        
        $users = User::where('username', $request->input('username'))->get();
        
        if(count($users) > 0){
            return response()->json(['status' => false, 'error' => 'Username already exists'], 400);
        }

        $user = new User;
        $user->username = $username;
        $user->password = Hash::make($password);
        $user->save();
        return response()->json(['status' => true, 'success' => 'User created'], 200);
    }



}
