@extends('layouts.public_app')

@section('content')
<main role="main">

    <section class="ti-Hero">

        <div class="ti-Hero-head is-appear fade-up-2">
            <div class="ti-Hero-head_title fade-child">
                <h1 class="js-gradient-text-ie11 fade-child">よくある質問</h1>
            </div>
            <img class="ti-Hero-head_pc js-gradient-text-ie11 fade-child" src="/assets/img/interview/interview_header.jpg">
            <img class="ti-Hero-head_sp js-gradient-text-ie11 fade-child" src="/assets/img/interview/interview_header.jpg">
        </div>

        <div class="ti-Hero-detail" id="js-hero-detail" data-plx="60">
            <p class="is-appear fade-up-1">保育所の仕事を通じて、子供たちや保護者の皆さんなど地域社会へどのように貢献したいのか、各社員に語ってもらいます。</p>
        </div>

    </section>



        <section class="faq sect fadein" id="faq">
            <div class="inner">
                <h2 class="faq_tit sect_tit">よくある質問</h2>
                    <div class="inner">
                    <div class="faq_lists">
                        <!-- ブレイド反映 -->
                        @if (count($faqs) > 0)
                            <?php $category = ''; ?>
                            @for ($i = 1; $i <= $category_count + 1; $i++)
                                @foreach ($faqs as $faq)
                                    @if ($faq->category->sort === $i)

                        <section class="faq_list">

                        @if ($category !== $faq->category->category )
                            <h3 class="faq_list_tit">{{ $faq->category->category }}</h3>
                        @endif
                            <dl class="faq_list_list">
                            <dt>{{ $faq->question }}</dt>
                            <dd>{{ $faq->answer }}</dd>
                            </dl>
                        </section>
                        @endif
                    @endforeach
                @endfor
            @endif
        </section>

        <section class="ti-Propers">
            @include('commons.banner')
        </section>

    <div id="hexagonBg"></div>

    <!-- Litalico追加 -->
    <script src="/litalico/assets/js/recruit_students/recruit/index.js"></script>
    <!-- <script src="/litalico/assets/js/common/base.js"></script> -->
    <!-- <script src="/litalico/assets/js/common/plugin.min.js"></script> -->
    <!-- <script src="/litalico/assets/js/recruit_students/common.js"></script> -->

    <script type="text/javascript">
    /* <![CDATA[ */
    var google_conversion_id = 940663956;
    var google_custom_params = window.google_tag_params;
    var google_remarketing_only = true;
    /* ]]> */
    </script>
    <script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
    </script>
    <noscript>
    <div style="display:inline;">
    <img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/940663956/?value=0&amp;guid=ON&amp;script=0"/>
    </div>
    </noscript>

    <script type="text/javascript" language="javascript">
    /* <![CDATA[ */
    var yahoo_retargeting_id = 'QT6CPF437H';
    var yahoo_retargeting_label = '';
    /* ]]> */
    </script>
    <script type="text/javascript" language="javascript" src="//b92.yahoo.co.jp/js/s_retargeting.js"></script>
    <!-- Litalico追加終了 -->

</main>
@endsection
