<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Family extends Model
{
    protected $fillable = ['uid','file','poor_reason','income','income_source','house_structure','house_size','verified_at'];
}


