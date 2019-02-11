@extends('layouts.public_app')

@section('content')
<main role="main">

	<section class="sec-hero bg-slider">
		<div class="sec-inner">
			<div class="hero-ttl">
				<div class="hero-ttl_inner">
					<div class="mask-slide-1 mask-slide-2 is-appear gradation">
						<h1 class="hero-h1">
							<div class="fade-parent">
								<div class="fade-child">
									<p class="h1-outer">
										<span class="h1-inner">小さな冒険、はじめよう。</span>
									</p>
								</div>
							</div>
							<!-- <div class="fade-parent">
								<div class="fade-child">
									<p class="h1-outer">
										<span class="h1-inner">新たな世界へ</span>
									</p>
								</div>
							</div> -->
						</h1>
					</div>
					<div class="fade-child">
						<h2 class="hero-h2">
                            <span>保育士採用ホームページ</span>
							<span>Hopp！</span>
						</h2>
					</div>
				</div>
			</div>
			<!-- <div class="banner-2020">
				<a href="http://2020recruit.ga-tech.co.jp/"  target="_blank">
					<img src="" width="100%" alt="" data-img-pc="/assets/img/2020_banner.png" data-img-sp="/assets/img/2020_banner_sp.png">
				</a>
			</div> -->
			<div class="hero-scroll">
				<p><img src="assets/img/txt-scrolldown.png" width="100%" alt="Scroll down"></p>
				<a href="javascript:void(0);" class="hero-scroll-trigger"></a>
			</div>
		</div>
		<div class="t-Hero-detail" id="js-hero-detail"></div>
	</section>

	<article class="article-body">
		<!-- <section class="sec-headline">
			<div class="sec-inner">
				<div class="sec-headline_wrap">
					<div class="sec-headline_ttl"><span>Headline</span></div>
					<div class="sec-headline_detail">
					</div>
				</div>
			</div>
		</section> -->
		<section class="sec-intro">
			<div class="sec-inner" data-plx="-40">
				<!-- <div class="inner-box left mask-slide-2 is-appear">
					<h1 class="sec-ttl">
						<div class="ttl-outer fade-parent">
							<p class="fade-child">
								<span class="ttl-inner"><img src="assets/img/ttl-intro-1.png" width="100%" alt="TECHで世界を、。"></span>
							</p>
						</div>
						<div class="ttl-outer fade-parent">
							<p class="fade-child">
								<span class="ttl-inner"><img src="assets/img/ttl-intro-2.png" width="100%" alt="変えていく。"></span>
							</p>
						</div>
					</h1>
				</div> -->
				<div class="inner-box right is-appear">
                    <p class="sentence">まず、一歩を踏み出してみよう。</p>
					<p class="sentence">First, let's take a step.</p>

					<p class="sentence topSpace">そうすればきっと見えるはず</p>
					<p class="sentence">いままでにない素晴らしい景色が。</p>
				</div>
			</div>
		</section>

		<section class="sec-message">
			<div data-plx="40">
				<div class="sec-inner fade-up-2 is-appear">
					<div class="message-ttl-box ">
						<div class="fade-child">
							<div class="sec-ttl">
								<div class="tm-Hero-head_title fade-child">
									<!-- <img src="assets/img/message/hero-head_logo.svg"> -->
									<h1 class="js-gradient-text-ie11">働く仲間を知る</h1>
								</div>
							</div>
						</div>
						<div class="fade-child">
							<h2 class="sec-description">
								<span>一緒に働く仲間たちが熱いメッセージを伝えます。</span>
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div class="message-img-box mask-slide-2 is-appear">
				<div class="img-1 fade-parent">
					<div data-plx="80"><div class="fade-child"><img src="assets/img/interview_top_1.jpg" width="100%" alt="働く仲間"></div></div>
				</div>
				<div class="img-2 fade-parent">
					<div data-plx="-80"><div class="fade-child"><img src="assets/img/interview_top_2.jpg" width="100%" alt="働く仲間"></div></div>
				</div>
			</div>
			<div class="intro-btn-box">
				<div class="fade-up-1 is-appear"><a href="{{ route('interview.index') }}" class="ta-Main-message_contentbox_text3">働く仲間の詳細</a></div>
			</div>
		</section>

		<section class="sec-aboutus">
			<div class="sec-inner">
				<div class="message-box-left">
					<div data-plx="50">
						<div class="left-inner fade-up-2 is-appear">
							<div class="fade-child">
								<div class="sec-ttl">
									<div class="ta-Hero-head_title fade-child">
										<!-- <img src="assets/img/aboutus/hero-head_logo.svg"> -->
										<h1 class="js-gradient-text-ie11">トップメッセージ</h1>
									</div>
								</div>
							</div>
							<div class="fade-child">
								<h2 class="sec-description">
									<span>法人代表から、目指すビジョンについて語ってもらいます。</span>
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div class="message-box-right">
					<div class="mask-slide-1 is-appear"><img src="assets/img/message_top.jpg" alt="代表メッセージ"></div>
				</div>
				<div class="aboutus-btn-box">
					<div class="btn-inner">
						<div class="fade-up-1 is-appear"><a href="{{ route('message.index') }}" class="ta-Main-message_contentbox_text3 grade_hover">トップメッセージ詳細</a></div>
					</div>
				</div>
				<div class="bg-pentagon pentagon-1"></div><!-- data-plx="-50" -->
				<div class="bg-pentagon pentagon-2"></div><!-- data-plx="20"-->
				<div class="bg-pentagon pentagon-3"></div><!-- data-plx="30"-->
			</div>
		</section>

		<section class="sec-culture">
			<div class="sec-inner">
				<div class="message-box-right">
					<div data-plx="100">
						<div class="left-inner fade-up-2 is-appear">
							<div class="fade-child">
								<div class="sec-ttl">
									<div class="ta-Hero-head_title fade-child">
										<!-- <img src="assets/img/culture/hero-head_logo.svg"> -->
										<h1 class="js-gradient-text-ie11">働く環境を知る</h1>
									</div>
								</div>
							</div>
							<div class="fade-child">
								<h2 class="sec-description">
									<span>職場の環境や雰囲気・制度、保育所の概要などの説明をします。</span>
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div class="message-box-left">
					<div class="mask-slide-1 is-appear"><img src="assets/img/aboutus_top.jpg" alt="働く環境" width="100%;"></div>
				</div>
				<div class="event-btn-box">
					<div class="btn-inner">
						<div class="fade-up-1 is-appear"><a href="{{ route('aboutus.index') }}" class="ta-Main-message_contentbox_text3 grade_hover">働く環境詳細</a></div>
					</div>
				</div>
				<div class="bg-pentagon pentagon-1"></div>
				<div class="bg-pentagon pentagon-2"></div>
				<div class="bg-pentagon pentagon-3"></div>
			</div>
		</section>

        <section class="sec-aboutus">
            <div class="sec-inner">
                <div class="message-box-left">
                    <div data-plx="50">
                        <div class="left-inner fade-up-2 is-appear">
                            <div class="fade-child">
                                <div class="sec-ttl">
                                    <div class="ta-Hero-head_title fade-child">
                                        <!-- <img src="assets/img/aboutus/hero-head_logo.svg"> -->
                                        <h1 class="js-gradient-text-ie11">イベント</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="fade-child">
                                <h2 class="sec-description">
                                    <span>新卒採用の方、中途採用の方向けに各種イベントのご案内をします。</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="message-box-right">
                    <div class="mask-slide-1 is-appear"><img src="assets/img/event_top.jpg" alt="イベント"></div>
                </div>
                <div class="aboutus-btn-box">
                    <div class="btn-inner">
                        <div class="fade-up-1 is-appear"><a href="{{ route('eventinfo.index') }}" class="ta-Main-message_contentbox_text3 grade_hover">イベント一覧</a></div>
                    </div>
                </div>
                <div class="bg-pentagon pentagon-1"></div><!-- data-plx="-50" -->
                <div class="bg-pentagon pentagon-2"></div><!-- data-plx="20"-->
                <div class="bg-pentagon pentagon-3"></div><!-- data-plx="30"-->
            </div>
        </section>

        <section class="sec-culture">
            <div class="sec-inner">
                <div class="message-box-right">
                    <div data-plx="100">
                        <div class="left-inner fade-up-2 is-appear">
                            <div class="fade-child">
                                <div class="sec-ttl">
                                    <div class="ta-Hero-head_title fade-child">
                                        <!-- <img src="assets/img/culture/hero-head_logo.svg"> -->
                                        <h1 class="js-gradient-text-ie11">FAQ　よくある質問</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="fade-child">
                                <h2 class="sec-description">
                                    <span>採用に関してよくある質問を纏めています。</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="message-box-left">
                    <div class="mask-slide-1 is-appear"><img src="assets/img/faq_top.jpg" alt="よくある質問" width="100%;"></div>
                </div>
                <div class="event-btn-box">
                    <div class="btn-inner">
                        <div class="fade-up-1 is-appear"><a href="{{ route('faqinfo.index') }}" class="ta-Main-message_contentbox_text3 grade_hover">よくある質問一覧</a></div>
                    </div>
                </div>
                <div class="bg-pentagon pentagon-1"></div>
                <div class="bg-pentagon pentagon-2"></div>
                <div class="bg-pentagon pentagon-3"></div>
            </div>
        </section>

		<!-- <section class="sec-staffinterview">
			<div class="sec-inner">
				<div data-plx="60">
					<div class="staffinterview-ttl-box fade-up-2 is-appear">
						<div class="fade-child">
							<div class="sec-ttl">
								<div class="ti-Hero-head_title fade-child">
									<img src="assets/img/interview/hero-head_logo.svg" class="fade-child">
									<h1 class="js-gradient-text-ie11 fade-child">社員インタビュー</h1>
								</div>
							</div>
						</div>
						<div class="fade-child">
							<h2 class="sec-description">
								<span>仕事を通して、社会にどんなイノベーションを起こしたいか。社員それぞれが思いを語ります。</span>
							</h2>
						</div>
					</div>
				</div>
				<div class="staffinterview-link-box">




<ul class="staffinterview-linklist mask-slide-2 is-appear">
	<li class="fade-parent">
		<a href="interview/proper-cooke/index.html">
			<div class="fade-child"><div class="img-box"><img src="assets/img/interview/propers_pic_cooke.jpg" width="100%" alt=""></div></div>
			<div class="detail-box">
				<p class="detail-career heightLine-group1">2014年入社</span></p>
				<p class="detail-name-jp">クック ジュリアン 聖也</p>
				<p class="detail-name-en">SEIYA J.COOKE</p>
			</div>
		</a>
	</li>
	<li class="fade-parent">
		<a href="interview/proper-iida/index.html">
			<div class="fade-child"><div class="img-box"><img src="assets/img/interview/propers_pic_iida.jpg" width="100%" alt=""></div></div>
			<div class="detail-box">
				<p class="detail-career heightLine-group1">2014年入社</span></p>
				<p class="detail-name-jp">飯田 修三</p>
				<p class="detail-name-en">SHUZO IIDA</p>
			</div>
		</a>
	</li>
	<li class="fade-parent">
		<a href="interview/proper-inamoto/index.html">
			<div class="fade-child"><div class="img-box"><img src="assets/img/interview/propers_pic_inamoto.jpg" width="100%" alt=""></div></div>
			<div class="detail-box">
				<p class="detail-career heightLine-group1">2017年入社</span></p>
				<p class="detail-name-jp">稲本 浩久</p>
				<p class="detail-name-en">HIROHISA INAMOTO</p>
			</div>
		</a>
	</li>
	<li class="fade-parent">
		<a href="interview/proper-nagano/index.html">
			<div class="fade-child"><div class="img-box"><img src="assets/img/interview/propers_pic_nagano.jpg" width="100%" alt=""></div></div>
			<div class="detail-box">
				<p class="detail-career heightLine-group2">2015年入社</span></p>
				<p class="detail-name-jp">永野 さくら</p>
				<p class="detail-name-en">SAKURA NAGANO</p>
			</div>
		</a>
	</li>
	<li class="fade-parent">
		<a href="interview/proper-shimizu/index.html">
			<div class="fade-child"><div class="img-box"><img src="assets/img/interview/propers_pic_shimizu.jpg" width="100%" alt=""></div></div>
			<div class="detail-box">
				<p class="detail-career heightLine-group2">2017年入社</span></p>
				<p class="detail-name-jp">清水 絢子</p>
				<p class="detail-name-en">AYAKO SHIMIZU</p>
			</div>
		</a>
	</li>
	<li class="fade-parent">
		<a href="interview/proper-muta/index.html">
			<div class="fade-child"><div class="img-box"><img src="assets/img/interview/propers_pic_muta.jpg" width="100%" alt=""></div></div>
			<div class="detail-box">
				<p class="detail-career heightLine-group2">2016年入社</span></p>
				<p class="detail-name-jp">牟田 美紀</p>
				<p class="detail-name-en">MIKI MUTA</p>
			</div>
		</a>
	</li>

	<li class="fade-parent">
		<a href="interview/proper-ishida/index.html">
			<div class="fade-child"><div class="img-box"><img src="assets/img/interview/propers_pic_ishida.jpg" width="100%" alt=""></div></div>
			<div class="detail-box">
				<p class="detail-career heightLine-group3">2016年入社</span></p>
				<p class="detail-name-jp">石田 雄一</p>
				<p class="detail-name-en">YUICHI ISHIDA</p>
			</div>
		</a>
	</li>
	<li class="fade-parent">
		<a href="interview/proper-hashimoto/index.html">
			<div class="fade-child"><div class="img-box"><img src="assets/img/interview/propers_pic_hashimoto.jpg" width="100%" alt=""></div></div>
			<div class="detail-box">
				<p class="detail-career heightLine-group3">2017年入社</span></p>
				<p class="detail-name-jp">橋本 武彦</p>
				<p class="detail-name-en">TAKEHIKO HASHIMOTO</p>
			</div>
		</a>
	</li>
	<li class="fade-parent">
		<a href="interview/proper-sekikawa/index.html">
			<div class="fade-child"><div class="img-box"><img src="assets/img/interview/propers_pic_sekikawa.jpg" width="100%" alt=""></div></div>
			<div class="detail-box">
				<p class="detail-career heightLine-group3">2017年入社</span></p>
				<p class="detail-name-jp">関川 和克</p>
				<p class="detail-name-en">KAZUYOSHI SEKIKAWA</p>
			</div>
		</a>
	</li>
	<li class="fade-parent">
		<a href="interview/proper-kawasaki/index.html">
			<div class="fade-child"><div class="img-box"><img src="assets/img/interview/propers_pic_kawasaki.jpg" width="100%" alt=""></div></div>
			<div class="detail-box">
				<p class="detail-career heightLine-group4">2017年入社</span></p>
				<p class="detail-name-jp">川崎 総一郎</p>
				<p class="detail-name-en">SOICHIRO KAWASAKI</p>
			</div>
		</a>
	</li> -->
	<!-- <li class="fade-parent">
		<a href="/interview/proper-miura/">
			<div class="fade-child"><div class="img-box"><img src="/assets/img/interview/propers_pic_miura.jpg" width="100%" alt=""></div></div>
			<div class="detail-box">
				<p class="detail-career heightLine-group4">2017年入社</span></p>
				<p class="detail-name-jp">三浦 有貴</p>
				<p class="detail-name-en">YUKI MIURA</p>
			</div>
		</a>
	</li> -->
	<!-- <li class="fade-parent">
		<a href="interview/proper-sato/index.html">
			<div class="fade-child"><div class="img-box"><img src="assets/img/interview/propers_pic_sato.jpg" width="100%" alt=""></div></div>
			<div class="detail-box">
				<p class="detail-career heightLine-group4">2017年入社</span></p>
				<p class="detail-name-jp">佐藤 直之</p>
				<p class="detail-name-en">NAOYUKI　SATO</p>
			</div>
		</a>
	</li>
	<li class="fade-parent">
		<a href="interview/proper-yamamoto/index.html">
			<div class="fade-child"><div class="img-box"><img src="assets/img/interview/propers_pic_yamamoto.jpg" width="100%" alt=""></div></div>
			<div class="detail-box">
				<p class="detail-career heightLine-group5">2017年入社</span></p>
				<p class="detail-name-jp">山本 佳奈子</p>
				<p class="detail-name-en">KANAKO YAMAMOTO</p>
			</div>
		</a>
	</li>

	<li class="fade-parent">
		<a href="interview/proper-koya-yamamoto/index.html">
			<div class="fade-child"><div class="img-box"><img src="assets/img/interview/propers_pic_koya-yamamoto.jpg" width="100%" alt=""></div></div>
			<div class="detail-box">
				<p class="detail-career heightLine-group5">2016年入社</p>
				<p class="detail-name-jp">山本 光哉</p>
				<p class="detail-name-en">KOYA YAMAMOTO</p>
			</div>
		</a>
	</li>
	<li class="fade-parent">
		<a href="interview/proper-kenkichi-nagamori/index.html">
			<div class="fade-child"><div class="img-box"><img src="assets/img/interview/propers_pic_kenkichi-nagamori.jpg" width="100%" alt=""></div></div>
			<div class="detail-box">
				<p class="detail-career heightLine-group5">2018年入社</p>
				<p class="detail-name-jp">永守 賢吉</p>
				<p class="detail-name-en">KENKICHI NAGAMORI</p>
			</div>
		</a>
	</li>
	<li class="fade-parent">
		<a href="interview/proper-yuki-kitazaki/index.html">
			<div class="fade-child"><div class="img-box"><img src="assets/img/interview/propers_pic_yuki-kitazaki.jpg" width="100%" alt=""></div></div>
			<div class="detail-box">
				<p class="detail-career heightLine-group6">2018年入社</p>
				<p class="detail-name-jp">北﨑 佑樹</p>
				<p class="detail-name-en">YUKI KITAZAKI</p>
			</div>
		</a>
	</li>
	<li class="fade-parent">
		<a href="interview/proper-toru-furushima/index.html">
			<div class="fade-child"><div class="img-box"><img src="assets/img/interview/propers_pic_toru-furushima.jpg" width="100%" alt=""></div></div>
			<div class="detail-box">
				<p class="detail-career heightLine-group6">2018年入社</p>
				<p class="detail-name-jp">古嶋 十潤</p>
				<p class="detail-name-en">TORU FURUSHIMA</p>
			</div>
		</a>
	</li>
	<li class="fade-parent">
		<a href="interview/proper-mari-murotani/index.html">
			<div class="fade-child"><div class="img-box"><img src="assets/img/interview/propers_pic_mari-murotani.jpg" width="100%" alt=""></div></div>
			<div class="detail-box">
				<p class="detail-career heightLine-group6">2018年入社</p>
				<p class="detail-name-jp">室谷 真里</p>
				<p class="detail-name-en">MARI MUROTANI</p>
			</div>
		</a>
	</li>
	<li class="fade-parent">
		<a href="interview/proper-masashi-hasegawa/index.html">
			<div class="fade-child"><div class="img-box"><img src="assets/img/interview/propers_pic_masashi-hasegawa.jpg" width="100%" alt=""></div></div>
			<div class="detail-box">
				<p class="detail-career heightLine-group7">2016年入社</p>
				<p class="detail-name-jp">長谷川 将司</p>
				<p class="detail-name-en">MASASHI HASEGAWA</p>
			</div>
		</a>
	</li>
	<li class="fade-parent">
		<a href="interview/proper-tomokazu-tochi/index.html">
			<div class="fade-child"><div class="img-box"><img src="assets/img/interview/propers_pic_tomokazu-tochi.jpg" width="100%" alt=""></div></div>
			<div class="detail-box">
				<p class="detail-career heightLine-group7">2018年入社</p>
				<p class="detail-name-jp">遠地 等一</p>
				<p class="detail-name-en">TOMOKAZU TOCHI</p>
			</div>
		</a>
	</li>
	<li class="fade-parent">
		<a href="interview/proper-takeo-hashimoto/index.html">
			<div class="fade-child"><div class="img-box"><img src="assets/img/interview/propers_pic_takeo-hashimoto.jpg" width="100%" alt=""></div></div>
			<div class="detail-box">
				<p class="detail-career heightLine-group7">2018年入社</p>
				<p class="detail-name-jp">橋本 健郎</p>
				<p class="detail-name-en">TAKEO HASHIMOTO</p>
			</div>
		</a>
	</li>
	<li class="fade-parent">
		<a href="interview/proper-nao-yoshida/index.html">
			<div class="fade-child"><div class="img-box"><img src="assets/img/interview/propers_pic_nao-yoshida.jpg" width="100%" alt=""></div></div>
			<div class="detail-box">
				<p class="detail-career heightLine-group8">2016年入社</p>
				<p class="detail-name-jp">吉田 奈央</p>
				<p class="detail-name-en">NAO YOSHIDA</p>
			</div>
		</a>
	</li>




</ul>


				</div>
				<div class="staffinterview-btn-box">
					<div class="fade-up-1 is-appear"><a href="interview/index.html" class="ta-Main-message_contentbox_text3">スタッフ一覧</a></div>
				</div> -->
				<!-- <div class="bg-pentagon pentagon-1"></div>
				<div class="bg-pentagon pentagon-2"></div>
				<div class="bg-pentagon pentagon-3"></div>
			</div>
		</section> -->

		<!-- <section class="sec-event">
			<div class="sec-inner">
				<div data-plx="60">
					<div class="staffinterview-ttl-box fade-up-2 is-appear">
						<div class="fade-child">
							<div class="sec-ttl">
								<div class="ti-Hero-head_title fade-child">
									<img src="/assets/img/event/hero-head_logo.svg" class="fade-child">
									<h1 class="js-gradient-text-ie11 fade-child">イベント情報</h1>
								</div>
							</div>
						</div>
						<div class="fade-child">
							<h2 class="sec-description">
								<span>GA technologiesの採用や選考に関するイベント情報を掲載しています。</span>
							</h2>
						</div>
					</div>
				</div>
				<div class="staffinterview-link-box">

					<div class="tac-footerlocalnav">
						<div class="tac-footerlocalnav_inner">
							<ul class="localnav_list is-appear fade-up-2">
								<li class="localnav_list_items fade-child" data-postdate="2018-05-25">
									<a href="#">
										<div class="list_items_img_wrap">
											<div class="list_items_img_block" style="background-image:url(/assets/img/event/dummy_visual.jpg);"></div>
										</div>
										<div class="list_items_txt_wrap">
											<p class="list_items_txt_kind"><span>SEMINAR</span></p>
											<p class="list_items_txt_title">総合職向けセミナー</p>
											<p class="list_items_txt_desc">弊社のビジネス、事業紹介、仕事内容についてご紹介します。</p>
										</div>
									</a>
								</li>
								<li class="localnav_list_items fade-child">
									<a href="#">
										<div class="list_items_img_wrap">
											<div class="list_items_img_block" style="background-image:url(/assets/img/event/dummy_visual.jpg);"></div>
										</div>
										<div class="list_items_txt_wrap">
											<p class="list_items_txt_kind"><span>SEMINAR</span></p>
											<p class="list_items_txt_title">総合職向けセミナー</p>
											<p class="list_items_txt_desc">弊社のビジネス、事業紹介、仕事内容についてご紹介します。</p>
										</div>
									</a>
								</li>
								<li class="localnav_list_items fade-child">
									<a href="#">
										<div class="list_items_img_wrap">
											<div class="list_items_img_block" style="background-image:url(/assets/img/event/dummy_visual.jpg);"></div>
										</div>
										<div class="list_items_txt_wrap">
											<p class="list_items_txt_kind"><span>SEMINAR</span></p>
											<p class="list_items_txt_title">総合職向けセミナー</p>
											<p class="list_items_txt_desc">弊社のビジネス、事業紹介、仕事内容についてご紹介します。</p>
										</div>
									</a>
								</li>
							</ul>
						</div>
					</div>

				</div>
				<div class="staffinterview-btn-box">
					<div class="fade-up-1 is-appear"><a href="/event/" class="ta-Main-message_contentbox_text3">イベント情報一覧</a></div>
				</div>
				<div class="bg-pentagon pentagon-1"></div>
				<div class="bg-pentagon pentagon-2"></div>
				<div class="bg-pentagon pentagon-3"></div>
			</div>
		</section> -->

		<!-- <section class="sec-culture">
			<div class="sec-inner">
				<div class="message-box-right">
					<div data-plx="100">
						<div class="left-inner fade-up-2 is-appear">
							<div class="fade-child">
								<div class="sec-ttl">
									<div class="ta-Hero-head_title fade-child">
										<img src="/assets/img/event/hero-head_logo.svg">
										<h1 class="js-gradient-text-ie11">イベント情報</h1>
									</div>
								</div>
							</div>
							<div class="fade-child">
								<h2 class="sec-description">
									<span>GA technologiesの採用や選考に関するイベント情報を掲載しています。</span>
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div class="message-box-left">
					<div class="mask-slide-1 is-appear"><img src="/assets/img/main-event_pic.jpg" alt="" width="100%"></div>
				</div>
				<div class="event-btn-box">
					<div class="btn-inner">
						<div class="fade-up-1 is-appear"><a href="/event/" class="ta-Main-message_contentbox_text3 grade_hover">イベント情報一覧</a></div>
					</div>
				</div>
				<div class="bg-pentagon pentagon-1"></div>
				<div class="bg-pentagon pentagon-2"></div>
				<div class="bg-pentagon pentagon-3"></div>
			</div>
		</section> -->

		<section class="sec-recruit">
			<div class="sec-inner" data-plx="80">
				<div class="recruit-ttl-box fade-up-2 is-appear">
					<div class="fade-child">
						<div class="sec-ttl">
							<div class="tr-Hero-head_title fade-child">
								<!-- <img src="assets/img/recruit/hero-head_logo.svg"> -->
								<h1 class="js-gradient-text-ie11">採用情報</h1>
							</div>
						</div>
					</div>
					<div class="fade-child">
						<h2 class="sec-description">
							<span>募集概要や選考フローをご案内します。</span>
						</h2>
					</div>
				</div>
				<!-- <div class="recruit-link-box">
					<ul class="recruit-linklist mask-slide-2 is-appear">
						<li class="fade-parent">
							<div class="fade-child child-block">
								<a href="http://2020recruit.ga-tech.co.jp/" target="_blank">
									<div class="img-box new-graduate"></div>
									<div class="detail-box">
										<p class="detail-type">NEW GRADUATE</p>
										<p class="detail-name">2020卒新卒採用</p>
									</div>
								</a>
							</div>
						</li>
						<li class="fade-parent">
							<div class="fade-child child-block">
								<a href="recruit/midcareer/index.html">
									<div class="img-box mid-career"></div>
									<div class="detail-box">
										<p class="detail-type">MID-CAREER</p>
										<p class="detail-name">中途採用</p>
									</div>
								</a>
							</div>
						</li>
					</ul>
				</div> -->
			</div>
			<!-- <div class="staffinterview-btn-box">
				<div class="fade-up-1 is-appear"><a href="recruit/index.html" class="ta-Main-message_contentbox_text3">採用情報一覧</a></div>
			</div> -->
			<div class="bg-pentagon pentagon-1"></div><!-- data-plx="-30" -->
			<div class="bg-pentagon pentagon-2"></div><!-- data-plx="30" -->
			<div class="bg-pentagon pentagon-3"></div><!-- data-plx="60"-->

			@include('commons.banner')

		</section>
	</article>
</main>
@endsection
