@extends('layouts.app')

@section('content')
<ul class="list-inline">
    <li><a href="{{ route('users.index') }}"><i class="glyphicon glyphicon-hand-right"></i>管理者一覧はこちら</a></li>
</ul>
<div class="row">
    <div class="col-md-6 col-md-offset-3">

        <!-- box -->
        <div class="box box-default">
            <!-- header -->
            <div class="box-header with-border">
              <h3 class="box-title"><i class="glyphicon glyphicon-user"></i> 管理者登録</h3>

            </div>
            <!-- /header -->
            <!-- body -->
            <div class="box-body" style="padding: 30px;">

        {!! Form::open(['route' => 'register', 'files' => true,]) !!}

            <div class="form-group">
                {!! Form::label('name', '氏名', [ 'class' => 'required', ]) !!}
                {!! Form::text('name', old('name'), ['class' => 'form-control']) !!}
            </div>

            <div class="form-group">
                {!! Form::label('login_id', 'ログインID', [ 'class' => 'required', ]) !!}
                {!! Form::text('login_id', old('login_id'), ['class' => 'form-control']) !!}
            </div>

            <div class="form-group">
                {!! Form::label('password', 'パスワード', [ 'class' => 'required', ]) !!}
                {!! Form::password('password', ['class' => 'form-control']) !!}
                <p class="help-block">パスワードは6文字以上で設定ください。</p>
            </div>

            <div class="form-group">
                {!! Form::label('password_confirmation', 'パスワード確認', [ 'class' => 'required', ]) !!}
                {!! Form::password('password_confirmation', ['class' => 'form-control']) !!}
            </div>
            <div class="form-group">
                {!! Form::label('department', '部署') !!}
                {!! Form::text('department', old('department'), ['class' => 'form-control']) !!}
            </div>
            <div class="form-group">
                {!! Form::label('image', 'プロフィール画像アップロード', ['class' => 'control-label']) !!}
                <input id="lefile" type="file" style="display:none" name="image">
                <div class="input-group file">
                  <input type="text" id="photoCover" class="form-control" placeholder="画像ファイルを選択してください">
                  <span class="input-group-btn"><button type="button" class="btn btn-info" onclick="$('input[id=lefile]').click();"><span class="file">ファイル選択</span></button></span>
                </div>
                <p class="help-block">ファイルサイズは2MBまでとなります。</p>

                <script>
                  $('input[id=lefile]').change(function() {
                    $('#photoCover').val($(this).val());
                  });
                </script>
            </div>

    </div>
    <!-- /body -->
    <!-- footer -->
    <div class="box-footer text-center">
        <div class="col-md-4 col-md-offset-4">
        {!! Form::submit('新規登録', ['class' => 'btn   btn-primary btn-block']) !!}
        {!! Form::close() !!}
        </div>
    </div>
    <!-- /footer -->

    </div>
    <!-- /box -->
</div>
</div>
<!-- ここまで -->
@endsection
