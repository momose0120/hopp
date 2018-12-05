@extends('layouts.public_app')

@section('content')
<main role="main">
    <section class="tip-Hero">

        <div class="tip-Hero-head">
            <div class="tip-Hero-head_inner is-appear fade-up-2">
                <div class="tip-Hero-head_profile" style="z-index:1;">
                    <!-- <img src="/main/assets/img/interview/proper-cooke/hero-head_logo.svg" class="fade-child"> -->
                    <p class="tip-Hero-head_nameeng fade-child">{{ $event->type }}</p>
                    <h1 class="tip-Hero-head_name fade-child" style="letter-spacing: 0em">{{ $event->title }}</h1>
                    <div class="tip-Hero-head_textbg fade-child">
                        <p class="tip-Hero-head_text js-gradient-text-ie11 fade-child"><span>「お客様と未来を"想像"し、</span><br><span>お客様の未来を''創造"する。」</span><br><span>セールス部の理念を体現する</span></p>
                    </div>
                </div>
                <img src="{{ asset("image/events/$event->main_image") }}" class="fade-child">
            </div>
        </div>
        <div id="js-hero-detail"></div>

    </section>




    <section class="tip-Points">
        <!-- <div class="tip-Points_subbg" id="js-whitebg"></div> -->
        <P class="page_event_contents fadein">{{ $event->type }}</P>
        <P class="page_event_contents fadein">{{ $event->title }}</P>
        <P class="page_event_contents fadein">{{ $event->content }}</P>
        <P class="page_event_contents fadein">{{ $event->date }}</P>
        <P class="page_event_contents fadein">{{ $event->capacity }}</P>
        <P class="page_event_contents fadein">{{ $event->location }}</P>
    </section>

    @include('public.eventinfo.entry')
    @if (count($errors) > 0)
        @foreach ($errors->all() as $error)
            <div class="alert alert-warning">{{ $error }}</div>
        @endforeach
    @endif


    <section class="tip-Banner">

    @include('commons.banner')

    </section>

    <section class="tip-Propers">

        @include('commons.event_list')

        <div class="tip-Propers_button">
            <a href="../index.html">
                <img src="/assets/img/interview/proper-cooke/propers_btn.svg">
            </a>
            <p>イベント一覧</p>
        </div>
    </section>

    <div id="hexagonBg"></div>

</main>

@endsection
