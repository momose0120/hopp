@extends('layouts.public_app')

@section('content')

<main role="main">

    <section class="tip-Hero">

        <div class="tip-Hero-head">
            <div class="tip-Hero-head_inner is-appear fade-up-2">
                <img src="/assets/img/common/thanks_top.jpg" class="fade-child pagetop_image_size thanks_pagetop_image_size">
            </div>
        </div>
        <div class="tip-Hero-detail thanks_imega_padding" id="js-hero-detail">
            <div class="tip-Hero-detail_imgbox">
            </div>
        </div>

    </section>


    <section class="ti-Propers">
        <div class="coming_soon">
            <p class="comin_soon_detail_en">Thank you for your contact</p>
            <p class="comin_soon_detail_ja">ご連絡ありがとうございました。</p>
        </div>

        <div class="thanks_page_content">
            <ul class="thanks_list">
                <a href="{{ route('top.get') }}">
                <li class="thanks_list_link">
                    トップページへ戻る
                </li>
                </a>
                <a href="{{ route('recruitinfo.index') }}">
                <li class="thanks_list_link">
                    募集要項一覧へ戻る
                </li>
                </a>
                <a href="{{ route('eventinfo.index') }}">
                <li class="thanks_list_link">
                    イベント一覧へ戻る
                </li>
                </a>
            </ul>
        </div>

    </section>

    <div id="hexagonBg"></div>


</main>
@endsection
