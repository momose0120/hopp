@extends('layouts.public_app')

@section('content')
<main role="main">

    <section class="ti-Hero">

        <div class="ti-Hero-head is-appear fade-up-2">
            <div class="ti-Hero-head_title fade-child">
                <h1 class="js-gradient-text-ie11 fade-child">イベント情報</h1>
            </div>
            <img class="ti-Hero-head_pc js-gradient-text-ie11 fade-child" src="/assets/img/event_header.jpg" alt="イベント">
            <img class="ti-Hero-head_sp js-gradient-text-ie11 fade-child" src="/assets/img/event_header.jpg" alt="イベント">
        </div>

        <div class="ti-Hero-detail" id="js-hero-detail" data-plx="60">
            <p class="is-appear fade-up-1">各種イベントを実施しています。</p>
        </div>

    </section>


    <section class="ti-Propers">

        @include('commons.event_list')

        @include('commons.banner')

    </section>

    <div id="hexagonBg"></div>

</main>
@endsection
