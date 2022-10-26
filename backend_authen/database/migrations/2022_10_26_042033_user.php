<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('user', function (Blueprint $table) {
            $table->string('username')->primary("username");
            $table->string('password');
            $table->string('fullname')->nullable();
            $table->string('email')->nullable();
            $table->string('avatar')->nullable();
            $table->string('gender')->nullable();
            $table->date('dob')->nullable();
            $table->tinyInteger('level')->default(1);
            $table->tinyInteger('role')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('user');
    }
};
