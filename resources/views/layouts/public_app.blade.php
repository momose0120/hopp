<!DOCTYPE html>
<html lang="ja" data-page="top">
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-131482652-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-131482652-1');
    </script>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Hopp!</title>

    <meta charset="UTF-8">
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Hopp!保育士採用ホームページ</title>
    <meta name="description" content="保育士を採用するための採用ホームページ「Hopp!」。保育所における採用ホームページを簡単に構築することができます。">
    <meta property="og:title" content="Hopp!保育士採用サイト">
    <meta property="og:url" content="http://hopp-recruit.jp/">
    <meta property="og:image" content="https://recruit.ga-tech.co.jp//assets/img/common/meta_ogp_new.jpg">
    <meta property="og:type" content="website">
    <meta property="og:description" content="保育士を採用するための採用ホームページ「Hopp!」。保育所における採用ホームページを簡単に構築することができます。">
    <meta property="og:locale" content="ja_JP">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />  <!--アイコンフォント追加 -->
    <link rel="stylesheet" href="/lifull/css/lifull_style.css"> <!--lifullCSS-->
    <link rel="stylesheet" href="/loft/css/style.css"> <!--loftCSS-->
    <link rel="stylesheet" href="/litalico/assets/css/common/initialize.css"> <!--LitalicoCSS-->
    <link rel="stylesheet" href="/litalico/assets/css/common/general_recruit_students.css"> <!--LitalicoCSS-->
    <link rel="stylesheet" href="/litalico/assets/css/recruit_students/recruit/general/index.css"> <!--LitalicoCSS-->
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="shortcut icon" href="/assets/img/common/hopp-logo.gif" type="image/x-icon" />
    <link rel="apple-touch-icon" href="/assets/img/common/apple-touch-icon.png" />
    <link rel="apple-touch-icon" sizes="57x57" href="/assets/img/common/hopp-logo.gif" />
    <link rel="apple-touch-icon" sizes="72x72" href="/assets/img/common/hopp-logo.gif" />
    <link rel="apple-touch-icon" sizes="76x76" href="/assets/img/common/hopp-logo.gif" />
    <link rel="apple-touch-icon" sizes="114x114" href="/assets/img/common/hopp-logo.gif" />
    <link rel="apple-touch-icon" sizes="120x120" href="/assets/img/common/hopp-logo.gif" />
    <link rel="apple-touch-icon" sizes="144x144" href="/assets/img/common/hopp-logo.gif" />
    <link rel="apple-touch-icon" sizes="152x152" href="/assets/img/common/hopp-logo.gif" />
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/common/hopp-logo.gif" />
    <script src="https://use.typekit.net/zgc3cmc.js"></script>
    <script>try{Typekit.load({ async: true });}catch(e){}</script>
    <script async src="https://ajaxzip3.github.io/ajaxzip3.js" charset="UTF-8"></script>

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-N7TBD9K');</script>
    <!-- End Google Tag Manager -->
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N7TBD9K"
                      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <!-- トップ画面の切替追加 -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
    <script src="/assets/js/jquery.bgswitcher.js"></script>
    <script>
        jQuery(function($) {
            $('.bg-slider').bgSwitcher({
                images: ['/assets/img/main_top_1.jpg','/assets/img/main_top_2.jpg','/assets/img/main_top_3.jpg'], // 切り替える背景画像を指定
                interval: 4500,                         // 切り替えの間隔を指定します。
                effect: "fade",                         // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定します。
            });
        });
    </script>
    <!-- フェードイン追加 -->
    <script>
    $(function(){
        $(window).scroll(function (){
            $('.fadein').each(function(){
                var targetElement = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > targetElement - windowHeight + 200){
                    $(this).css('opacity','1');
                    $(this).css('transform','translateY(0)');
                }
            });
        });
        });
    </script>


</head>
<script src="/assets/js/lib.js"></script>
<script src="/assets/js/common.js"></script>


<body id="pagetop">

    @include('commons.public_navbar')
    <div>
        @yield('content')
    </div>
    @include('commons.public_footer')

    <div id="loading">
        <canvas id="loading-img" width="320" height="126"></canvas>
        <div class="easyInner">
            <div class="progress">
                <div class="progress-bar">
                   <div class="progress-shadow"></div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/locale/ja.js"></script>
    <script src="/assets/js/main.js"></script>
    <script src="/assets/js/top.js"></script>
    <script src="/assets/js/headline.js"></script>
    <script src="/assets/js/eventdayinsert.js"></script>
    <script src="/assets/js/formvalidate.js"></script>
    <!-- フォームバリデーション -->
    <script src="/js_validation/dist/jquery.validate.min.js"></script>

</body>
</html>
