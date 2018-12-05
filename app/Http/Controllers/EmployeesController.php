<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Employee;

class EmployeesController extends Controller
{
    public function create()
    {
        $title = '働く仲間';
        $small = 'Employee';

        return view('admin.employees.create', ['title' => $title, 'small' => $small]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|max:20',
            'name_en' => 'required|max:40',
            'job_type' => 'required|max:10',
            'position' => 'required|max:10',
            'title' => 'required|max:30',
            'main_image' => 'image|max:2000',
            'image_01' => 'image|max:2000',
            'image_02' => 'image|max:2000',
            'image_03' => 'image|max:2000',
            'image_04' => 'image|max:2000',
            'image_05' => 'image|max:2000',
            'profile' => 'max:300',
            'title_01' => 'max:30',
            'title_02' => 'max:30',
            'title_03' => 'max:30',
            'content_01' => 'max:300',
            'content_02' => 'max:300',
            'content_03' => 'max:300',
        ]);

        $employee = new Employee;
        $employee->name = $request->name;
        $employee->name_en = $request->name_en;
        $employee->title = $request->title;
        $employee->type = $request->job_type;
        $employee->position = $request->position;
        $employee->profile = $request->profile;
        $employee->title_01 = $request->title_01;
        $employee->title_02 = $request->title_02;
        $employee->title_03 = $request->title_03;
        $employee->content_01 = $request->content_01;
        $employee->content_02 = $request->content_02;
        $employee->content_03 = $request->content_03;
        $employee->status = $request->status;
        if (isset($request->main_image)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('main_image')->getClientOriginalName();
            $request->file('main_image')->move(public_path() . '/image/employees', $imageName);
            $employee->main_image = $imageName;
            $employee->main_image_title = $imageTitle;
        } else{
            $imageName = 'no_image.gif';
            $imageTitle = 'no_image';
            $employee->main_image = $imageName;
            $employee->main_image_title = $imageTitle;
        }
        if (isset($request->image_01)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('image_01')->getClientOriginalName();
            $request->file('image_01')->move(public_path() . '/image/employees', $imageName);
            $employee->image_01 = $imageName;
            $employee->image_01_title = $imageTitle;
        } else{
            $imageName = 'no_image.gif';
            $imageTitle = 'no_image';
            $employee->image_01 = $imageName;
            $employee->image_01_title = $imageTitle;
        }
        if (isset($request->image_02)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('image_02')->getClientOriginalName();
            $request->file('image_02')->move(public_path() . '/image/employees', $imageName);
            $employee->image_02 = $imageName;
            $employee->image_02_title = $imageTitle;
        } else{
            $imageName = 'no_image.gif';
            $imageTitle = 'no_image';
            $employee->image_02 = $imageName;
            $employee->image_02_title = $imageTitle;
        }
        if (isset($request->image_03)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('image_03')->getClientOriginalName();
            $request->file('image_03')->move(public_path() . '/image/employees', $imageName);
            $employee->image_03 = $imageName;
            $employee->image_03_title = $imageTitle;
        } else{
            $imageName = 'no_image.gif';
            $imageTitle = 'no_image';
            $employee->image_03 = $imageName;
            $employee->image_03_title = $imageTitle;
        }
        if (isset($request->image_04)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('image_04')->getClientOriginalName();
            $request->file('image_04')->move(public_path() . '/image/employees', $imageName);
            $employee->image_04 = $imageName;
            $employee->image_04_title = $imageTitle;
        } else{
            $imageName = 'no_image.gif';
            $imageTitle = 'no_image';
            $employee->image_04 = $imageName;
            $employee->image_04_title = $imageTitle;
        }
        if (isset($request->image_05)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('image_05')->getClientOriginalName();
            $request->file('image_05')->move(public_path() . '/image/employees', $imageName);
            $employee->image_05 = $imageName;
            $employee->image_05_title = $imageTitle;
        } else{
            $imageName = 'no_image.gif';
            $imageTitle = 'no_image';
            $employee->image_05 = $imageName;
            $employee->image_05_title = $imageTitle;
        }


        $employee->save();

        return redirect('/admin_employees')->with('success', '登録完了しました');
    }

    public function index()
    {
        $title = '働く仲間';
        $small = 'Employee';
        $employees = Employee::orderBy('updated_at', 'desc')->paginate(10);
        return view('admin.employees.index', ['employees' => $employees, 'title' => $title, 'small' => $small]);
    }

    public function edit($id)
    {
        $title = '働く仲間';
        $small = 'Employee';

        $employee = Employee::find($id);
        return view('admin.employees.edit', ['employee' => $employee, 'title' => $title, 'small' => $small]);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required|max:20',
            'name_en' => 'required|max:40',
            'job_type' => 'required|max:10',
            'position' => 'required|max:10',
            'title' => 'required|max:30',
            'main_image' => 'image|max:2000',
            'image_01' => 'image|max:2000',
            'image_02' => 'image|max:2000',
            'image_03' => 'image|max:2000',
            'image_04' => 'image|max:2000',
            'image_05' => 'image|max:2000',
            'profile' => 'max:300',
            'title_01' => 'max:30',
            'title_02' => 'max:30',
            'title_03' => 'max:30',
            'content_01' => 'max:300',
            'content_02' => 'max:300',
            'content_03' => 'max:300',
        ]);

        $employee = Employee::find($id);
        $employee->name = $request->name;
        $employee->name_en = $request->name_en;
        $employee->title = $request->title;
        $employee->type = $request->job_type;
        $employee->position = $request->position;
        $employee->profile = $request->profile;
        $employee->title_01 = $request->title_01;
        $employee->title_02 = $request->title_02;
        $employee->title_03 = $request->title_03;
        $employee->content_01 = $request->content_01;
        $employee->content_02 = $request->content_02;
        $employee->content_03 = $request->content_03;
        $employee->status = $request->status;
        if (isset($request->main_image)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('main_image')->getClientOriginalName();
            $request->file('main_image')->move(public_path() . '/image/employees', $imageName);
            $employee->main_image = $imageName;
            $employee->main_image_title = $imageTitle;
        }
        if (isset($request->image_01)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('image_01')->getClientOriginalName();
            $request->file('image_01')->move(public_path() . '/image/employees', $imageName);
            $employee->image_01 = $imageName;
            $employee->image_01_title = $imageTitle;
        }
        if (isset($request->image_02)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('image_02')->getClientOriginalName();
            $request->file('image_02')->move(public_path() . '/image/employees', $imageName);
            $employee->image_02 = $imageName;
            $employee->image_02_title = $imageTitle;
        }
        if (isset($request->image_03)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('image_03')->getClientOriginalName();
            $request->file('image_03')->move(public_path() . '/image/employees', $imageName);
            $employee->image_03 = $imageName;
            $employee->image_03_title = $imageTitle;
        }
        if (isset($request->image_04)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('image_04')->getClientOriginalName();
            $request->file('image_04')->move(public_path() . '/image/employees', $imageName);
            $employee->image_04 = $imageName;
            $employee->image_04_title = $imageTitle;
        }
        if (isset($request->image_05)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('image_05')->getClientOriginalName();
            $request->file('image_05')->move(public_path() . '/image/employees', $imageName);
            $employee->image_05 = $imageName;
            $employee->image_05_title = $imageTitle;
        }

        $employee->save();

        return redirect('/admin_employees')->with('success', '更新しました');
    }

    public function destroy($id)
    {
        $employee = Employee::find($id);
        $imageName = $employee->main_image;
        if (isset($imageName)){
            unlink(public_path() . '/image/employees/' . $imageName);
        }
        $employee->delete();

        return redirect()->back()->with('success', '削除しました');
    }
}
