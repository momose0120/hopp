<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Event;

use App\Mail\Eventinfo_entry;
use App\Mail\Eventinfo_admin;

use Illuminate\Support\Facades\Mail;


class EventinfosController extends Controller
{
    public function index()
    {
        $events = Event::where('status', '0')->orderBy('updated_at', 'desc')->get();

        return view('public.eventinfo.index', ['events' => $events]);
    }

    public function show($id)
    {
        $event = Event::find($id);
        $events = Event::where('status', '0')->orderBy('updated_at', 'desc')->get();

        return view('public.eventinfo.show', ['event' => $event, 'events' => $events]);
    }

    public function send(Request $request)
    {


        $this->validate($request, [
            'name' => 'required|max:30',
            'name_ja' => 'required|max:30',
            'email' => 'required|email|max:50',
            'mobile_tel' => 'required|digits:11',
            'message' => 'max:100'
        ]);

        // 申込者へのメール
        $to = [
            ['email' => $request->email, 'name' => $request->name . '様']
        ];

        // $data = $request->only('name');
        $data = ['name' => $request->name, 'name_ja' => $request->name_ja, 'email' => $request->email, 'mobile_tel' => $request->mobile_tel, 'message' => $request->massage, 'id' => $request->id];
        Mail::to($to)->send(new Eventinfo_entry($data));

        // 管理者へのメール
        $to = [
            ['email' => 'momose0120@gmail.com', 'name' => '採用担当']
        ];  //　管理者メールアドレス設定

        $data = ['address' => '採用担当', 'name' => $request->name, 'name_ja' => $request->name_ja, 'email' => $request->email, 'mobile_tel' => $request->mobile_tel, 'message' => $request->massage, 'id' => $request->id];
        Mail::to($to)->send(new Eventinfo_admin($data));

        return view('public.contacts.thanks');
    }

}
