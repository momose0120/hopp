<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>

    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="{{ asset("bower_components/bootstrap/dist/css/bootstrap.min.css") }}">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{ asset("bower_components/font-awesome/css/font-awesome.min.css") }}">
    <!-- Ionicons -->
    <link rel="stylesheet" href="{{ asset("bower_components/Ionicons/css/ionicons.min.css") }}">
    <!-- Theme style -->
    <link rel="stylesheet" href="{{ asset("dist/css/AdminLTE.min.css") }}">
    <!-- AdminLTE Skins. We have chosen the skin-blue for this starter
          page. However, you can choose any other skin. Make sure you
          apply the skin class to the body tag so the changes take effect. -->
    <link rel="stylesheet" href="{{ asset("dist/css/skins/skin-blue-light.min.css") }}">

    <!-- original -->
    <link rel="stylesheet" href="{{ asset('css/style.css') }}" >

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <!-- Scripts -->
    <!-- <script src="{{ asset('js/app.js') }}" defer></script> -->

    <!-- ChartJS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>

    <!-- Google Font -->
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">

    <!-- datepicker -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1/i18n/jquery.ui.datepicker-ja.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css">

    <script>
      $(function() {
        $("#datepicker").datepicker({
            buttonImage: "{{ asset('image/calender_icon.jpg') }}",        // カレンダーアイコン画像
            buttonImageOnly: true,           // 画像として表示
            showOn: "both"                   // カレンダー呼び出し元の定義
        });
      });
    </script>

    <!-- バルーンポップアップ -->
    <script type="text/javascript" src="/js/jquery.balloon.js"></script>

    <script>
        $(function() {
    	$('.help').balloon({
            showDuration: "slow",
            showAnimation: function(d, c) { this.fadeIn(d, c); },
            css: {
            padding: '20px',
            fontSize: '12px',
            fontWeight: 'normal',
            lineHeight: '1.3',
            backgroundColor: '#1253A4',
            color: '#fff',
            border: 'none',
            opacity: '1',
            boxShadow: 'none'
            }
        });
    });
    </script>

    <!-- <script>
    $(function(){
    $( "#datepicker" ).datepicker();
    //Pass the user selected date format
    $( "#format" ).change(function() {
    $( "#datepicker" ).datepicker( "option", "dateFormat", $(this).val());
    });
    });
    </script> -->


</head>
<body class="hold-transition skin-blue-light sidebar-mini">
    <div class="wrapper">
        @include('commons.header')
        @include('commons.sidebar')
        <div class="content-wrapper">
          <!-- Content Header (Page header) -->
            @include('commons.content-header')
            @include('commons.error_messages')
            @include('commons.flash-message')
            <section class="content container-fluid">
                @yield('content')
            </section>
        </div>
        <!-- </div> -->

        @include('commons.footer')
        @include('commons.control-sidebar')
    </div>

    <!-- REQUIRED JS SCRIPTS -->
    <!-- jQuery 3 -->
    <!-- <script src="{{ asset("bower_components/jquery/dist/jquery.min.js") }}"></script> -->
    <!-- Bootstrap 3.3.7 -->
    <!-- <script src="{{ asset("bower_components/bootstrap/dist/js/bootstrap.min.js") }}"></script> -->
    <!-- AdminLTE App -->
    <script src="{{ asset("dist/js/adminlte.min.js") }}"></script>

    <!-- contact_count -->
    <script>
    $(function(){

        $.get('/api/count', function(res) {
                console.log(res);
    	        $('.nofify_header_count').html(res.count)
            }
        )
    })
    </script>
</body>
</html>
