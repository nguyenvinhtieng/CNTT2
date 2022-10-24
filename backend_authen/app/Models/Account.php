<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $primaryKey = 'username';
    protected $fillable = [
        'username',
        'password',
        'fullname',
        'gender',
        'email',
        'avatar',
        'dob',
        'level',
        'role',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}
