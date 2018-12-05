<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Tenant;
use App\Concept;

class AboutusController extends Controller
{
    public function index()
    {
        $tenants = Tenant::orderBy('updated_at', 'desc')->get();
        $concepts = Concept::orderBy('updated_at', 'desc')->get();

        return view('public.aboutus.index', ['tenants' => $tenants, 'concepts' => $concepts]);
    }
}
