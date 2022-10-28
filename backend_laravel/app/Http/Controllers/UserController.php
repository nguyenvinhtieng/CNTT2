<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserController extends Controller
{
    //
    public function login(Request $request) {
        $username = $request->username;
        $password = $request->password;

        if($username == null || $passwordd == null){
            return response()->json(['status' => false, 'message' => 'Username or password is empty'], 400);
        }
        $users = User::where('username', $username)->get();
        if(count($users) == 0){
            return response()->json(['status' => false, 'message' => 'Username is wrong'], 400);
        }

        $user = $users[0];
        if(!Hash::check($password, $user->password)){
            return response()->json(['status' => false, 'message' => 'Password is wrong'], 400);
        }

        return response()->json([
            'status' => true, 
            'message' => 'Login success', 
            'user' => $user
        ], 200);
    }

    public function register(Request $request) {

        $username = $request->username;
        $password = $request->password;

        if($username == null || $password == null){
            return response()->json(['status' => false, 'message' => 'Username or password is empty'], 400);
        }
        $users = User::where('username', $username)->get();
        if(count($users) > 0){
            return response()->json(['status' => false, 'message' => 'Username is already taken'], 400);
        }

        $user = User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'fullname' => $request->fullname,
            'avatar' => $request->avatar,
            'gender' => $request->gender,
            'dob' => $request->dob,
        ]);

        return response()->json([
            'status' => true, 
            'message' => 'Register success', 
            'user' => $user
        ], 200);
    }

    public function getUser(Request $request) {
        $username = $request->username;
        $users = User::where('username', $username)->get();
        if(count($users) == 0){
            return response()->json(['status' => false, 'message' => 'Username is wrong'], 400);
        }

        $user = $users[0];
        return response()->json([
            'status' => true, 
            'message' => 'Get user success', 
            'user' => $user
        ], 200);
    }

    public function resetPassword(Request $request) {

        $username = $request->username;
        $oldPass = $request->oldPass;
        $newPass = $request->newPass;

        if($username == null || $oldPass == null || $newPass == null){
            return response()->json(['status' => false, 'message' => 'Username or password is empty'], 400);
        }
        $users = User::where('username', $username)->get();
        if(count($users) == 0){
            return response()->json(['status' => false, 'message' => 'Username is wrong'], 400);
        }

        $user = $users[0];
        if(!Hash::check($oldPass, $user->password)){
            return response()->json(['status' => false, 'message' => 'Old password is wrong'], 400);
        }

        $user->password = Hash::make($newPass);
        $user->save();

        return response()->json([
            'status' => true, 
            'message' => 'Reset password success', 
            'user' => $user
        ], 200);
    }

    public function updateInfo(Request $request) {
        $username = $request->username;
        $users = User::where('username', $username)->get();
        if(count($users) == 0){
            return response()->json(['status' => false, 'message' => 'Username is wrong'], 400);
        }

        $user = $users[0];
        $user->email = $request->email;
        $user->fullname = $request->fullname;
        $user->avatar = $request->avatar;
        $user->gender = $request->gender;
        $user->dob = $request->dob;

        $user->save();

        return response()->json([
            'status' => true, 
            'message' => 'Update info success', 
            'user' => $user
        ], 200);

    }
}
