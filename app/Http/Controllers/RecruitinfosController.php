<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Recruit;
use App\Tenant;


class RecruitinfosController extends Controller
{
    public function index()
    {
        $recruits = Recruit::where('status', '0')->orderBy('updated_at', 'desc')->get();

        return view('public.recruitinfo.index',['recruits' => $recruits]);
    }

    public function show($id)
    {
        $recruit = Recruit::find($id);
        return view('public.recruitinfo.show', ['recruit' => $recruit]);
    }

}
