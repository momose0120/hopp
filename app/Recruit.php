<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recruit extends Model
{
    protected $table = 'recruits';
    protected $fillable = ['type', 'title', 'job', 'salary', 'work_location', 'work_hours', 'work_period', 'welfare', 'main_image', 'main_image_title', 'status', 'employment'];
    protected $casts = [
        'status' => 'integer'
    ];


    public function tenant(){
        return $this->belongsTo(Tenant::class);
    }

    public function contacts(){
        return $this->hasMany(Contact::class);
    }


}
