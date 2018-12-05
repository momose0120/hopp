<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Faq;
use App\Category;

use Illuminate\Support\Facades\DB;

class FaqController extends Controller
{
    public function create()
    {
        $categorys = Category::orderBy('sort','asc')->pluck('category', 'category');
        $categorys = $categorys->prepend('分類を選択してください', '');
        $title = 'よくある質問';
        $small = 'FAQ';

        return view('admin.faq.create')->with(['categorys' => $categorys, 'title' => $title, 'small' => $small]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'category' => 'required|max:20',
            'question' => 'max:200',
            'answer' => 'max:200',
        ]);
        $category = Category::where('category', $request->category)->first();
        $faq = new Faq;
        $faq->question = $request->question;
        $faq->answer = $request->answer;
        $faq->status = $request->status;
        $faq->category_id = $category->id;
        $faq->save();

        return redirect('/admin_faq')->with('success', '登録しました');
    }

    public function index()
    {
        // $faqs = DB::table('faq')->with('category')->join('categorys', 'faq.category_id', '=', 'categorys.id')->select('faq.*')->orderBy('categorys.sort','asc')->get();
        $faqs  = Faq::with('category')->join('categorys', 'faq.category_id', '=', 'categorys.id')->select('faq.*')->orderBy('categorys.sort','asc')->get();
        $categorys = Category::all();
        $category_count = count($categorys);
        $title = 'よくある質問';
        $small = 'FAQ';
        return view('admin.faq.index', ['faqs' => $faqs, 'title' => $title, 'small' => $small, 'category_count' => $category_count, 'categorys' => $categorys]);
    }

    public function public_index()
    {
        $faqs = faq::orderBy('category', 'asc')->orderBy('updated_at', 'desc')->paginate(10);
        dd($faqs);
            return view('public.faq.index', ['faqs' => $faqs]);
    }


    public function edit($id)
    {
        $title = 'よくある質問';
        $small = 'FAQ';

        $faq = faq::find($id);
        $category = $faq->category;
        $categorys = Category::orderBy('sort','asc')->pluck('category', 'category');
        return view('admin.faq.edit', ['faq' => $faq, 'categorys' => $categorys, 'category' => $category, 'title' => $title, 'small' => $small]);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'category' => 'required|max:20',
            'question' => 'max:200',
            'answer' => 'max:200',
        ]);

        $faq = Faq::find($id);
        $faq->question = $request->question;
        $faq->answer = $request->answer;
        $faq->status = $request->status;
        $faq->save();

        return redirect('/admin_faq')->with('success', '更新しました');
    }


    public function destroy($id)
    {
        $faq = faq::find($id);
        $faq->delete();

        return redirect()->back()->with('success', '削除しました');
    }

}
