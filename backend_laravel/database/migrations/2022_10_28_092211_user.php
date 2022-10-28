<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username')->unique();
            $table->string('password');
            $table->string('fullname');
            $table->string('email')->nullable();
            $table->string('avatar')->nullable();
            $table->string('gender')->nullable();
            $table->date('dob')->nullable();
            $table->tinyInteger('level')->default(1);
            $table->tinyInteger('role')->default(1);
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
