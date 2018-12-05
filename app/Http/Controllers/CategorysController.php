<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Category;
use App\Faq;

class CategorysController extends Controller
{
    public function create()
    {
        $title = 'FAQ分類';
        $small = 'FAQ';

        $categorys = Category::orderBy('sort', 'asc')->paginate(10);
        return view('admin.categorys.create', ['categorys' => $categorys, 'title' => $title, 'small' => $small]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'category' => 'required|max:20',
            'sort' => 'required|integer|max:50|min:1',
        ]);

        $category = new Category;
        $category->category = $request->category;
        $category->sort = $request->sort;
        $category->save();

        return redirect()->back()->with('success', '登録完了しました');
    }

    public function index()
    {
        $categorys = Category::orderBy('sort', 'asc')->paginate(10);
        return view('admin.categorys.index', ['categorys' => $categorys]);
    }

    public function edit($id)
    {
        $title = 'FAQ分類';
        $small = 'FAQ';

        $category = Category::find($id);
        $categorys = Category::orderBy('sort', 'asc')->paginate(10);
        return view('admin.categorys.edit', ['category' => $category, 'categorys' => $categorys, 'title' => $title, 'small' => $small]);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'category' => 'required|max:20',
            'sort' => 'required|integer|max:50|min:1',
        ]);

        $category = Category::find($id);
        $category->category = $request->category;
        $category->sort = $request->sort;
        $category->save();

        return redirect()->back()->with('success', '更新しました');
    }


    public function destroy($id)
    {
        $category = category::find($id);
        $faq = $category->faq;
        if (count($faq) > 0){
            return redirect()->back()->with('warning', 'FAQが登録されています');
        }
        else{
            $category->delete();
            return redirect()->back()->with('success', '削除しました');
        }
    }
}
