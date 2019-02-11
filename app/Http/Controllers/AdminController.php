<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\DB;

use App\Contact;
use App\Recruit;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (\Auth::check()){
            $title = '管理者トップページ';
            $small = 'Top';

            $contacts = Contact::where('progress', '0')->orwhere('progress', '1')->orderBy('updated_at', 'desc')->paginate(3);

            // 月ごとの応募総数
            $contact_result = DB::select("SELECT DATE_FORMAT(created_at, '%Y/%m') as created_at, count(*) as count FROM contacts GROUP BY DATE_FORMAT(created_at, '%Y/%m') ORDER BY created_at DESC", [1]);

            // 保育所ごとの応募総数
            $contact_tenants = Contact::with('recruit')->leftjoin('recruits', 'contacts.recruit_id', '=', 'recruits.id')->leftjoin('tenants', 'recruits.tenant_id', '=', 'tenants.id')->select(DB::raw('count(*) as recruit_count, contacts.recruit_id'))->groupBy('contacts.recruit_id')->select(DB::raw('count(*) as tenant_count, recruits.tenant_id,  tenants.name'))->groupBy('recruits.tenant_id')->orderBy('tenant_count', 'desc')->get();

            $maps = [];
            foreach ($contact_tenants as $contact_tenant) {
                $key = $contact_tenant->tenant_id;
                if ($key){
                    if (isset($maps[$key])) {
                        $maps[$key]["tenant_count"] += $contact_tenant->tenant_count;
                    }else {
                        $maps[$key] =
                        [
                            "name" => $contact_tenant->name,
                            "tenant_count" => $contact_tenant->tenant_count
                        ];
                    }
                }
            }

            // 年代ごとの集計
            $contact_ages = DB::table('contacts')->select(DB::raw('count(*) as age_count, age'))->groupBy('age')->get();

            $ages = [];
            foreach ($contact_ages as $contact_age) {
                $age_count = $contact_age->age_count;
                $age_range = $contact_age->age;

                if ($age_range < 20){
                    $age_range = '20才未満';
                } elseif ($age_range >= 20 && $age_range < 30){
                    $age_range = '20代';
                } elseif ($age_range >= 30 && $age_range < 40){
                    $age_range = '30代';
                } elseif ($age_range >= 40 && $age_range < 50){
                    $age_range = '40代';
                } elseif ($age_range >= 50 && $age_range < 60){
                    $age_range = '50代';
                } elseif ($age_range >= 60){
                    $age_range = '60才以上';
                }

                if (isset($ages[$age_range])){
                    $ages[$age_range]["age_count"] += $age_count;
                } else {
                    $ages[$age_range] = [
                        "age_range" => $age_range,
                        "age_count" => $age_count
                    ];
                }
            }
            return view('admin.top', ['title' => $title, 'small' => $small, 'contacts' => $contacts, 'contact_result' => $contact_result, 'contact_tenant' => $maps, 'contact_age' => $ages]);
        } else{
            return view('auth.login');
        }
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
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
