<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categorys';
    protected $fillable = ['category', 'sort'];

    public function faq(){
        return $this->hasMany(Faq::class);
        // return $this->hasMany(Faq::class)->orderBy('sort', 'asc');

    }
}