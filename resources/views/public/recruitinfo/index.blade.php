@extends('layouts.public_app')

@section('content')
<main role="main">

    <section class="ti-Hero">

        <div class="ti-Hero-head is-appear fade-up-2">
            <div class="ti-Hero-head_title fade-child">
                <h1 class="js-gradient-text-ie11 fade-child">採用情報</h1>
            </div>
            <img class="ti-Hero-head_pc js-gradient-text-ie11 fade-child" src="/assets/img/interview/interview_header.jpg">
            <img class="ti-Hero-head_sp js-gradient-text-ie11 fade-child" src="/assets/img/interview/interview_header.jpg">
        </div>

        <div class="ti-Hero-detail" id="js-hero-detail" data-plx="60">
            <p class="is-appear fade-up-1">保育所の仕事を通じて、子供たちや保護者の皆さんなど地域社会へどのように貢献したいのか、各社員に語ってもらいます。</p>
        </div>

    </section>


    <!-- <section class="ti-Propers"> -->

<section id="talent-joblist" class="pg-list">
    <!-- <h2 class="pg-count">
        <a href="jobs.html">全 12 件</a>中 1 件 を表示しています </h2> -->
        @if (count($recruits) > 0)
        @foreach ($recruits as $recruit)
        <ul>
             <li class="pg-list-cassette jsc-joblist-cassette">
                 <a href="{{ route('recruitinfo.show', $recruit->id) }}">
                     <figure class="pg-list-cassette-image">
                         <img src="{{ asset("image/recruits/$recruit->main_image") }}" alt="{{ $recruit->main_image_title }}"/>
                     </figure>
                     <div class="pg-list-cassette-detail has-cover-image">
                         <div class="pg-list-cassette-detail-inner">
                             <h2>{{ $recruit->title }}</h2>
                             <p>
                                 <span class="pg-list-cassette-body jsc-joblist-cassette-body">
                                     {{ $recruit->job }}
                                </span>
                                  <span class="pg-list-cassette-continue jsc-joblist-cassette-continue"><span>続きを見る</span></span>
                              </p>
                          </div>
                          <ul class="sg-tags cf">
                              <li>{{ $recruit->type }}</li>
                              <?php
                                    $employments = explode(',', $recruit->employment);
                               ?>
                               @foreach ($employments as $employment)
                                    @if ($employment === '0')
                                        <li>正社員</li>
                                    @elseif ($employment === '1')
                                        <li>パート・アルバイト</li>
                                    @elseif ($employment === '2')
                                        <li>契約社員</li>
                                    @endif
                              @endforeach
                              <li class="sg-tag-location">{{ $recruit->tenant->name }}</li>
                              <li class="sg-tag-location">{{ $recruit->tenant->address }}</li>
                          </ul>
                      </div>
                  </a>
              </li>

         </ul>
         @endforeach
         @endif
         <!-- <p class="pg-count"> <a href="jobs.html">全 12 件</a>中 1 件 を表示しています </p> -->
     </section>

    <!-- </section> -->

    <div id="hexagonBg"></div>

</main>
@endsection
