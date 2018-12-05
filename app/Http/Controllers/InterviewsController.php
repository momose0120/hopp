<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Employee;

class InterviewsController extends Controller
{
    public function index()
    {
        $interviews = Employee::where('status', '0')->orderBy('updated_at', 'desc')->get();

        return view('public.interview.index', ['interviews' => $interviews]);
    }

    public function show($id)
    {
        $interview = Employee::find($id);
        $interviews = Employee::where('status', '0')->orderBy('updated_at', 'desc')->get();

        return view('public.interview.show', ['interview' => $interview, 'interviews' => $interviews]);
    }

}
