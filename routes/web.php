<?php

/*
|:---------------------------------------------------------------------------|
| Web Routes                                                                 |
| -------------------------------------------------------------------------- |
|                                                                            |
| Here is where you can register web routes for your application. These      |
| routes are loaded by the RouteServiceProvider within a group which         |
| contains the "web" middleware group. Now create something great!           |
|                                                                            |
*/
Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');

// ここから旧バージョン

// 関数のテスト用
Route::get('/test_info', function(){
  phpinfo();
});

// 公開用

// トップ
Route::get('/', 'WelcomeController@index')->name('top.get');

// インタビュー
Route::get('interview', 'InterviewsController@index')->name('interview.index');
Route::get('interview/{id}', 'InterviewsController@show')->name('interview.show');

// トップメッセージ
Route::get('message', 'MessagesController@index')->name('message.index');

// 保育所について
Route::get('aboutus', 'AboutusController@index')->name('aboutus.index');

// イベント
Route::get('eventinfo', 'EventinfosController@index')->name('eventinfo.index');
Route::get('eventinfo/{id}', 'EventinfosController@show')->name('eventinfo.show');
Route::post('eventinfo', 'EventinfosController@send')->name('eventinfo.send');

// 採用情報
Route::get('recruitinfo', 'RecruitinfosController@index')->name('recruitinfo.index');
Route::get('recruitinfo/{id}', 'RecruitinfosController@show')->name('recruitinfo.show');

// Faq
Route::get('faqinfo', 'faqinfosController@index')->name('faqinfo.index');


// 募集要項
Route::get('public_recruits', 'RecruitsController@public_index')->name('recruit.index');
Route::get('public_recruits/{id}', 'RecruitsController@public_show')->name('recruit.show');

// 管理者用
Route::get('admin', 'AdminController@index')->name('admin.get');

// 問合せフォーム
Route::get('public_contacts', 'ContactsController@form')->name('contact');
Route::post('public_contacts', 'ContactsController@send')->name('contact.send');

// FAQ
Route::get('public_faq', 'FaqController@public_index')->name('faq.index');

//ログイン済み
Route::group(['middleware' => 'auth'], function () {
    // 管理者管理
    Route::resource('users', 'UsersController');

    // マニュアル
    Route::resource('admin_manual', 'ManualController');

    // 募集要項
    Route::resource('admin_recruits', 'RecruitsController');
    Route::get('/recruit_archives', 'RecruitsController@archiveIndex')->name('recruit.archives');    Route::put('/recruit_archive/{id}', 'RecruitsController@archive')->name('recruit.archive');
    Route::put('/recruit_nonarchive/{id}', 'RecruitsController@nonarchive')->name('recruit.nonarchive');

    // イベント
    Route::resource('admin_events', 'EventsController');

    // FAQ
    Route::resource('admin_faq', 'FaqController');
    Route::resource('admin_categorys', 'CategorysController');

    // コンタクト
    Route::resource('admin_contacts', 'ContactsController');
    Route::post('/contact_search', 'ContactsController@searchIndex')->name('contact.search');
    Route::get('/contact_all', 'ContactsController@index')->name('contact.all');
    Route::get('/contact_part', 'ContactsController@partIndex')->name('contact.part');
    Route::get('/contact_archives', 'ContactsController@archiveIndex')->name('contact.archives');
    Route::get('/contact_warning', 'ContactsController@warning')->name('contact.warning');
    Route::put('/contact_archive/{id}', 'ContactsController@archive')->name('contact.archive');
    Route::put('/contact_nonarchive/{id}', 'ContactsController@nonarchive')->name('contact.nonarchive');

    // 保育所
    Route::resource('admin_tenants', 'TenantsController');

    // 働く仲間
    Route::resource('admin_employees', 'EmployeesController');

    // 特長
    Route::resource('admin_concepts', 'ConceptsController');

    // トップメッセージ
    Route::resource('admin_messages', 'TopmessagesController');

});

Route::get('adminlte',function(){
    return view('backend.index');
});
