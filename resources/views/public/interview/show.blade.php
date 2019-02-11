@extends('layouts.public_app')

@section('content')
<main role="main">

    <section class="tip-Hero">

        <div class="tip-Hero-head">
            <div class="tip-Hero-head_inner is-appear fade-up-2">
                <div class="tip-Hero-head_profile" style="z-index:1;">
                    <!-- <img src="/main/assets/img/interview/proper-cooke/hero-head_logo.svg" class="fade-child"> -->
                    <p class="tip-Hero-head_nameeng fade-child">{{ $interview->name_en }}</p>
                    <h1 class="tip-Hero-head_name fade-child" style="letter-spacing: 0em">{{ $interview->name }}</h1>
                    <div class="tip-Hero-head_textbg fade-child">
                        <p class="tip-Hero-head_text js-gradient-text-ie11 fade-child"><span>{{ $interview->title }}</span></p>
                    </div>
                </div>
                <img src="{{ asset("image/employees/$interview->main_image") }}" class="fade-child pagetop_image_size">
            </div>
        </div>


        <div class="tip-Hero-detail" id="js-hero-detail">
            <div class="tip-Hero-detail_imgbox">
                <div data-plx="-60"><div class="is-appear mask-slide-1"><img class="interview_image_profile_size" src="{{ asset("image/employees/$interview->image_01") }}"></div></div>
            </div>

            <div class="tip-Hero-detail_contentbox is-appear fade-up-2">
                <div class="tip-Hero-detail_name fade-child">
                    <!-- <img src="/main/assets/img/interview/proper-cooke/hero-detail_logo.svg"> -->
                    <p>{{ $interview->name }}</p>
                    <p>プロフィール</p>
                </div>
                <!-- <div class="tip-Hero-detail_info fade-child">
                    <p>2014年入社</p>
                </div> -->
                <p class="tip-Hero-detail_profile fade-child">{!! nl2br(e($interview->profile)) !!}</p>

            </div>

        </div>

    </section>



    <section class="tip-Points">

        <div class="tip-Points_subbg" id="js-whitebg"></div>

        <ol class="tip-Points-main" id="js-whitebg-heightbase">
            <li class="tip-Points-main_item">
                <div class="tip-Points-main_imgbox" data-plx="-60">
                    <div class="tip-Points-main_imgbox_inner is-appear mask-slide-1">
                        <img class="interview_image_size" src="{{ asset("image/employees/$interview->image_02") }}">
                    </div>
                </div>
                <div class="tip-Points-main_contentbox">
                    <div class="tip-Points-main_contentbox_inner is-appear fade-up-2">
                        <div>
                            <!-- <img src="/main/assets/img/interview/proper-cooke/points-main_topic01.svg" class="fade-child"> -->
                        </div>
                        <h2 class="fade-child">{{ $interview->title_01 }}</h2>
                        <p class="fade-child">{!! nl2br(e($interview->content_01)) !!}</p>
                    </div>
                </div>
            </li>
            <li class="tip-Points-main_item">
                <div class="tip-Points-main_imgbox" data-plx="-60">
                    <div class="tip-Points-main_imgbox_inner is-appear mask-slide-1">
                        <img class="interview_image_size" src="{{ asset("image/employees/$interview->image_03") }}">
                    </div>
                </div>
                <div class="tip-Points-main_contentbox">
                    <div class="tip-Points-main_contentbox_inner is-appear fade-up-2">
                        <!-- <img src="/main/assets/img/interview/proper-cooke/points-main_topic02.svg" class="fade-child"> -->
                        <h2 class="fade-child">{{ $interview->title_02 }}</h2>
                        <p class="fade-child">{!! nl2br(e($interview->content_02)) !!}</p>
                    </div>
                </div>
            </li>
            <li class="tip-Points-main_item">
                <div class="tip-Points-main_imgbox" data-plx="-60">
                    <div class="tip-Points-main_imgbox_inner is-appear mask-slide-1">
                        <img class="interview_image_size" src="{{ asset("image/employees/$interview->image_04") }}">
                    </div>
                </div>
                <div class="tip-Points-main_contentbox">
                    <div class="tip-Points-main_contentbox_inner is-appear fade-up-2">
                        <!-- <img src="/main/assets/img/interview/proper-cooke/points-main_topic03.svg" class="fade-child"> -->
                        <h2 class="fade-child">{{ $interview->title_03 }}</h2>
                        <p class="fade-child">{!! nl2br(e($interview->content_03)) !!}</p>
                    </div>
                </div>
            </li>
        </ol>



        <div class="tip-Points-banner">
            <div class="is-appear mask-slide-1 interview_image_footer">
                <img class="tip-Points-banner_pc interview_image_footer_size" src="{{ asset("image/employees/$interview->image_05") }}">
                <img class="tip-Points-banner_sp" src="{{ asset("image/employees/$interview->image_05") }}">
            </div>
            <p class="is-appear tip-Points-banner-cap-bottomright fade-up-1 is-delay">{{ $interview->title }}</p>
        </div>
    </section>


    <section class="tip-Banner">

    @include('commons.banner')

    </section>

    <section class="tip-Propers">

        @include('commons.interview_list')

        <div class="tip-Propers_button">
            <a href="{{ route('interview.index') }}">
                <img src="/assets/img/interview/proper-cooke/propers_btn.svg">
            </a>
            <p>働く仲間一覧</p>
        </div>
    </section>

</main>

@endsection
