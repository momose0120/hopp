@extends('layouts.app')

@section('content')
<!-- 入力文字数のカウント -->
<script>
    var $limit_500 = 500;
    var $limit_300 = 300;
    var $limit_50 = 50;
    var $limit_30 = 30;
    var $count;

    $(function() {
        document.getElementById("inputlength_title").innerHTML = "入力可能" + $limit_50 + "文字";
    });
    function ShowLength_title( str ) {
        $count = $limit_50 - str.length
        document.getElementById("inputlength_title").innerHTML = "残り" + $count + "文字";
    }
    $(function() {
        document.getElementById("inputlength_profile").innerHTML = "入力可能" + $limit_300 + "文字";
    });
    function ShowLength_profile( str ) {
        $count = $limit_300 - str.length
        document.getElementById("inputlength_profile").innerHTML = "残り" + $count + "文字";
    }
    $(function() {
        document.getElementById("inputlength_title_01").innerHTML = "入力可能" + $limit_50 + "文字";
    });
    function ShowLength_title_01( str ) {
        $count = $limit_50 - str.length
        document.getElementById("inputlength_title_01").innerHTML = "残り" + $count + "文字";
    }
    $(function() {
        document.getElementById("inputlength_content_01").innerHTML = "入力可能" + $limit_300 + "文字";
    });
    function ShowLength_content_01( str ) {
        $count = $limit_300 - str.length
        document.getElementById("inputlength_content_01").innerHTML = "残り" + $count + "文字";
    }
    $(function() {
        document.getElementById("inputlength_title_02").innerHTML = "入力可能" + $limit_50 + "文字";
    });
    function ShowLength_title_02( str ) {
        $count = $limit_50 - str.length
        document.getElementById("inputlength_title_02").innerHTML = "残り" + $count + "文字";
    }
    $(function() {
        document.getElementById("inputlength_content_02").innerHTML = "入力可能" + $limit_300 + "文字";
    });
    function ShowLength_content_02( str ) {
        $count = $limit_300 - str.length
        document.getElementById("inputlength_content_02").innerHTML = "残り" + $count + "文字";
    }
    $(function() {
        document.getElementById("inputlength_title_03").innerHTML = "入力可能" + $limit_50 + "文字";
    });
    function ShowLength_title_03( str ) {
        $count = $limit_50 - str.length
        document.getElementById("inputlength_title_03").innerHTML = "残り" + $count + "文字";
    }
    $(function() {
        document.getElementById("inputlength_content_03").innerHTML = "入力可能" + $limit_300 + "文字";
    });
    function ShowLength_content_03( str ) {
        $count = $limit_300 - str.length
        document.getElementById("inputlength_content_03").innerHTML = "残り" + $count + "文字";
    }

</script>

<ul class="list-inline">
    <li><a href="{{ route('admin_employees.index') }}"><i class="glyphicon glyphicon-hand-right"></i>働く仲間一覧はこちら</a></li>
</ul>
    <div class="row">
        <div class="col-md-10 col-md-offset-1">

            <!-- box -->
            <div class="box box-default">
                <!-- header -->
                <div class="box-header with-border">
                  <h3 class="box-title"><i class="glyphicon glyphicon-link"></i> 働く仲間の登録</h3>

                </div>
                <!-- /header -->
                <!-- body -->
                <div class="box-body" style="padding: 30px;">

            {!! Form::open(['route' => ['admin_employees.update', $employee->id], 'files' => true, 'method' => 'put']) !!}
            <div class="row">
                <div class="form-group col-md-4">
                    {!! Form::label('name', '氏名', [ 'class' => 'required', ]) !!}
                    {!! Form::text('name', $employee->name, ['class' => 'form-control']) !!}
                </div>
                <div class="form-group col-md-4">
                    {!! Form::label('name_en', '氏名(ローマ字)', [ 'class' => 'required', ]) !!}
                    {!! Form::text('name_en', $employee->name_en, ['class' => 'form-control']) !!}
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-3">
                    {!! Form::label('job_type', '職種', [ 'class' => 'required', ]) !!}
                    {!! Form::text('job_type', $employee->type, ['class' => 'form-control']) !!}
                </div>

                <div class="form-group col-md-3">
                    {!! Form::label('position', '役職', [ 'class' => 'required', ]) !!}
                    {!! Form::text('position', $employee->position,  ['class' => 'form-control']) !!}
                </div>
            </div>
                <div class="form-group">
                    {!! Form::label('title', 'タイトル', [ 'class' => 'required', ]) !!}
                    <span id="inputlength_title" class="inputlength_css">0文字</span>
                    {!! Form::text('title', $employee->title,  ['class' => 'form-control', 'onkeyup' => 'ShowLength_title(value);']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('profile', 'プロフィール') !!}
                    <span id="inputlength_profile" class="inputlength_css">0文字</span>
                    {!! Form::textarea('profile', $employee->profile,  ['class' => 'form-control', 'onkeyup' => 'ShowLength_profile(value);']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('title_01', 'インタビュータイトル１') !!}
                    <span id="inputlength_title_01" class="inputlength_css">0文字</span>
                    {!! Form::text('title_01', $employee->title_01,  ['class' => 'form-control', 'onkeyup' => 'ShowLength_title_01(value);']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('content_01', 'インタビュー内容１') !!}
                    <span id="inputlength_content_01" class="inputlength_css">0文字</span>
                    {!! Form::textarea('content_01', $employee->content_01,  ['class' => 'form-control', 'onkeyup' => 'ShowLength_content_01(value);']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('title_02', 'インタビュータイトル２') !!}
                    <span id="inputlength_title_02" class="inputlength_css">0文字</span>
                    {!! Form::text('title_02', $employee->title_02,  ['class' => 'form-control', 'onkeyup' => 'ShowLength_title_02(value);']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('content_02', 'インタビュー内容２') !!}
                    <span id="inputlength_content_02" class="inputlength_css">0文字</span>
                    {!! Form::textarea('content_02', $employee->content_02,  ['class' => 'form-control', 'onkeyup' => 'ShowLength_content_02(value);']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('title_03', 'インタビュータイトル３') !!}
                    <span id="inputlength_title_03" class="inputlength_css">0文字</span>
                    {!! Form::text('title_03', $employee->title_03,  ['class' => 'form-control', 'onkeyup' => 'ShowLength_title_03(value);']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('content_03', 'インタビュー内容３') !!}
                    <span id="inputlength_content_03" class="inputlength_css">0文字</span>
                    {!! Form::textarea('content_03', $employee->content_03,  ['class' => 'form-control', 'onkeyup' => 'ShowLength_content_03(value);']) !!}
                </div>

                <!--画像アップロード装飾-->
            <div class="row">
                <div class="col-md-1">
                    <img src="{{ asset("image/employees/$employee->main_image") }}"　 width="60" height="60" class="img-rounded image_fit_cover" alt="{{ $employee->main_image_title }}">
                </div>
                <div class="form-group col-md-5">
                    {!! Form::label('main_image', 'メイン画像アップロード', ['class' => 'control-label']) !!}
                    <input id="lefile_main_image" type="file" style="display:none" name="main_image">
                    <div class="input-group">
                      <input type="text" id="photoCover_main" class="form-control phototext" placeholder="画像ファイルを選択してください">
                      <span class="input-group-btn"><button type="button" class="btn btn-info" onclick="$('input[id=lefile_main_image]').click();">ファイル選択</button></span>
                    </div>
                    <script>
                      $('input[id=lefile_main_image]').change(function() {
                        $('#photoCover_main').val($(this).val());
                      });
                    </script>
                </div>
                <!-- <div class="col-md-7">
                    <p>　</p>
                    <a href="#" style="font-size: 8px;"><i class="glyphicon glyphicon-hand-right"></i>メイン画像は公開ページのこちらに表示されます。</a>
                </div> -->
            </div>
            <div class="row">
                <div class="col-md-1">
                    <img src="{{ asset("image/employees/$employee->image_01") }}"　 width="60" height="60" class="img-rounded image_fit_cover" alt="{{ $employee->image_01_title }}">
                </div>
                <div class="form-group col-md-5">
                    {!! Form::label('main_image', 'プロフィール画像アップロード', ['class' => 'control-label']) !!}
                    <input id="lefile_image_01" type="file" style="display:none" name="image_01">
                    <div class="input-group">
                      <input type="text" id="photoCover_01" class="form-control phototext" placeholder="画像ファイルを選択してください">
                      <span class="input-group-btn"><button type="button" class="btn btn-info" onclick="$('input[id=lefile_image_01]').click();">ファイル選択</button></span>
                    </div>
                    <script>
                      $('input[id=lefile_image_01]').change(function() {
                        $('#photoCover_01').val($(this).val());
                      });
                    </script>
                </div>
                <!-- <div class="col-md-7">
                    <p>　</p>
                    <a href="#" style="font-size: 8px;"><i class="glyphicon glyphicon-hand-right"></i>こちらの画像は公開ページのこちらに表示されます。</a>
                </div> -->
            </div>
            <div class="row">
                <div class="col-md-1">
                    <img src="{{ asset("image/employees/$employee->image_02") }}"　 width="60" height="60" class="img-rounded image_fit_cover" alt="{{ $employee->image_02_title }}">
                </div>
                <div class="form-group col-md-5">
                    {!! Form::label('main_image', '画像１アップロード', ['class' => 'control-label']) !!}
                    <input id="lefile_image_02" type="file" style="display:none" name="image_02">
                    <div class="input-group">
                      <input type="text" id="photoCover_02" class="form-control phototext" placeholder="画像ファイルを選択してください">
                      <span class="input-group-btn"><button type="button" class="btn btn-info" onclick="$('input[id=lefile_image_02]').click();">ファイル選択</button></span>
                    </div>
                    <script>
                      $('input[id=lefile_image_02]').change(function() {
                        $('#photoCover_02').val($(this).val());
                      });
                    </script>
                </div>
                <!-- <div class="col-md-7">
                    <p>　</p>
                    <a href="#" style="font-size: 8px;"><i class="glyphicon glyphicon-hand-right"></i>こちらの画像は公開ページのこちらに表示されます。</a>
                </div> -->
            </div>
            <div class="row">
                <div class="col-md-1">
                    <img src="{{ asset("image/employees/$employee->image_03") }}"　 width="60" height="60" class="img-rounded image_fit_cover" alt="{{ $employee->image_03_title }}">
                </div>
                <div class="form-group col-md-5">
                    {!! Form::label('main_image', '画像２アップロード', ['class' => 'control-label']) !!}
                    <input id="lefile_image_03" type="file" style="display:none" name="image_03">
                    <div class="input-group">
                      <input type="text" id="photoCover_03" class="form-control phototext" placeholder="画像ファイルを選択してください">
                      <span class="input-group-btn"><button type="button" class="btn btn-info" onclick="$('input[id=lefile_image_03]').click();">ファイル選択</button></span>
                    </div>
                    <script>
                      $('input[id=lefile_image_03]').change(function() {
                        $('#photoCover_03').val($(this).val());
                      });
                    </script>
                </div>
                <!-- <div class="col-md-7">
                    <p>　</p>
                    <a href="#" style="font-size: 8px;"><i class="glyphicon glyphicon-hand-right"></i>こちらの画像は公開ページのこちらに表示されます。</a>
                </div> -->
            </div>
            <div class="row">
                <div class="col-md-1">
                    <img src="{{ asset("image/employees/$employee->image_04") }}"　 width="60" height="60" class="img-rounded image_fit_cover" alt="{{ $employee->image_04_title }}">
                </div>
                <div class="form-group col-md-5">
                    {!! Form::label('main_image', '画像３アップロード', ['class' => 'control-label']) !!}
                    <input id="lefile_image_04" type="file" style="display:none" name="image_04">
                    <div class="input-group">
                      <input type="text" id="photoCover_04" class="form-control phototext" placeholder="画像ファイルを選択してください">
                      <span class="input-group-btn"><button type="button" class="btn btn-info" onclick="$('input[id=lefile_image_04]').click();">ファイル選択</button></span>
                    </div>
                    <script>
                      $('input[id=lefile_image_04]').change(function() {
                        $('#photoCover_04').val($(this).val());
                      });
                    </script>
                </div>
                <!-- <div class="col-md-7">
                    <p>　</p>
                    <a href="#" style="font-size: 8px;"><i class="glyphicon glyphicon-hand-right"></i>こちらの画像は公開ページのこちらに表示されます。</a>
                </div> -->
            </div>
            <div class="row">
                <div class="col-md-1">
                    <img src="{{ asset("image/employees/$employee->image_05") }}"　 width="60" height="60" class="img-rounded image_fit_cover" alt="{{ $employee->image_05_title }}">
                </div>
                <div class="form-group col-md-5">
                    {!! Form::label('main_image', '画像４アップロード', ['class' => 'control-label']) !!}
                    <input id="lefile_image_05" type="file" style="display:none" name="image_05">
                    <div class="input-group">
                      <input type="text" id="photoCover_05" class="form-control phototext" placeholder="画像ファイルを選択してください">
                      <span class="input-group-btn"><button type="button" class="btn btn-info" onclick="$('input[id=lefile_image_05]').click();">ファイル選択</button></span>
                    </div>
                    <script>
                      $('input[id=lefile_image_05]').change(function() {
                        $('#photoCover_05').val($(this).val());
                      });
                    </script>
                    <p class="help-block">ファイルサイズは1MBまでとなります。</p>
                </div>
                <!-- <div class="col-md-7">
                    <p>　</p>
                    <a href="#" style="font-size: 8px;"><i class="glyphicon glyphicon-hand-right"></i>こちらの画像は公開ページのこちらに表示されます。</a>
                </div> -->
            </div>

            <div class="form-group">
                <p>働く仲間を公開しますか？</p>
                <?php if ($employee->status === 0) { $open = 'true' ; $close = ''; }else { $open = '' ; $close = 'true' ; } ?>

                {!! Form::label('status', '公開') !!}
                {!! Form::radio('status', 0, $open) !!}
                {!! Form::label('status', '非公開') !!}
                {!! Form::radio('status', 1, $close) !!}
            </div>

        </div>
        <!-- /body -->
        <!-- footer -->
        <div class="box-footer text-center">
            <div class="col-md-4 col-md-offset-4">
                {!! Form::submit('更新', ['class' => 'btn btn-primary btn-block']) !!}
                {!! Form::close() !!}
            </div>
        </div>
        <!-- /footer -->

        </div>
        <!-- /box -->
    </div>
</div>
@endsection
