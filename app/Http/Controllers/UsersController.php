<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\User;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::orderBy('updated_at', 'desc')->paginate(10);
        $title = '管理者';
        $small = 'Administrator';

        return view('admin.users.index', ['users' => $users,'title' => $title, 'small' => $small]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);

        return view('admin.users.show', [
            'user' => $user,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $title = '管理者';
        $small = 'Administrator';

        $user = User::find($id);

        return view('admin.users.edit', ['user' => $user, 'title' => $title, 'small' => $small]);
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
            'image' => 'image|max:2000',
        ]);

        $user = User::find($id);

        if ($request->password !== Null) {
            $this->validate($request, [
                'password' => 'required|confirmed|min:6',
            ]);
            $password = $request->password;
            $user->password = bcrypt($password);
        }

        if ($request->department !== $user->department){
            $user->department = $request->department;
        }

        if (isset($request->image)){
            $imageName = str_shuffle(time());
            $request->file('image')->move(public_path() . '/image/admins', $imageName);
            $user->image = $imageName;
        }

        $user->save();

        return redirect('/users')->with('success', '更新しました');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        $imageName = $user->image;
        if ($imageName !== 'sample.jpeg'){
            unlink(public_path() . '/image/admins/' . $imageName);
        }
        $user->delete();
        return redirect()->back()->with('success', '削除しました');
    }
}
