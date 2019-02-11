<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Message;

class TopmessagesController extends Controller
{
    public function edit($id)
    {
        $title = 'トップメッセージ';
        $small = 'Message';

        $message = Message::find($id);
        return view('admin.messages.edit', ['message' => $message, 'title' => $title, 'small' => $small]);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'max:20',
            'name_en' => 'max:20',
            'position' => 'max:20',
            'title' => 'max:50',
            'main_image' => 'image|max:2000',
            'main_image' => 'image|max:2000',
            'image_01' => 'image|max:2000',
            'image_02' => 'image|max:2000',
            'image_03' => 'image|max:2000',
            'image_04' => 'image|max:2000',
            'image_05' => 'image|max:2000',
            'profile' => 'max:300',
            'title_01' => 'max:50',
            'title_02' => 'max:50',
            'title_03' => 'max:50',
            'content_01' => 'max:300',
            'content_02' => 'max:300',
            'content_03' => 'max:300',
        ]);

        $message = message::find($id);
        $message->name = $request->name;
        $message->name_en = $request->name_en;
        $message->title = $request->title;
        $message->position = $request->position;
        $message->profile = $request->profile;
        $message->title_01 = $request->title_01;
        $message->content_01 = $request->content_01;
        $message->title_02 = $request->title_02;
        $message->content_02 = $request->content_02;
        $message->title_03 = $request->title_03;
        $message->content_03 = $request->content_03;

        if (isset($request->main_image)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('main_image')->getClientOriginalName();
            $request->file('main_image')->move(public_path() . '/image/messages', $imageName);
            $message->main_image = $imageName;
            $message->main_image_title = $imageTitle;
        }
        if (isset($request->image_01)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('image_01')->getClientOriginalName();
            $request->file('image_01')->move(public_path() . '/image/messages', $imageName);
            $message->image_01 = $imageName;
            $message->image_01_title = $imageTitle;
        }
        if (isset($request->image_02)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('image_02')->getClientOriginalName();
            $request->file('image_02')->move(public_path() . '/image/messages', $imageName);
            $message->image_02 = $imageName;
            $message->image_02_title = $imageTitle;
        }
        if (isset($request->image_03)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('image_03')->getClientOriginalName();
            $request->file('image_03')->move(public_path() . '/image/messages', $imageName);
            $message->image_03 = $imageName;
            $message->image_03_title = $imageTitle;
        }
        if (isset($request->image_04)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('image_04')->getClientOriginalName();
            $request->file('image_04')->move(public_path() . '/image/messages', $imageName);
            $message->image_04 = $imageName;
            $message->image_04_title = $imageTitle;
        }
        if (isset($request->image_05)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('image_05')->getClientOriginalName();
            $request->file('image_05')->move(public_path() . '/image/messages', $imageName);
            $message->image_05 = $imageName;
            $message->image_05_title = $imageTitle;
        }


        $message->save();

        return redirect()->back()->with('success', '更新しました');
    }

}
