@extends('layouts.public_app')

@section('content')
<main role="main">

    <section class="tac-Hero">

        <div class="tac-Hero-head">
            <div class="tac-Hero-head_inner is-appear fade-up-2">

                <div class="tac-Hero-head_body">
                    <!-- <img src="/assets/img/aboutus/hero-head_logo.svg" class="fade-child"> -->
                    <p class="tac-Hero-head_nameeng fade-child">OUR NURSERY SCHOOL OVERVIEW</p>
                    <h1 class="tac-Hero-head_name fade-child">働く環境について</h1>
                    <p class="tac-Hero-head_text fade-child">
                        職場の環境や雰囲気・制度、保育所の概要などの説明をします。
                    </p>
                </div>

                <div class="tac-Hero-head_img fade-child">
                    <img src="/assets/img/aboutus/company/aboutus_head.jpg" width="720px" alt="働く環境">
                </div>

            </div>
        </div>
        <div class="tac-Hero-detail" id="js-hero-detail"></div>

    </section>

    <!-- <div class="tac-Index"> -->

        <!-- <div class="tac-Index_subbg" id="js-points_subbg"></div> -->


        <section class="tac-Index_main">
        <div class="tab-Index_inner">
            <section class="section-culture-workplace_event">
                <div class="welfare_workplace_headline tab-Index_heading is-appear fade-up-2">
                    <h1 class="tab-Index_heading-lv2 fade-child">保育所風景</h1>
                    <!-- <img src="/assets/img/culture/workplace/label_office.svg" alt="" class="fade-child"> -->
                </div>
                <div class="welfare_workplace_body">
                    <ul class="welfare_workplace_officepics is-appear fade-up-2">
                        <li class="fade-child"><img src="/assets/img/culture/workplace/office_01.gif" alt="保育所風景"></li>
                        <li class="fade-child"><img src="/assets/img/culture/workplace/office_02.jpg" alt="保育所風景"></li>
                        <li class="fade-child"><img src="/assets/img/culture/workplace/office_03.jpg" alt="保育所風景"></li>
                        <li class="fade-child"><img src="/assets/img/culture/workplace/office_04.jpg" alt="保育所風景"></li>
                        <li class="fade-child"><img src="/assets/img/culture/workplace/office_05.jpg" alt="保育所風景"></li>
                        <li class="fade-child"><img src="/assets/img/culture/workplace/office_06.jpg" alt="保育所風景"></li>
                        <li class="fade-child"><img src="/assets/img/culture/workplace/office_07.jpg" alt="保育所風景"></li>
                        <li class="fade-child"><img src="/assets/img/culture/workplace/office_08.jpg" alt="保育所風景"></li>
                        <li class="fade-child"><img src="/assets/img/culture/workplace/office_09.jpg" alt="保育所風景"></li>
                        <li class="fade-child"><img src="/assets/img/culture/workplace/office_10.jpg" alt="保育所風景"></li>
                        <li class="fade-child"><img src="/assets/img/culture/workplace/office_11.jpg" alt="保育所風景"></li>
                    </ul>
                </div>

            </section>
        </div>

            <?php $i = 0; ?>
            @if (count($concepts) > 0)
            @foreach ($concepts as $concept)
            @if ($i % 2 === 0)
            <section class="sec-aboutus">
                <div class="sec-inner">
                    <div class="message-box-left">
                        <div data-plx="50">
                            <div class="left-inner fade-up-2 is-appear">
                                <div class="fade-child">
                                    <div class="sec-ttl">
                                        <div class="ta-Hero-head_title fade-child">
                                            <!-- <img src="/assets/img/aboutus/hero-head_logo.svg"> -->
                                            <h1 class="js-gradient-text-ie11">{{ $concept->title }}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="fade-child">
                                    <h2 class="sec-description">
                                        <span>{{ $concept->content }}</span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="message-box-right">
                        <div class="mask-slide-1 is-appear"><img src="{{ asset("image/concepts/$concept->main_image") }}" alt="{{ $concept->main_image_title }}"></div>
                    </div>
                    <!-- <div class="aboutus-btn-box">
                        <div class="btn-inner">
                            <div class="fade-up-1 is-appear"><a href="/main/aboutus/index.html" class="ta-Main-message_contentbox_text3 grade_hover">トップメッセージ詳細</a></div>
                        </div>
                    </div> -->
                    <div class="bg-pentagon pentagon-1"></div><!-- data-plx="-50" -->
                    <div class="bg-pentagon pentagon-2"></div><!-- data-plx="20"-->
                    <div class="bg-pentagon pentagon-3"></div><!-- data-plx="30"-->
                </div>
            </section>

            @else
            <section class="sec-culture">
                <div class="sec-inner">
                    <div class="message-box-right">
                        <div data-plx="100">
                            <div class="left-inner fade-up-2 is-appear">
                                <div class="fade-child">
                                    <div class="sec-ttl">
                                        <div class="ta-Hero-head_title fade-child">
                                            <!-- <img src="/assets/img/culture/hero-head_logo.svg"> -->
                                            <h1 class="js-gradient-text-ie11">{{ $concept->title }}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="fade-child">
                                    <h2 class="sec-description">
                                        <span>{{ $concept->content }}</span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="message-box-left">
                        <div class="mask-slide-1 is-appear"><img src="{{ asset("image/concepts/$concept->main_image") }}" alt="{{ $concept->main_image_title }}" width="100%;"></div>
                    </div>
                    <!-- <div class="event-btn-box">
                        <div class="btn-inner">
                            <div class="fade-up-1 is-appear"><a href="/main/culture/index.html" class="ta-Main-message_contentbox_text3 grade_hover">保育所詳細</a></div>
                        </div> -->
                    </div>
                    <div class="bg-pentagon pentagon-1"></div>
                    <div class="bg-pentagon pentagon-2"></div>
                    <div class="bg-pentagon pentagon-3"></div>
                </div>
            </section>
            @endif
            <?php $i++; ?>
            @endforeach
            @endif

            <!-- 保育所リスト -->
            @if (count($tenants) > 0)
            @foreach ($tenants as $tenant)
            <section class="sec-culture">
                <div class="sec-inner">
                    <div class="message-box-right">
                        <div data-plx="100">
                            <div class="left-inner fade-up-2 is-appear">
                                <div class="fade-child">
                                    <div class="sec-ttl">
                                        <div class="ta-Hero-head_title fade-child">
                                            <!-- <img src="/assets/img/culture/hero-head_logo.svg"> -->
                                            <h1 class="js-gradient-text-ie11">{{ $tenant->name }}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="fade-child">
                                    <h2 class="sec-description">
                                        <span>{{ $tenant->access }}</span><br>
                                        <span>{{ $tenant->address }}</span>
                                    </h2>
                                    <iframe width="860" height="200" src="http://maps.google.co.jp/maps?&output=embed&q={{ $tenant->address }}&z=18"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="message-box-left">
                        <div class="mask-slide-1 is-appear"><img src="{{ asset("image/tenants/$tenant->main_image") }}" alt="{{ $tenant->main_image_title }}" width="100%;"></div>
                    </div>
                    <!-- <div class="event-btn-box">
                        <div class="btn-inner">
                            <div class="fade-up-1 is-appear"><a href="/main/culture/index.html" class="ta-Main-message_contentbox_text3 grade_hover">保育所詳細</a></div>
                        </div> -->
                    </div>
                    <div class="bg-pentagon pentagon-1"></div>
                    <div class="bg-pentagon pentagon-2"></div>
                    <div class="bg-pentagon pentagon-3"></div>
                </div>
            </section>
            @endforeach
            @endif

            <!-- 保育所リスト完了 -->

            <div class="tac-Index_inner">
                <section class="tac-Index_item">
                    <div class="tac-Index_heading is-appear fade-up-2">
                        <h2 class="tac-Index_heading-lv2 fade-child">法人概要</h2>
                        <!-- <img src="/assets/img/aboutus/company/label_outline.svg" alt="" class="fade-child"> -->
                    </div>

                    <dl class="tac-Index_overview is-appear fade-up-2">
                        <dt class="fade-child">法人名</dt>
                        <dd class="fade-child">社会福祉法人　保育園</dd>
                    </dl>
                    <dl class="tac-Index_overview is-appear fade-up-2">
                        <dt class="fade-child">設立</dt>
                        <dd class="fade-child">平成25年3月12日</dd>
                    </dl>
                    <dl class="tac-Index_overview is-appear fade-up-2">
                        <dt class="fade-child">資本金</dt>
                        <dd class="fade-child">
                            1億円
                        </dd>
                    </dl>
                    <dl class="tac-Index_overview is-appear fade-up-2">
                        <dt class="fade-child">従業員数</dt>
                        <dd class="fade-child">195名（2018年6月現在)</dd>
                    </dl>
                    <dl class="tac-Index_overview is-appear fade-up-2">
                        <dt class="fade-child">理事長</dt>
                        <dd class="fade-child">丹波　和樹</dd>
                    </dl>
                    <dl class="tac-Index_overview is-appear fade-up-2">
                        <dt class="fade-child">所在地</dt>
                        <dd class="fade-child">
                            <div class="tac-Index_overview-map_container">
                                <em class="tac-Index_overview-em">Headquarters（東京本社）</em>
                                〒150-0012<br>
                                東京都渋谷区広尾1-1-39 恵比寿プライムスクエア 8F<br>
                                Tel.03-5468-7056<br>
                                Fax.03-5468-7161
                                <!-- <div id="tac-Index_map01" class="tac-Index_map is-appear fade-up-1"></div> -->
                                <!-- <a href="https://www.google.co.jp/maps/place/%E3%80%92150-0012+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%8B%E8%B0%B7%E5%8C%BA%E5%BA%83%E5%B0%BE%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%91%E2%88%92%EF%BC%93%EF%BC%99+%E6%81%B5%E6%AF%94%E5%AF%BF%E3%83%97%E3%83%A9%E3%82%A4%E3%83%A0%E3%82%B9%E3%82%AF%E3%82%A8%E3%82%A2%E3%83%97%E3%83%A9%E3%82%A4%E3%83%A0%E3%82%B9%E3%82%AF%E3%82%A8%E3%82%A2%E3%82%BF%E3%83%AF%E3%83%BC/@35.6500373,139.7115288,17z/data=!3m1!4b1!4m5!3m4!1s0x60188b6a16e3c703:0xa9ac1125d2a1e023!8m2!3d35.650109!4d139.7125988" class="tac-Index_map-link" target="_blank">Google Mapsで見る</a> -->
                            </div>
                        </dd>
                    </dl>
                </section>
                <div>
                    <iframe class="aboutus_map" width="100%" height="400" src="http://maps.google.co.jp/maps?&output=embed&q=大阪市淀川区西宮原２−５−４６&z=18"></iframe>
                </div>
            </div>

        </section>



    <!-- </div> -->

    <script>

      function initMap() {
        // 緯度経度の設定
        var latlng01 = {lat: 35.650109, lng: 139.7125988};
        var latlng02 = {lat: 34.6973896, lng: 135.490506};
        var latlng03 = {lat: 35.174968, lng: 136.881089};

        // マーカー画像の設定
        var markerImg = {
          url: '/assets/img/aboutus/company/pin.svg',
          size: new google.maps.Size(80, 89),
          origin: new google.maps.Point(0, 0), //アイコンの基準位置
          anchor: new google.maps.Point(40, 89), //アイコンのアンカーポイント
          scaledSize: new google.maps.Size(80, 89)
        };

        var markerImgMini = {
          url: '/assets/img/aboutus/company/pin.svg',
          size: new google.maps.Size(40, 48),
          origin: new google.maps.Point(0, 0), //アイコンの基準位置
          anchor: new google.maps.Point(20, 48), //アイコンのアンカーポイント
          scaledSize: new google.maps.Size(40, 48)
        };

        var map01 = new google.maps.Map(document.getElementById('tac-Index_map01'), {
          zoom: 17,
          center: latlng01,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: true
        });
        var map02 = new google.maps.Map(document.getElementById('tac-Index_map02'), {
          zoom: 17,
          center: latlng02,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: true
        });
        var map03 = new google.maps.Map(document.getElementById('tac-Index_map03'), {
          zoom: 17,
          center: latlng03,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: true
        });

        // マーカーの表示設定
        var marker01 = new google.maps.Marker({
          position: latlng01,
          map: map01,
          optimized: false,
          icon: markerImg
        });
        var marker02 = new google.maps.Marker({
          position: latlng02,
          map: map02,
          optimized: false,
          icon: markerImg
        });
        var marker03 = new google.maps.Marker({
          position: latlng03,
          map: map03,
          optimized: false,
          icon: markerImg
        });


        // 読み込み後にブラウザ幅判定
        google.maps.event.addListenerOnce(map01, 'idle', function(){
            if(window.innerWidth < 750) {
                marker01.setIcon(markerImgMini);
                map01.setZoom(13);
                marker02.setIcon(markerImgMini);
                map02.setZoom(13);
                marker03.setIcon(markerImgMini);
                map03.setZoom(13);
            } else {
                marker01.setIcon(markerImg);
                map01.setZoom(17);
                marker02.setIcon(markerImg);
                map01.setZoom(17);
                marker03.setIcon(markerImg);
                map03.setZoom(17);
            }
        });


        // リサイズ時にピンを中央に移動
        google.maps.event.addDomListener(window, "resize", function() {
            var center = map01.getCenter();
            google.maps.event.trigger(map01, "resize");
            map01.setCenter(center);

            if(window.innerWidth < 750) {
                marker01.setIcon(markerImgMini);
                map01.setZoom(13);
            } else {
                marker01.setIcon(markerImg);
                map01.setZoom(17);
            }
        });
        google.maps.event.addDomListener(window, "resize", function() {
            var center = map02.getCenter();
            google.maps.event.trigger(map02, "resize");
            map02.setCenter(center);

            if(window.innerWidth < 750) {
                marker02.setIcon(markerImgMini);
                map02.setZoom(13);
            } else {
                marker02.setIcon(markerImg);
                map02.setZoom(17);
            }
        });
        google.maps.event.addDomListener(window, "resize", function() {
            var center = map03.getCenter();
            google.maps.event.trigger(map03, "resize");
            map03.setCenter(center);

            if(window.innerWidth < 750) {
                marker03.setIcon(markerImgMini);
                map03.setZoom(13);
            } else {
                marker03.setIcon(markerImg);
                map03.setZoom(17);
            }
        });
      }
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAdd5SDSNIRrhntAS0HsvgTCy-kExets6o&amp;callback=initMap">
    </script>

    <section class="tac-Banner">
        @include('commons.banner')
    </section>

</main>
@endsection
