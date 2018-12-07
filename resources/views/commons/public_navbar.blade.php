<header class="header" id="js-header">
	<div class="header_inner">
		<a href="index.html" class="header_logo"><img src="/assets/img/common/talent-logo.png" id="js-header_logo"></a>
		<nav class="header_nav" id="js-header_nav">
			<div id="nav-outer">
				<div id="nav-inner">
					<ul>
						<li class="header_nav_interview">
							<a href="{{ route('interview.index') }}" id="js-menu-current-interview">
								<img class="header_navimg" src="/assets/img/common/header-sp-menu_interview.jpg">
								<p class="js-gradient-text-ie11">INTERVIEW</p>
								<p>働く仲間を知る</p>
							</a>
						</li>
						<li class="header_nav_message">
							<a href="{{ route('message.index') }}" id="js-menu-current-message">
								<img class="header_navimg" src="/assets/img/common/header-sp-menu_message.jpg">
								<p class="js-gradient-text-ie11">MESSAGE</p>
								<p>トップメッセージ</p>
							</a>
						</li>
						<li class="header_nav_aboutus">
							<a href="{{ route('aboutus.index') }}" id="js-menu-current-aboutus">
								<img class="header_navimg" src="/assets/img/common/header-sp-menu_aboutus.jpg">
								<p class="js-gradient-text-ie11">ABOUT US</p>
								<p>働く環境を知る</p>
							</a>
						</li>
						<li class="header_nav_event">
							<a href="{{ route('eventinfo.index') }}" id="js-menu-current-event">
								<img class="header_navimg" src="/assets/img/common/header-sp-menu_event.jpg">
								<p class="js-gradient-text-ie11">EVENT INFO</p>
								<p>イベント情報</p>
							</a>
						</li>
						<li class="header_nav_culture">
							<a href="{{ route('faqinfo.index') }}" id="js-menu-current-culture">
								<img class="header_navimg" src="/assets/img/common/header-sp-menu_culture.jpg">
								<p class="js-gradient-text-ie11">FAQ</p>
								<p>よくある質問</p>
							</a>
						</li>
						<li class="header_nav_recruit">
							<a href="{{ route('recruitinfo.index') }}" id="js-menu-current-recruit">
								<img class="header_navimg" src="/assets/img/common/header-sp-menu_recruit.jpg">
								<p class="js-gradient-text-ie11">RECRUIT INFO</p>
								<p>採用情報</p>
							</a>
						</li>
						<!-- <li class="header_nav_entry"><a href="entry/index.html">募集要項一覧</a></li> -->
					</ul>
				</div>
			</div>
		</nav>
		<img class="header_hamburger" src="/assets/img/common/header-sp_hamburger.png" id="js-header-sp_hamburger">
	</div>
</header>
