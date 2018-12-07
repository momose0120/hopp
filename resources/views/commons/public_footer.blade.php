<footer class="footer" id="js-footer">

    <!--footer-head-->
    <ul class="footer-head is-appear fade-up-2" id="js-footer-head_list">
    </ul>
    <ul class="footer-head is-appear fade-up-2" id="js-footer-head_list">
        <li class="footer-head_item fade-child" id="js-footer-head_message">
            <a class="footer-head_mask" href="{{ route('interview.index') }}">
                <div class="footer-head_inner">
                    <h4>INTERVIEW</h4>
                    <p>働く仲間を知る</p>
                </div>
            </a>
            <img src="/assets/img/footer/interview_footer.jpg">
        </li>
        <li class="footer-head_item fade-child" id="js-footer-head_aboutus">
            <a class="footer-head_mask" href="{{ route('message.index') }}">
                <div class="footer-head_inner">
                    <h4>MESSAGE</h4>
                    <p>トップメッセージ</p>
                </div>
            </a>
            <img src="/assets/img/footer/message_footer.jpg">
        </li>
        <li class="footer-head_item fade-child" id="js-footer-head_interview">
            <a class="footer-head_mask" href="{{ route('aboutus.index') }}">
                <div class="footer-head_inner">
                    <h4>ABOUT US</h4>
                    <p>働く環境を知る</p>
                </div>
            </a>
            <img src="/assets/img/footer/aboutus_footer.jpg">
        </li>
    </ul>
    <ul class="footer-head is-appear fade-up-2" id="js-footer-head_list">
        <li class="footer-head_item fade-child" id="js-footer-head_aboutus">
            <a class="footer-head_mask" href="{{ route('eventinfo.index') }}">
                <div class="footer-head_inner">
                    <h4>EVENT INFO</h4>
                    <p>イベント情報</p>
                </div>
            </a>
            <img src="/assets/img/footer/event_footer.jpg">
        </li>
        <li class="footer-head_item fade-child" id="js-footer-head_interview">
            <a class="footer-head_mask" href="{{ route('faqinfo.index') }}">
                <div class="footer-head_inner">
                    <h4>FAQ</h4>
                    <p>よくある質問</p>
                </div>
            </a>
            <img src="/assets/img/footer/faq_footer.jpg">
        </li>
        <li class="footer-head_item fade-child" id="js-footer-head_message">
            <a class="footer-head_mask" href="{{ route('recruitinfo.index') }}">
                <div class="footer-head_inner">
                    <h4>RECRUIT INFO</h4>
                    <p>採用情報</p>
                </div>
            </a>
            <img src="/assets/img/footer/recruit_footer.jpg">
        </li>
    </ul>


    <!--footer-main-->
    <div class="footer-main is-appear fade-up-1">
        <div class="footer-main_inner">

            <!--Logo-->
            <div class="footer-main_logo" id="js-footer-main_logo">
                <img src="/assets/img/common/talent-logo.png" width="100">
            </div>

            <!--linkbox-->
            <div class="footer-main_linkbox">

                <ul class="footer-main_link1">
                    <li><a href="{{ route('top.get') }}">HOME</a></li>
                    <li><a href="{{ route('interview.index') }}">INTERVIEW</a></li>
                    <li><a href="{{ route('message.index') }}">MESSAGE</a></li>
                    <li><a href="{{ route('aboutus.index') }}">ABOUT US</a></li>
                    <li><a href="{{ route('eventinfo.index') }}">EVENT INFO</a></li>
                    <li><a href="{{ route('faqinfo.index') }}">FAQ</a></li>
                    <li><a href="{{ route('recruitinfo.index')}}">RECRUIT INFO</a></li>
                </ul>

                <ul class="footer-main_link2">
                    <li><a href="https://www.ga-tech.co.jp/privacy_protection/" target="_blank">個人情報のお取り扱い</a></li>
                    <li><a href="#" target="_blank">お問い合わせ</a></li>
                </ul>

            </div>

            <div class="footer-main_other">

                <!-- <ul class="footer-main_follow">
                    <span>FOLLOW: </span>
                    <li><a href="https://www.facebook.com/GAtechnologies.Inc/" target="_blank"><img src="/assets/img/common/footer-main_fb.svg"></a></li> -->
                    <!--<li><a href="https://twitter.com/GA_technologies/" target="_blank"><img src="/assets/img/common/footer-main_tw.svg"></a></li>-->
                    <!--<li><a href="https://www.instagram.com/renosy77/" target="_blank"><img src="/assets/img/common/footer-main_insta.svg"></a></li>-->
                <!-- </ul> -->
                <small class="footer-main_copyright">
                    Copyright © Hopp! All rights reserved.
                </small>
            </div>

            <a href="#pagetop" class="footer-main_topbtn js-anchor">
                <img class="" src="/assets/img/common/footer-main_topbtn.svg">
            </a>

        </div>
    </div>
</footer>
