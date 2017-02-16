<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Family_member extends Model
{
    protected $fillable = ['family_member_uid','uid','name','gender','degree','occupation','race','contact_phone','verified_at'];
}

