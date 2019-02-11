@extends('layouts.public_app')

@section('content')
<main role="main">

    <section class="tmc-Hero">

        <div class="tmc-Hero-head">
            <div class="tmc-Hero-head_inner">

                <img class="tmc-Hero-head_pc message_pagetop_image_size" src="{{ asset("image/messages/$message->main_image") }}" alt="{{ $message->main_image_title }}">
                <img class="tmc-Hero-head_sp" src="{{ asset("image/messages/$message->main_image") }}" alt="{{ $message->main_image_title }}">

                <div class="tmc-Hero-head_contentbox" data-plx="-60">
                    <!-- <img src="/assets/img/message/ceo/hero-head_label.svg"> -->
                    <div>
                        <h1><span>{{ $message->title }}</span></h1>
                        <p class="tmc-Hero-head_contentbox_text1">社会福祉法人　保育所<br>
                            {{ $message->position }}</p>
                        <p class="tmc-Hero-head_contentbox_text2">{{ $message->name_en }}</p>
                        <p class="tmc-Hero-head_contentbox_text3">{{ $message->name }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="tmc-Hero-detail is-appear fade-up-2" id="js-hero-detail" data-plx="60">
            <p class="tmc-Hero-detail_text1 fade-child">プロフィール</p>
            <p class="tmc-Hero-detail_text2 fade-child">{!! nl2br(e($message->profile)) !!}</p>
        </div>

    </section>

    <section class="tip-Points">

        <div class="tip-Points_subbg" id="js-whitebg"></div>

        <ol class="tip-Points-main" id="js-whitebg-heightbase">
            <li class="tip-Points-main_item">
                <div class="tip-Points-main_imgbox" data-plx="-60">
                    <div class="tip-Points-main_imgbox_inner is-appear mask-slide-1">
                        <img class="interview_image_size" src="{{ asset("image/messages/$message->image_02") }}" alt="{{ $message->image_02_title }}">
                    </div>
                </div>
                <div class="tip-Points-main_contentbox">
                    <div class="tip-Points-main_contentbox_inner is-appear fade-up-2">
                        <div>
                            <!-- <img src="/main/assets/img/message/proper-cooke/points-main_topic01.svg" class="fade-child"> -->
                        </div>
                        <h2 class="fade-child">{{ $message->title_01 }}</h2>
                        <p class="fade-child">{!! nl2br(e($message->content_01)) !!}</p>
                    </div>
                </div>
            </li>
            <li class="tip-Points-main_item">
                <div class="tip-Points-main_imgbox" data-plx="-60">
                    <div class="tip-Points-main_imgbox_inner is-appear mask-slide-1">
                        <img class="interview_image_size" src="{{ asset("image/messages/$message->image_03") }}" alt="{{ $message->image_03_title }}">
                    </div>
                </div>
                <div class="tip-Points-main_contentbox">
                    <div class="tip-Points-main_contentbox_inner is-appear fade-up-2">
                        <!-- <img src="/main/assets/img/message/proper-cooke/points-main_topic02.svg" class="fade-child"> -->
                        <h2 class="fade-child">{{ $message->title_02 }}</h2>
                        <p class="fade-child">{!! nl2br(e($message->content_02)) !!}</p>
                    </div>
                </div>
            </li>
            <li class="tip-Points-main_item">
                <div class="tip-Points-main_imgbox" data-plx="-60">
                    <div class="tip-Points-main_imgbox_inner is-appear mask-slide-1">
                        <img class="interview_image_size" src="{{ asset("image/messages/$message->image_04") }}" alt="{{ $message->image_04_title }}">
                    </div>
                </div>
                <div class="tip-Points-main_contentbox">
                    <div class="tip-Points-main_contentbox_inner is-appear fade-up-2">
                        <!-- <img src="/main/assets/img/message/proper-cooke/points-main_topic03.svg" class="fade-child"> -->
                        <h2 class="fade-child">{{ $message->title_03 }}</h2>
                        <p class="fade-child">{!! nl2br(e($message->content_03)) !!}</p>
                    </div>
                </div>
            </li>
        </ol>



        <div class="tip-Points-banner">
            <div class="is-appear mask-slide-1">
                <img class="tip-Points-banner_pc interview_image_footer_size" src="{{ asset("image/messages/$message->image_05") }}" alt="{{ $message->image_05_title }}">
                <img class="tip-Points-banner_sp" src="{{ asset("image/messages/$message->image_05") }}" alt="{{ $message->image_05_title }}">
            </div>
            <p class="is-appear tip-Points-banner-cap-bottomright fade-up-1 is-delay">{{ $message->title }}</p>
        </div>
    </section>


    <section class="tip-Banner">
        @include('commons.banner')
    </section>


</main>
@endsection
