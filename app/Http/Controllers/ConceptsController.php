<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Concept;

class ConceptsController extends Controller
{
    public $title = '保育所特長';
    public $small = 'Concept';

    public function create()
    {
        //　変数取得
        $title = $this->title;
        $small = $this->small;

        return view('admin.concepts.create', ['title' => $title, 'small' => $small]);
    }

    public function index()
    {
        //　変数取得
        $title = $this->title;
        $small = $this->small;

        $concepts = Concept::orderBy('updated_at', 'desc')->paginate(10);
        return view('admin.concepts.index', ['concepts' => $concepts, 'title' => $title, 'small' => $small]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|max:50',
            'main_image' => 'image|max:2000',
            'content_concept' => 'max:300',
        ]);

        $concept = new Concept;
        $concept->title = $request->title;
        $concept->content = $request->content_concept;
        if (isset($request->main_image)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('main_image')->getClientOriginalName();
            $request->file('main_image')->move(public_path() . '/image/concepts', $imageName);
            $concept->main_image = $imageName;
            $concept->main_image_title = $imageTitle;
        } else{
            $imageName = 'no_image.gif';
            $imageTitle = 'no_image';
            $concept->main_image = $imageName;
            $concept->main_image_title = $imageTitle;
        }

        $concept->save();

        return redirect('/admin_concepts')->with('success', '登録完了しました');
    }

    public function edit($id)
    {
        //　変数取得
        $title = $this->title;
        $small = $this->small;

        $concept = Concept::find($id);
        return view('admin.concepts.edit', ['concept' => $concept, 'title' => $title, 'small' => $small]);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'title' => 'required|max:50',
            'main_image' => 'image|max:2000',
            'content_concept' => 'max:300',
        ]);
        $concept = concept::find($id);
        $concept->title = $request->title;
        $concept->content = $request->content_concept;
        if (isset($request->main_image)){
            $imageName = str_shuffle(time());
            $imageTitle = $request->file('main_image')->getClientOriginalName();
            $request->file('main_image')->move(public_path() . '/image/concepts', $imageName);
            $concept->main_image = $imageName;
            $concept->main_image_title = $imageTitle;
        }

        $concept->save();

        return redirect('/admin_concepts')->with('success', '更新しました');
    }

    public function destroy($id)
    {
        $concept = Concept::find($id);
        $imageName = $concept->main_image;
        if ($imageName !== 'no_image.gif'){
            unlink(public_path() . '/image/concepts/' . $imageName);
        }
        $concept->delete();

        return redirect()->back()->with('success', '削除しました');
    }


}
