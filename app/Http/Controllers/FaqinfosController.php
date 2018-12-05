<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Faq;
use App\Category;

use Illuminate\Support\Facades\DB;

class FaqinfosController extends Controller
{
    public function index()
    {
        $faqs  = Faq::with('category')->join('categorys', 'faq.category_id', '=', 'categorys.id')->select('faq.*')->orderBy('categorys.sort','asc')->get();
        $categorys = Category::all();
        $category_count = count($categorys);
        return view('public.faqinfo.index', ['faqs' => $faqs, 'category_count' => $category_count, 'categorys' => $categorys]);
    }

}
