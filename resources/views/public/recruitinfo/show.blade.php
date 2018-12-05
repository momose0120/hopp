@extends('layouts.public_app')

@section('content')

<main role="main">

    <section class="ti-Hero">

        <div class="ti-Hero-head is-appear fade-up-2">
            <div class="ti-Hero-head_title fade-child">
                <h1 class="js-gradient-text-ie11 fade-child">採用情報詳細</h1>
            </div>
            <img class="ti-Hero-head_pc js-gradient-text-ie11 fade-child" src="{{ asset("image/recruits/$recruit->main_image") }}">
            <img class="ti-Hero-head_sp js-gradient-text-ie11 fade-child" src="{{ asset("image/recruits/$recruit->main_image") }}">
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
            <h2><span>仕事内容</span></h2>
            <p class="recruit_contents">{{ $recruit->job }}</p>
        </div>
        <div class="page_recruit_contents fadein">
            <h2><span>求める人材</span></h2>
            <p class="recruit_contents">{{ $recruit->talent }}</p>
        </div>
        <div class="page_recruit_contents fadein">
            <h2><span>保育所風景</span></h2>
            <p class="recruit_contents"><img src="{{ asset("image/recruits/$recruit->image_01") }}" alt=""/></p>
            <p class="recruit_contents"><img src="{{ asset("image/recruits/$recruit->image_02") }}" alt=""/></p>
            <p class="recruit_contents"><img src="{{ asset("image/recruits/$recruit->image_03") }}" alt=""/></p>
        </div>

    		<div class="page_recruit_contents fadein">
    			<h2><span>募集要項</span></h2>
    			<table class="recruit_table">
                    <tr>
    					<th>勤務時間帯</th>
    					<td>実働8時間</td>
    				</tr>
    				<tr>
    					<th>給与・時給</th>
    					<td>大卒・大学院卒：月給（初任給）206,000円（2018年4月給与から変更予定）</td>
    				</tr>
    				<tr>
    					<th>諸手当</th>
    					<td>通勤手当、残業手当　他</td>
    				</tr>
    				<tr>
    					<th>待遇・福利厚生</th>
    					<td>健康保険、厚生年金保険、雇用保険、労災保険、交通費全額支給</td>
    				</tr>
    			</table>
    		</div>

            <div class="page_recruit_contents fadein">
                <h2><span>勤務地</span></h2>
                <p class="recruit_contents">{{ $recruit->tenant->access }}</p>
                <p class="recruit_contents">{{ $recruit->tenant->address }}</p>
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
            @if (count($errors) > 0)
                @foreach ($errors->all() as $error)
                    <div class="alert alert-warning">{{ $error }}</div>
                @endforeach
            @endif

            @include('commons.banner')

    </section>

    <div id="hexagonBg"></div>

</main>
@endsection
