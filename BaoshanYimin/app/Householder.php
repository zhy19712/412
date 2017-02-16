<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Householder extends Model
{
    protected $fillable = ['uid','name','gender','degree','occupation','race','contact_phone','household_size','immigrant_num','reservoir','bank','account_number','move_from_province','move_from_city','move_from_county','move_from_village','move_to_province','move_to_city','move_to_county','move_to_village','recorder_id','verifier_id','verified_at'];
}

