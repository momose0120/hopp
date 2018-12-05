<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $table = 'messages';
    protected $fillable = ['name', 'type', 'position', 'title', 'content', 'main_image', 'image_01', 'image_02', 'image_03', 'main_image_title', 'image_01_title', 'image_02_title', 'image_03_title'];
}
