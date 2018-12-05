<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Event;

class EventsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $title = 'イベント';
        $small = 'Event';

        $events = Event::orderBy('updated_at', 'desc')->get();
        return view('admin.events.index', ['events' => $events, 'title' => $title, 'small' => $small]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $title = 'イベント';
        $small = 'Event';

      return view('admin.events.create', ['title' => $title, 'small' => $small]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $this->validate($request, [
          'event_type' => 'required|max:15',
          'title' => 'required|max:30',
          'content' => 'max:250',
          'date' => 'max:20',
          'location' => 'max:50',
          'capacity' => 'max:20',
          'main_image' => 'image|max:2000',
      ]);

      $event = new Event;
      $event->title = $request->title;
      $event->type = $request->event_type;
      $event->content = $request->content;
      $event->date = $request->date;
      $event->capacity = $request->capacity;
      $event->location = $request->location;
      $event->status = $request->status;
      if (isset($request->main_image)){
          $imageName = str_shuffle(time());
          $imageTitle = $request->file('main_image')->getClientOriginalName();
          $request->file('main_image')->move(public_path() . '/image/events', $imageName);
          $event->main_image = $imageName;
          $event->main_image_title = $imageTitle;
      } else{
          $imageName = 'no_image.gif';
          $imageTitle = 'no_image';
          $event->main_image = $imageName;
          $event->main_image_title = $imageTitle;
      }
      $event->save();

      return redirect('/admin_events')->with('success', '登録しました');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $title = 'イベント';
        $small = 'Event';

        $event = event::find($id);
        return view('admin.events.edit', ['event' => $event, 'title' => $title, 'small' => $small]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'event_type' => 'required|max:15',
            'title' => 'required|max:30',
            'content' => 'max:250',
            'date' => 'max:20',
            'location' => 'max:50',
            'capacity' => 'max:20',
            'main_image' => 'image|max:2000',
        ]);

        $event = Event::find($id);
        $event->title = $request->title;
        $event->type = $request->event_type;
        $event->content = $request->content;
        $event->date = $request->date;
        $event->capacity = $request->capacity;
        $event->location = $request->location;
        $event->status = $request->status;
        if (isset($request->main_image)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('main_image')->getClientOriginalName();
            $request->file('main_image')->move(public_path() . '/image/events', $imageName);
            $event->main_image = $imageName;
            $event->main_image_title = $imageTitle;
        }
        $event->save();

        return redirect('/admin_events')->with('success', '更新しました');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $event = Event::find($id);
        $imageName = $event->main_image;
        if ($imageName !== 'no_image.gif'){
            unlink(public_path() . '/image/events/' . $imageName);
        }
        $event->delete();

        return redirect()->back()->with('success', '削除しました');
    }
}
