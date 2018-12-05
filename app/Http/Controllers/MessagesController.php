<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Message;

class MessagesController extends Controller
{
    public function index()
    {
        $message = Message::first();

        return view('public.message.index', ['message' => $message]);
    }
}
