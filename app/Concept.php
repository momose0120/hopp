<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Concept extends Model
{
    protected $table = 'concepts';
    protected $fillable = ['title', 'content', 'main_image', 'main_image_title'];
}
