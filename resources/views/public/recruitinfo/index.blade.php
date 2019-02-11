@extends('layouts.public_app')

@section('content')
<main role="main">

    <section class="ti-Hero">

        <div class="ti-Hero-head is-appear fade-up-2">
            <div class="ti-Hero-head_title fade-child">
                <h1 class="js-gradient-text-ie11 fade-child">採用情報</h1>
            </div>
            <img class="ti-Hero-head_pc js-gradient-text-ie11 fade-child" src="/assets/img/recruit_header.jpg" alt="採用情報">
            <img class="ti-Hero-head_sp js-gradient-text-ie11 fade-child" src="/assets/img/recruit_header.jpg" alt="採用情報">
        </div>

        <div class="ti-Hero-detail" id="js-hero-detail" data-plx="60">
            <p class="is-appear fade-up-1">保育所の仕事を通じて、子供たちや保護者の皆さんなど地域社会へどのように貢献したいのか、各社員に語ってもらいます。</p>
        </div>

    </section>


    <!-- <section class="ti-Propers"> -->

<section id="talent-joblist" class="pg-list">
    <!-- <h2 class="pg-count">
        <a href="jobs.html">全 12 件</a>中 1 件 を表示しています </h2> -->
        <div class="welfare_workplace_headline tab-Index_heading is-appear fade-up-2">
            <h1 class="tab-Index_heading-lv2 fade-child">募集要項一覧</h1>
        </div>

        @if (count($recruits) > 0)
        @foreach ($recruits as $recruit)
        <div class="recruitinfo_list_wap fadein">
        <ul>
             <li class="pg-list-cassette jsc-joblist-cassette">
                 <a href="{{ route('recruitinfo.show', $recruit->id) }}" class="recruitinfo_list_link">
                     <div class="revruitinfo_list_flexbox">
                     <div class="recruit_list_image_effect recruitinfo_list_flexitem_1">
                         <img src="{{ asset("image/recruits/$recruit->main_image") }}" alt="{{ $recruit->main_image_title }}"/>
                     </div>
                     <div class="recruitinfo_list_flexitem_2">
                         <div class="pg-list-cassette-detail-inner">
                             <p class="recruit_list_title">{{ $recruit->title }}</h2>
                             <h2 class="recruit_list_job_salary_title sp_display_none">仕事内容</h2>
                             <p class="recruit_list_job_salary_title_content sp_display_none">
                                 <!-- <span class="pg-list-cassette-body jsc-joblist-cassette-body"> -->
                                     {{ $recruit->job }}
                                <!-- </span> -->
                                  <!-- <span class="pg-list-cassette-continue jsc-joblist-cassette-continue"><span>続きを見る</span></span> -->
                              </p>
                              <h2 class="recruit_list_job_salary_title">給与・時給</h2>
                              <p class="recruit_list_job_salary_title_content">
                                  {{ $recruit->salary }}
                              </p>
                          </div>
                          <ul class="sg-tags cf">
                              <li>{{ $recruit->type }}</li>
                              <?php
                                    $employments = explode(',', $recruit->employment);
                               ?>
                               @foreach ($employments as $employment)
                                    @if ($employment === '0')
                                        <li class="employment">正社員</li>
                                    @elseif ($employment === '1')
                                        <li class="employment">パート・アルバイト</li>
                                    @elseif ($employment === '2')
                                        <li class="employment">契約社員</li>
                                    @endif
                              @endforeach
                              <li class="sg-tag-location">{{ $recruit->tenant->name }}</li>
                              <li class="sg-tag-location">{{ $recruit->tenant->address }}</li>
                          </ul>
                  </div>
                  </div>
                  </a>
              </li>
         </ul>
        </div>
         @endforeach
         @else
         <div class="coming_soon">
             <p class="comin_soon_detail_en">coming soon</p>
             <p class="comin_soon_detail_ja">募集要項は近日公開します。</p>
         </div>
         @endif
         <div class="coming_soon">
             <p class="comin_soon_detail_en">coming soon</p>
             <p class="comin_soon_detail_ja">募集要項は近日公開します。</p>
         </div>
     </section>

    <!-- </section> -->

    <div id="hexagonBg"></div>

</main>
@endsection
