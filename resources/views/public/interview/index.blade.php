@extends('layouts.public_app')

@section('content')
<main role="main">

    <section class="ti-Hero">

        <div class="ti-Hero-head is-appear fade-up-2">
            <div class="ti-Hero-head_title fade-child">
                <h1 class="js-gradient-text-ie11 fade-child">働く仲間を知る</h1>
            </div>
            <img class="ti-Hero-head_pc js-gradient-text-ie11 fade-child" src="/assets/img/interview_header.jpg" alt="働く仲間">
            <img class="ti-Hero-head_sp js-gradient-text-ie11 fade-child" src="/assets/img/interview_header.jpg" alt="働く仲間">
        </div>

        <div class="ti-Hero-detail" id="js-hero-detail" data-plx="60">
            <p class="is-appear fade-up-1">保育所の仕事を通じて、子供たちや保護者の皆さんなど地域社会へどのように貢献したいのか、各社員に語ってもらいます。</p>
        </div>

    </section>


    <section class="ti-Propers">

        @include('commons.interview_list')

        @include('commons.banner')

    </section>

    <div id="hexagonBg"></div>

</main>
@endsection
