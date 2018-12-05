@extends('layouts.app')

@section('content')
<ul class="list-inline">
    <li><a href="{{ route('admin_concepts.index') }}"><i class="glyphicon glyphicon-hand-right"></i>特長一覧はこちら</a></li>
</ul>
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <!-- box -->
            <div class="box box-default">
                <!-- header -->
                <div class="box-header with-border">
                  <h3 class="box-title"><i class="glyphicon glyphicon-plus-sign"></i> 保育所特長の更新</h3>

                </div>
                <!-- /header -->
                <!-- body -->
        <div class="box-body" style="padding: 30px;">

            {!! Form::open(['route' => ['admin_concepts.update', $concept->id], 'files' => true, 'method' => 'put']) !!}
                <div class="form-group">
                    {!! Form::label('title', 'タイトル', [ 'class' => 'required', ]) !!}
                    {!! Form::text('title', $concept->title,  ['class' => 'form-control']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('content_concept', '特長') !!}
                    {!! Form::textarea('content_concept', $concept->content,  ['class' => 'form-control']) !!}
                </div>

                <!--画像アップロード装飾-->
            <div class="row">
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
