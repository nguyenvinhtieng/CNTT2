<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use JWTAuth;
use JWTAuthException;
use Hash;

class UserController extends Controller
{
    // public function login(Request $request)
    // {
    //     $request->validate([
    //         'username' => 'required|string',
    //         'password' => 'required|string',
    //     ]);
    //     $credentials = $request->only('username', 'password');

    //     $token = Auth::attempt($credentials);


    //     $username = $request->input('username');
    //     $password = $request->input('password');
    //     return response()->json(['name' => $username, 'state' => 'CA']);
    // }


    public function register(Request $request){

        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);
        $username = $request->input('username');

        
        
        $user = User::create([
            'username' => $request->username,
            'password' => Hash::make($request->password),
        ]);
        
        return response()->json(['name' => $username, 'state' => 'CA']);


        // $token = Auth::login($user);
        // return response()->json([
        //     'status' => 'success',
        //     'message' => 'User created successfully',
        //     'user' => $user,
        //     'authorisation' => [
        //         'token' => $token,
        //         'type' => 'bearer',
        //     ]
        // ]);
    }



}
