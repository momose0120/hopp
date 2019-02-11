@extends('layouts.public_app')

@section('content')
<!-- スライダー　リクルートページ -->
<link href="/js_slick/slick/slick-theme.css" rel="stylesheet" type="text/css">
<link href="/js_slick/slick/slick.css" rel="stylesheet" type="text/css">

<main role="main">

    <section class="ti-Hero">

        <div class="ti-Hero-head is-appear fade-up-2">
            <div class="ti-Hero-head_title fade-child">
                <h1 class="js-gradient-text-ie11 fade-child">採用情報詳細</h1>
            </div>
            <img class="ti-Hero-head_pc js-gradient-text-ie11 fade-child" src="{{ asset("image/recruits/$recruit->main_image") }}" alt="main_image_title">
            <img class="ti-Hero-head_pc js-gradient-text-ie11 fade-child" src="{{ asset("image/recruits/$recruit->main_image") }}" alt="main_image_title">
            <img class="ti-Hero-head_sp js-gradient-text-ie11 fade-child" src="{{ asset("image/recruits/$recruit->main_image") }}" alt="main_image_title">
            <img class="ti-Hero-head_sp js-gradient-text-ie11 fade-child" src="{{ asset("image/recruits/$recruit->main_image") }}" alt="main_image_title">
        </div>

        <div class="ti-Hero-detail" id="js-hero-detail" data-plx="60">
            <!-- <p class="is-appear fade-up-1">保育所の仕事を通じて、子供たちや保護者の皆さんなど地域社会へどのように貢献したいのか、各社員に語ってもらいます。</p> -->
        </div>

    </section>


    <section class="ti-Propers">
        <div class="page_section_area">

        <div class="page_recruit_contents fadein">
            <h2><span>職種</span></h2>
            <p class="recruit_contents">{{ $recruit->title }}</p>
        </div>
        <div class="page_recruit_contents fadein">
            <h2><span>求める人材</span></h2>
            <p class="recruit_contents">{!! nl2br(e($recruit->talent)) !!}</p>
        </div>
        <div class="page_recruit_contents fadein">
            <h2><span>仕事内容</span></h2>
            <p class="recruit_contents">{!! nl2br(e($recruit->job)) !!}</p>
        </div>
        <div class="page_recruit_contents fadein">
            <h2><span>保育所風景</span></h2>
            <ul class="recruit_image_slick">
                <li class="recruit_contents recruit_image_slick_contents"><img src="{{ asset("image/recruits/$recruit->image_01") }}" alt="{{ $recruit->image_01_title }}"/></li>
                <li class="recruit_contents recruit_image_slick_contents"><img src="{{ asset("image/recruits/$recruit->image_02") }}" alt="{{ $recruit->image_02_title }}"/></li>
                <li class="recruit_contents recruit_image_slick_contents"><img src="{{ asset("image/recruits/$recruit->image_03") }}" alt="{{ $recruit->image_03_title }}"/></li>
            </ul>
        </div>

    		<div class="page_recruit_contents fadein">
    			<h2><span>募集要項</span></h2>
    			<table class="recruit_table">
                    <tr>
                        <th>勤務期間</th>
                        <td>{!! nl2br(e($recruit->work_period)) !!}</td>
                    </tr>
                    <tr>
    					<th>勤務時間帯</th>
    					<td>{!! nl2br(e($recruit->work_hours)) !!}</td>
    				</tr>
    				<tr>
    					<th>給与・時給</th>
    					<td>{!! nl2br(e($recruit->salary)) !!}</td>
    				</tr>
    				<tr>
    					<th>諸手当</th>
    					<td>{!! nl2br(e($recruit->allowance)) !!}</td>
    				</tr>
    				<tr>
    					<th>待遇・福利厚生</th>
    					<td>{!! nl2br(e($recruit->welfare)) !!}</td>
    				</tr>
    			</table>
    		</div>

            <div class="page_recruit_contents fadein">
                <h2><span>勤務地</span></h2>
                <p class="recruit_contents">{{ $recruit->tenant->access }}</p>
                <p class="recruit_contents">{{ $recruit->tenant->address }}</p>
            </div>
            <div>
                <iframe width="860" height="200" src="http://maps.google.co.jp/maps?&output=embed&q={{ $recruit->tenant->address }}&z=18"></iframe>
            </div>

    		<div class="page_recruit_contents fadein">
    			<h2><span>採用の流れ</span><div class="credit">※都合により予告なく変更になる場合もございます。</div></h2>
    			<table class="recruit_step_table">
    				<tr>
    					<th>応募</th>
    					<td>以下フォームより必要情報記載のうえ、送信ください。</td>
    				</tr>
    				<tr>
    					<th>採用担当よりご連絡</th>
    					<td>当方の採用担当よりご連絡し、面談日程を調整させて頂きます。</td>
    				</tr>
    				<tr>
    					<th>保育所見学</th>
    					<td>ご希望に応じて、保育所見学を実施致します。</td>
    				</tr>
    				<tr>
    					<th>面談（数回）</th>
    					<td>面談を1回もしくは2回実施致します。</td>
    				</tr>
    				<tr>
    					<th>内定</th>
    					<td>最終面談より3日以内に内定のご連絡を致します。</td>
    				</tr>
    			</table>
    		</div>
        </div>

            @include('public.contacts.create')
            @include('commons.banner')

    </section>


    <div id="hexagonBg"></div>

</main>

<!-- スライダー　リクルートページ -->
<script type="text/javascript" src="/js_slick/slick/slick.min.js"></script>

<script>
    $('.recruit_image_slick').slick({
        autoplay:true,
        autoplaySpeed:3000,
        dots: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll:1,
        pauseOnDotsHover: true,
        focusOnSelect:true,
    });
</script>

@endsection
