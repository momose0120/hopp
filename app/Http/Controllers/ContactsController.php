<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;
use App\Recruit;

use App\Mail\Contacts;
use App\Mail\Admin;

use Illuminate\Support\Facades\Mail;

class ContactsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     public $progress = array('未対応', '連絡済（不通）', '対応済');
     public $result = array('未入力', '不通', '面談キャンセル', '辞退', '不採用', '採用');
     public $title = '応募者一覧';
     public $small = 'Contact';

    public function index()
    {
        $title = '応募者一覧';
        $small = 'Contact';
        $contacts = Contact::where('archive', '0')->orderBy('updated_at', 'desc')->paginate(10);

        //　変数取得
        $progress = $this->progress;
        $result = $this->result;
        $mode = 0;

        // カウント取得
        $contact_all_count = contact_all_count();
        $contact_count = contact_count();
        $contact_archive_count = contact_archive_count();

        return view('admin.contacts.index', ['contacts' => $contacts, 'title' => $title, 'small' => $small, 'progress' => $progress, 'result' => $result, 'contact_all_count' => $contact_all_count, 'contact_count' => $contact_count, 'contact_archive_count' => $contact_archive_count, 'mode' => $mode]);
    }

    // 応募者検索
    public function searchIndex(Request $request)
    {
        //　変数取得
        $progress = $this->progress;
        $result = $this->result;
        $title = $this->title;
        $small = $this->small;
        $mode = 3; //検索結果モード

        if (isset($request->contact_search)){

            // カウント取得
            $contact_all_count = '';
            $contact_count = '';
            $contact_archive_count = '';

            // 検索するテキスト取得
            $search = $request->contact_search;
            $query = Contact::query();
            // 検索するテキストが入力されている場合のみ
            if(!empty($search)) {
                $query->where('name', 'like', '%'.$search.'%');
            }
            $contacts = $query->paginate(10);
            return view('admin.contacts.index', ['contacts' => $contacts, 'search' => $search, 'title' => $title, 'small' => $small, 'progress' => $progress, 'result' => $result, 'contact_all_count' => $contact_all_count, 'contact_count' => $contact_count, 'contact_archive_count' => $contact_archive_count, 'mode' => $mode]);
        } else{
            return redirect()->back();
        }
    }

    // public function allIndex(Request $request)
    // {
    //     //　変数取得
    //     $progress = $this->progress;
    //     $result = $this->result;
    //     $title = $this->title;
    //     $small = $this->small;
    //
    //     if (isset($request->contact_all)){
    //         $contacts = Contact::where('archive', '0')->orderBy('updated_at', 'desc')->paginate(10);
    //         return view('admin.contacts.index', ['contacts' => $contacts, 'title' => $title, 'small' => $small, 'progress' => $progress, 'result' => $result]);
    //     }
    // }

    public function partIndex()
    {
        //　変数取得
        $progress = $this->progress;
        $result = $this->result;
        $title = $this->title;
        $small = $this->small;
        $mode = 1;

        // カウント取得
        $contact_all_count = contact_all_count();
        $contact_count = contact_count();
        $contact_archive_count = contact_archive_count();

        $contacts = Contact::where('archive', '0')->orderBy('updated_at', 'desc')->where('progress', '0')->orwhere('progress', '1')->paginate(10);
        return view('admin.contacts.index', ['contacts' => $contacts, 'title' => $title, 'small' => $small, 'progress' => $progress, 'result' => $result, 'contact_all_count' => $contact_all_count, 'contact_count' => $contact_count, 'contact_archive_count' => $contact_archive_count, 'mode' => $mode]);
    }

    public function archiveIndex()
    {
        //　変数取得
        $progress = $this->progress;
        $result = $this->result;
        $title = $this->title;
        $small = $this->small;
        $mode = 2;

        // カウント取得
        $contact_all_count = contact_all_count();
        $contact_count = contact_count();
        $contact_archive_count = contact_archive_count();

        $contacts = Contact::where('archive', '1')->orderBy('updated_at', 'desc')->paginate(10);
        return view('admin.contacts.index', ['contacts' => $contacts, 'title' => $title, 'small' => $small, 'progress' => $progress, 'result' => $result, 'contact_all_count' => $contact_all_count, 'contact_count' => $contact_count, 'contact_archive_count' => $contact_archive_count, 'mode' => $mode]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function form()
    {
        return view('public.contacts.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function send(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|max:30',
            // 'email' => 'required|email|max:255',
            'mobile_tel' => 'required|digits:11',
            'age' => 'required|digits_between:1,3',
            'message' => 'required'
        ]);

        $recruit = Recruit::first();
        $contact = new Contact;
        $contact->name = $request->name;
        // $contact->email = $request->email;
        $contact->tel = $request->mobile_tel;
        $contact->age = $request->age;
        // $contact->gender = $request->gender;
        $contact->message = $request->message;
        $contact->recruit_id = $request->id;
        $contact->save();

        // $to = [
        //     ['email' => $request->email, 'name' => $request->name . '様']
        // ];
        //
        // $data = $request->only('name');
        // Mail::to($to)->send(new Contacts($data));

        $to = [
            ['email' => 'momose0120@gmail.com', 'name' => '採用担当']
        ];

        $data = ['name' => '採用担当'];
        Mail::to($to)->send(new Admin($data));

        return view('public.contacts.thanks');
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
        $title = '応募者詳細';
        $small = 'Contact';
        // $progress = Contact::orderBy('progress', 'asc')->pluck('progress', 'progress');
        // $progress = progress_master($progress);

        $progress = $this->progress;
        $result = $this->result;

        $contact = Contact::find($id);
        $recruit = $contact->recruit;
        return view('admin.contacts.edit', ['contact' => $contact, 'title' => $title, 'small' => $small, 'progress' => $progress, 'result' => $result, 'recruit' => $recruit]);
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
        $this->validate($request, [
            'memo' => 'max:500',
        ]);
        $contact = Contact::find($id);
        $contact->result = $request->result;
        if ($contact->result === '0'){
            $contact->progress = $request->progress;
        } else {
            $contact->progress = 2; //結果が入力された場合は、進捗を対応済みにする
        }
        $contact->memo = $request->memo;
        $contact->save();

        return redirect('/admin_contacts')->with('success', '更新しました');
    }

    public function archive(Request $request, $id)
    {
        $contact = Contact::find($id);
        if ($contact->result !== 0){
            $contact->progress = $request->progress;
            $contact->archive = $request->archive;
            $contact->save();
            return redirect()->back()->with('success', '保存しました');
        } else {
            return redirect()->back()->with('warning', '結果が未入力です');
        }
    }

    public function nonarchive(Request $request, $id)
    {
        $contact = Contact::find($id);
        $contact->archive = $request->archive;
        $contact->save();
        return redirect()->back()->with('success', '保存をもとに戻しました');
    }

    public function warning()
    {
        return redirect()->back()->with('warning', '募集要項が削除されています');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $contact = Contact::find($id);
        $contact->delete();

        return redirect()->back()->with('success', '削除しました');
    }
}
