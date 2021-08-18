<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registation extends Model
{
    use HasFactory;
    protected $table = 'registation';
    protected $fillable = [
        'name',
        'address', 
        'dob', 
        'contact_number', 
        'email' 'passwoard',
    ];
}
