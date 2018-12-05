<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $table = 'contacts';
    protected $fillable = ['name', 'email', 'tel', 'gender', 'message', 'age', 'recruit_id', 'progress', 'result', 'memo'];

    function isUnread(){
        return $this->progress === 0 || $this->progress === 1;
    }


    function classUnread(){
        $unread = '';
        if ($this->isUnread()){
            $unread = 'unread-class';
        } else {
            $unread = '';
        }
        return $unread;
    }

    function isNoinput(){
        return $this->result === 0;
    }

    function classNoinput(){
        $noinput = '';
        if ($this->isNoinput()){
            $noinput = 'noinput-class';
        } else {
            $noinput = '';
        }
    }

    function masterProgress(){
        $progress = Contact::all()->pluck('progress', 'progress');

        return $progress;
    }

    public function recruit(){
        return $this->belongsTo(Recruit::class);
    }

}
