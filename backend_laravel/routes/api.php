<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
Route::controller(UserController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('get-user', 'getUser');
    Route::post('reset-password', 'resetPassword');
    Route::post('update-info', 'updateInfo');
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
