<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Recruit;
use App\Tenant;

class RecruitsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     public $title = '募集要項';
     public $small = 'Recruit';

    public function index()
    {
        //　変数取得
        $title = $this->title;
        $small = $this->small;
        $mode = 0;

        // カウント取得
        $recruit_all_count = recruit_all_count();
        $recruit_archive_count = recruit_archive_count();

        $recruits = Recruit::where('archive', '0')->orderBy('updated_at', 'desc')->paginate(10);

        return view('admin.recruits.index', ['recruits' => $recruits, 'title' => $title, 'small' => $small, 'recruit_all_count' => $recruit_all_count, 'recruit_archive_count' => $recruit_archive_count, 'mode' => $mode]);
    }

    public function archiveIndex()
    {
        //　変数取得
        $title = $this->title;
        $small = $this->small;
        $mode = 1;

        // カウント取得
        $recruit_all_count = recruit_all_count();
        $recruit_archive_count = recruit_archive_count();

        $recruits = Recruit::where('archive', '1')->orderBy('updated_at', 'desc')->paginate(10);
        return view('admin.recruits.index', ['recruits' => $recruits, 'title' => $title, 'small' => $small, 'recruit_all_count' => $recruit_all_count, 'recruit_archive_count' => $recruit_archive_count, 'mode' => $mode]);
    }


    public function public_index()
    {
        $recruits = Recruit::all();

        return view('public.recruits.index', ['recruits' => $recruits]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $title = '募集要項';
        $small = 'Recruit';

        $name = Tenant::orderBy('updated_at', 'desc')->pluck('name', 'name');
        $name = $name->prepend('保育所を選択してください', '');
        return view('admin.recruits.create', ['title' => $title, 'small' => $small, 'name' => $name]);
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
            'tenant_name' => 'required',
            'job_type' => 'required|max:10',
            'title' => 'required|max:30',
            'main_image' => 'image|max:2000',
            'image_01' => 'image|max:2000',
            'image_02' => 'image|max:2000',
            'image_03' => 'image|max:2000',
            'employment' => 'required',
            'talent' => 'max:500',
            'job' => 'max:500',
            'salary' => 'max:100',
            'allowance' => 'max:100',
            'work_period' => 'max:100',
            'work_hours' => 'max:100',
            'welfare' => 'max:100',
        ]);
        $employment = implode(',', $request->employment);
        $tenant = Tenant::where('name', $request->tenant_name)->first();
        $recruit = new Recruit;
        $recruit->tenant_id = $tenant->id;
        // $recruit->recruit_id = $tenant->id;
        $recruit->title = $request->title;
        $recruit->type = $request->job_type;
        $recruit->talent = $request->talent;
        $recruit->job = $request->job;
        $recruit->salary = $request->salary;
        $recruit->work_hours = $request->work_hours;
        $recruit->work_period = $request->work_period;
        $recruit->allowance = $request->allowance;
        $recruit->welfare = $request->welfare;
        $recruit->status = $request->status;
        $recruit->employment = $employment;

        if (isset($request->main_image)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('main_image')->getClientOriginalName();
            $request->file('main_image')->move(public_path() . '/image/recruits', $imageName);
            $recruit->main_image = $imageName;
            $recruit->main_image_title = $imageTitle;
        } else{
            $imageName = 'no_image.gif';
            $imageTitle = 'no_image';
            $recruit->main_image = $imageName;
            $recruit->main_image_title = $imageTitle;
        }
        if (isset($request->image_01)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('image_01')->getClientOriginalName();
            $request->file('image_01')->move(public_path() . '/image/recruits', $imageName);
            $recruit->image_01 = $imageName;
            $recruit->image_01_title = $imageTitle;
        } else{
            $imageName = 'no_image.gif';
            $imageTitle = 'no_image';
            $recruit->image_01 = $imageName;
            $recruit->image_01_title = $imageTitle;
        }
        if (isset($request->image_02)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('image_02')->getClientOriginalName();
            $request->file('image_02')->move(public_path() . '/image/recruits', $imageName);
            $recruit->image_02 = $imageName;
            $recruit->image_02_title = $imageTitle;
        } else{
            $imageName = 'no_image.gif';
            $imageTitle = 'no_image';
            $recruit->image_02 = $imageName;
            $recruit->image_02_title = $imageTitle;
        }
        if (isset($request->image_03)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('image_03')->getClientOriginalName();
            $request->file('image_03')->move(public_path() . '/image/recruits', $imageName);
            $recruit->image_03 = $imageName;
            $recruit->image_03_title = $imageTitle;
        } else{
            $imageName = 'no_image.gif';
            $imageTitle = 'no_image';
            $recruit->image_03 = $imageName;
            $recruit->image_03_title = $imageTitle;
        }

        $recruit->save();

        return redirect('/admin_recruits')->with('success', '登録しました');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function show($id)
    {

    }

    public function public_show($id)
    {
        $recruit = Recruit::find($id);
        if ($recruit === null){
            return redirect()->back()->with('warning', '募集要項が削除されています');
        } else{
            return view('public.recruits.show', ['recruit' => $recruit, 'id' => $id]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $title = '募集要項';
        $small = 'Recruit';

        $name = Tenant::orderBy('updated_at', 'desc')->pluck('name', 'name');
        $recruit = Recruit::find($id);
        $tenant = $recruit->tenant;
        return view('admin.recruits.edit', ['recruit' => $recruit, 'title' => $title, 'small' => $small, 'name' => $name, 'tenant' => $tenant]);
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
            'tenant_name' => 'required',
            'job_type' => 'required|max:10',
            'title' => 'required|max:30',
            'main_image' => 'image|max:2000',
            'image_01' => 'image|max:2000',
            'image_02' => 'image|max:2000',
            'image_03' => 'image|max:2000',
            'employment' => 'required',
            'talent' => 'max:500',
            'job' => 'max:500',
            'salary' => 'max:100',
            'allowance' => 'max:100',
            'work_period' => 'max:100',
            'work_hours' => 'max:100',
            'welfare' => 'max:100',
        ]);
        $employment = implode(',', $request->employment);
        $tenant = Tenant::where('name', $request->tenant_name)->first();
        $recruit = Recruit::find($id);
        $recruit->tenant_id = $tenant->id;
        // $recruit->recruit_id = $tenant->id;
        $recruit->title = $request->title;
        $recruit->type = $request->job_type;
        $recruit->talent = $request->talent;
        $recruit->job = $request->job;
        $recruit->salary = $request->salary;
        $recruit->work_hours = $request->work_hours;
        $recruit->work_period = $request->work_period;
        $recruit->allowance = $request->allowance;
        $recruit->welfare = $request->welfare;
        $recruit->status = $request->status;
        $recruit->employment = $employment;

        if (isset($request->main_image)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('main_image')->getClientOriginalName();
            $request->file('main_image')->move(public_path() . '/image/recruits', $imageName);
            $recruit->main_image = $imageName;
            $recruit->main_image_title = $imageTitle;
        }
        if (isset($request->image_01)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('image_01')->getClientOriginalName();
            $request->file('image_01')->move(public_path() . '/image/recruits', $imageName);
            $recruit->image_01 = $imageName;
            $recruit->image_01_title = $imageTitle;
        }
        if (isset($request->image_02)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('image_02')->getClientOriginalName();
            $request->file('image_02')->move(public_path() . '/image/recruits', $imageName);
            $recruit->image_02 = $imageName;
            $recruit->image_02_title = $imageTitle;
        }
        if (isset($request->image_03)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('image_03')->getClientOriginalName();
            $request->file('image_03')->move(public_path() . '/image/recruits', $imageName);
            $recruit->image_03 = $imageName;
            $recruit->image_03_title = $imageTitle;
        }

        $recruit->save();

        return redirect('/admin_recruits')->with('success', '更新しました');
    }

    public function archive(Request $request, $id)
    {
        $recruit = Recruit::find($id);
        $recruit->status = $request->status;
        $recruit->archive = $request->archive;
        $recruit->save();
        return redirect()->back()->with('success', '保存しました');
    }

    public function nonarchive(Request $request, $id)
    {
        $recruit = recruit::find($id);
        $recruit->archive = $request->archive;
        $recruit->save();
        return redirect()->back()->with('success', '保存をもとに戻しました.
        まだ非公開になっています');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $recruit = Recruit::find($id);
        $imageName = $recruit->main_image;
        if ($imageName !== 'no_image.gif'){
            unlink(public_path() . '/image/recruits/' . $imageName);
        }
        $recruit->delete();

        return redirect()->back()->with('success', '削除しました');
    }
}
