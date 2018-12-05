@extends('layouts.app')

@section('content')
<ul class="list-inline">
    <li><a href="{{ route('admin_events.index') }}"><i class="glyphicon glyphicon-hand-right"></i>イベント一覧はこちら</a></li>
</ul>
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <!-- box -->
            <div class="box box-default">
                <!-- header -->
                <div class="box-header with-border">
                  <h3 class="box-title"><i class="glyphicon glyphicon-camera"></i> イベント登録</h3>

                </div>
                <!-- /header -->
                <!-- body -->
                <div class="box-body" style="padding: 30px;">

            {!! Form::open(['route' => 'admin_events.store', 'files' => true]) !!}
            <div class="row">
                <div class="form-group col-md-3">
                    {!! Form::label('event_type', '概要', [ 'class' => 'required', ]) !!}
                    {!! Form::text('event_type', old('event_type'), ['class' => 'form-control', 'placeholder' => '記入例：新卒向け見学会']) !!}
                </div>
                <div class="form-group col-md-9">
                    {!! Form::label('title', 'イベントタイトル', [ 'class' => 'required', ]) !!}
                    {!! Form::text('title', old('title'),  ['class' => 'form-control', 'placeholder' => '記入例：来年保育士を目指している向け　実際の保育士業務を見てみよう！']) !!}
                </div>
            </div>
                <div class="form-group">
                    {!! Form::label('content', 'イベント内容') !!}
                    {!! Form::textarea('content', old('content'),  ['class' => 'form-control']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('date', '開催日時') !!}
                    {!! Form::text('date', old('date'),  ['class' => 'calender_input', 'id' => 'datepicker']) !!}
                </div>
            <div class="row">
                <div class="form-group col-md-6">
                    {!! Form::label('location', '開催場所') !!}
                    {!! Form::text('location', old('location'),  ['class' => 'form-control', 'placeholder' => '記入例：大阪市淀川区西宮原']) !!}
                </div>
                <div class="form-group col-md-4">
                    {!! Form::label('capacity', '定員') !!}
                    {!! Form::text('capacity', old('capacity'),  ['class' => 'form-control', 'placeholder' => '記入例：20名']) !!}
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-5">
                    {!! Form::label('main_image', 'メイン画像アップロード', ['class' => 'control-label']) !!}
                    <input id="lefile" type="file" style="display:none" name="main_image">
                    <div class="input-group">
                      <input type="text" id="photoCover" class="form-control phototext" placeholder="画像ファイルを選択してください">
                      <span class="input-group-btn"><button type="button" class="btn btn-info" onclick="$('input[id=lefile]').click();">ファイル選択</button></span>
                    </div>
                    <p class="help-block">ファイルサイズは2MBまでとなります。</p>

                    <script>
                      $('input[id=lefile]').change(function() {
                        $('#photoCover').val($(this).val());
                      });
                    </script>
                </div>
            </div>
            <div class="form-group">
                <p>この募集要項を公開しますか？</p>
                {!! Form::label('status', '公開') !!}
                {!! Form::radio('status', 0, true) !!}
                {!! Form::label('status', '非公開') !!}
                {!! Form::radio('status', 1) !!}
            </div>
        </div>
        <!-- /body -->
        <!-- footer -->
        <div class="box-footer text-center">
            <div class="col-md-4 col-md-offset-4">
                {!! Form::submit('登録', ['class' => 'btn btn-primary btn-block']) !!}
                {!! Form::close() !!}
            </div>
        </div>
        <!-- /footer -->

        </div>
        <!-- /box -->

    </div>
@endsection
