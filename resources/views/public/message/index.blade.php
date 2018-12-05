@extends('layouts.public_app')

@section('content')
<main role="main">

    <section class="tmc-Hero">

        <div class="tmc-Hero-head">
            <div class="tmc-Hero-head_inner">

                <img class="tmc-Hero-head_pc message_pagetop_image_size" src="{{ asset("image/messages/$message->main_image") }}">
                <img class="tmc-Hero-head_sp" src="{{ asset("image/messages/$message->main_image") }}">

                <div class="tmc-Hero-head_contentbox" data-plx="-60">
                    <!-- <img src="/assets/img/message/ceo/hero-head_label.svg"> -->
                    <div>
                        <h1><span>{{ $message->title }}</span></h1>
                        <p class="tmc-Hero-head_contentbox_text1">社会福祉法人　タレント<br>
                            {{ $message->position }}</p>
                        <p class="tmc-Hero-head_contentbox_text2">{{ $message->name_en }}</p>
                        <p class="tmc-Hero-head_contentbox_text3">{{ $message->name }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="tmc-Hero-detail is-appear fade-up-2" id="js-hero-detail" data-plx="60">
            <p class="tmc-Hero-detail_text1 fade-child">{{ $message->title }}</p>
            <p class="tmc-Hero-detail_text2 fade-child">{{ $message->profile }}</p>
        </div>

    </section>

    <section class="tip-Points">

        <div class="tip-Points_subbg" id="js-whitebg"></div>

        <ol class="tip-Points-main" id="js-whitebg-heightbase">
            <li class="tip-Points-main_item">
                <div class="tip-Points-main_imgbox" data-plx="-60">
                    <div class="tip-Points-main_imgbox_inner is-appear mask-slide-1">
                        <img class="interview_image_size" src="{{ asset("image/messages/$message->image_02") }}">
                    </div>
                </div>
                <div class="tip-Points-main_contentbox">
                    <div class="tip-Points-main_contentbox_inner is-appear fade-up-2">
                        <div>
                            <!-- <img src="/main/assets/img/message/proper-cooke/points-main_topic01.svg" class="fade-child"> -->
                        </div>
                        <h2 class="fade-child">{{ $message->title_01 }}</h2>
                        <p class="fade-child">{{ $message->content_01 }}</p>
                    </div>
                </div>
            </li>
            <li class="tip-Points-main_item">
                <div class="tip-Points-main_imgbox" data-plx="-60">
                    <div class="tip-Points-main_imgbox_inner is-appear mask-slide-1">
                        <img class="interview_image_size" src="{{ asset("image/messages/$message->image_03") }}">
                    </div>
                </div>
                <div class="tip-Points-main_contentbox">
                    <div class="tip-Points-main_contentbox_inner is-appear fade-up-2">
                        <!-- <img src="/main/assets/img/message/proper-cooke/points-main_topic02.svg" class="fade-child"> -->
                        <h2 class="fade-child">{{ $message->title_02 }}</h2>
                        <p class="fade-child">{{ $message->content_02 }}</p>
                    </div>
                </div>
            </li>
            <li class="tip-Points-main_item">
                <div class="tip-Points-main_imgbox" data-plx="-60">
                    <div class="tip-Points-main_imgbox_inner is-appear mask-slide-1">
                        <img class="interview_image_size" src="{{ asset("image/messages/$message->image_04") }}">
                    </div>
                </div>
                <div class="tip-Points-main_contentbox">
                    <div class="tip-Points-main_contentbox_inner is-appear fade-up-2">
                        <!-- <img src="/main/assets/img/message/proper-cooke/points-main_topic03.svg" class="fade-child"> -->
                        <h2 class="fade-child">{{ $message->title_03 }}</h2>
                        <p class="fade-child">{{ $message->content_03 }}</p>
                    </div>
                </div>
            </li>
        </ol>



        <div class="tip-Points-banner">
            <div class="is-appear mask-slide-1">
                <img class="tip-Points-banner_pc interview_image_footer_size" src="{{ asset("image/messages/$message->image_05") }}">
                <img class="tip-Points-banner_sp" src="{{ asset("image/messages/$message->image_05") }}">
            </div>
            <p class="is-appear tip-Points-banner-cap-bottomright fade-up-1 is-delay">「お客様と未来を<span>"想像"</span>し、<br class="tip-Points-banner_tempbr">お客様の未来を<span>"創造"</span>する。」<br class="tip-Points-banner_tempbr">セールス部の理念を体現する</p>
        </div>
    </section>


    <section class="tip-Banner">
        @include('commons.banner')
    </section>


</main>
@endsection
