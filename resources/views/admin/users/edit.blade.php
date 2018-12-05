@extends('layouts.app')

@section('content')
<ul class="list-inline">
    <li><a href="{{ route('register') }}"><i class="glyphicon glyphicon-hand-right"></i>新規登録はこちら</a></li>
    <li><a href="{{ route('users.index') }}"><i class="glyphicon glyphicon-hand-right"></i>管理者一覧はこちら</a></li>
</ul>

    <div class="row">
        <div class="col-md-6 col-md-offset-3">

            <!-- box -->
            <div class="box box-default">
                <!-- header -->
                <div class="box-header with-border">
                  <h3 class="box-title"><i class="glyphicon glyphicon-user"></i> 管理者更新</h3>

                </div>
                <!-- /header -->
                <!-- body -->
                <div class="box-body" style="padding: 30px;">

            {!! Form::open(['route' => ['users.update', $user->id], 'files' => true, 'method' => 'put']) !!}
                <div class="text-center">
                    <img src="{{ asset("image/admins/$user->image") }}" alt="サムネイル" width="170" height="170" class="img-circle image_fit_cover">
                </div>
                <div class="text-center" style="margin-bottom: 30px;">
                    <h3>{{ $user->name }}さん</h3>
                </div>
                    <div class="form-group">
                    {!! Form::label('login_id', 'ログインID') !!}
                    {!! Form::text('login_id', $user->login_id, ['class' => 'form-control', 'readonly' => 'readonly']) !!}
                </div>

                <div class="form-group">
                    {!! Form::label('password', 'パスワード変更') !!}
                    {!! Form::password('password', ['class' => 'form-control']) !!}
                    <p class="help-block">パスワードを変更する場合はこちらから上書き保存してください。</p>
                </div>

                <div class="form-group">
                    {!! Form::label('password_confirmation', 'パスワード確認') !!}
                    {!! Form::password('password_confirmation', ['class' => 'form-control']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('department', '部署') !!}
                    {!! Form::text('department', $user->department, ['class' => 'form-control']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('image', 'プロフィール画像変更', ['class' => 'control-label']) !!}
                    <input id="lefile" type="file" style="display:none" name="image">
                    <div class="input-group file">
                      <input type="text" id="photoCover" class="form-control" placeholder="画像ファイルを選択してください">
                      <span class="input-group-btn"><button type="button" class="btn btn-info" onclick="$('input[id=lefile]').click();"><span class="file">ファイル選択</span></button></span>
                    </div>
                    <p class="help-block">画像を変更する場合はこちらから上書き保存してください。</p>
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
                {!! Form::submit('更新', ['class' => 'btn   btn-primary btn-block']) !!}
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
