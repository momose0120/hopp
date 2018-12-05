<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tenant extends Model
{
    protected $table = 'tenants';
    protected $fillable = ['name', 'access', 'address'];

    public function recruits(){
        return $this->hasMany(Recruit::class);
    }

}
