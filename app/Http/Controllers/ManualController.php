<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ManualController extends Controller
{
    public function index()
    {
        $title = 'マニュアルページ';
        $small = 'Manual';

        return view('admin.manual.manual', ['title' => $title, 'small' => $small]);
    }
}
