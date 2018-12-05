<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Tenant;

class TenantsController extends Controller
{
    public function create()
    {
        $title = '保育所情報';
        $small = 'Nursery';

        $tenants = Tenant::orderBy('updated_at', 'desc')->paginate(10);
        return view('admin.tenants.create')->with(['tenants' => $tenants, 'title' => $title, 'small' => $small]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'tenant_name' => 'required|max:30',
            'access' => 'max:50',
            'address' => 'max:50',
            'main_image' => 'image|max:2000',
        ]);

        $tenant = new Tenant;
        $tenant->name = $request->tenant_name;
        $tenant->access = $request->access;
        $tenant->address = $request->address;

        if (isset($request->main_image)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('main_image')->getClientOriginalName();
            $request->file('main_image')->move(public_path() . '/image/tenants', $imageName);
            $tenant->main_image = $imageName;
            $tenant->main_image_title = $imageTitle;
        } else{
            $imageName = 'no_image.gif';
            $imageTitle = 'no_image';
            $tenant->main_image = $imageName;
            $tenant->main_image_title = $imageTitle;
        }

        $tenant->save();

        return redirect()->back()->with('success', '登録完了しました');
    }

    // public function index()
    // {
    //     return view('admin.tenants.index');
    // }

    public function edit($id)
    {
        $title = '保育所情報';
        $small = 'Nursery';

        $tenant = Tenant::find($id);
        $tenants = Tenant::orderBy('updated_at', 'desc')->paginate(10);
        return view('admin.tenants.edit', ['tenants' => $tenants, 'tenant' => $tenant, 'title' => $title, 'small' => $small]);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'tenant_name' => 'required|max:30',
            'access' => 'max:50',
            'address' => 'max:50',
            'main_image' => 'image|max:2000',
        ]);
        $tenant = Tenant::find($id);
        $tenant->name = $request->tenant_name;
        $tenant->access = $request->access;
        $tenant->address = $request->address;

        if (isset($request->main_image)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('main_image')->getClientOriginalName();
            $request->file('main_image')->move(public_path() . '/image/tenants', $imageName);
            $tenant->main_image = $imageName;
            $tenant->main_image_title = $imageTitle;
        }

        $tenant->save();

        return redirect()->back()->with('success', '更新しました');
    }

    public function destroy($id)
    {
        $tenant = Tenant::find($id);
        $recruit = $tenant->recruits;


        if (count($recruit) > 0){
            return redirect()->back()->with('warning', '募集要項が登録されています');
        }
        else{
            $tenant->delete();
            return redirect()->back()->with('success', '削除しました');
        }
    }

}
