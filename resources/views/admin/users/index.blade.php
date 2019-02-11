@extends('layouts.app')

@section('content')

<ul class="list-inline">
    <li><a href="{{ route('register') }}"><i class="glyphicon glyphicon-hand-right"></i>新規登録はこちら</a></li>
</ul>

    <!-- box -->
    <div class="box box-default">
        <!-- header -->
        <div class="box-header with-border">
          <h3 class="box-title"><i class="glyphicon glyphicon-user"></i> 管理者一覧</h3>

        </div>
        <!-- /header -->
    <!-- body -->
    <div class="box-body" style="padding: 30px;">
        @if (count($users) > 0)
        <?php $i = 1; ?>
        <table class="table table-striped">
            <thead class="sp_display_none">
                <tr>
                    <th>#</th>
                    <th>プロフィール写真</th>
                    <th>氏名</th>
                    <th>ログインID</th>
                    <th>部署</th>
                    <th>更新日</th>
                </tr>
            </thead>
        <tbody>
            @foreach ($users as $user)
                <tr>
                    <th class="sp_display_none">{{ $i }}</th>
                    <td><img src="{{ asset("image/admins/$user->image") }}" alt="サムネイル" width="80" height="80" class="img-circle image_fit_cover"></td>
                    <td>{{ $user->name }}</td>
                    <td class="sp_display_none">{{ $user->login_id }}</td>
                    <td class="sp_display_none">{{ $user->department }}</td>
                    <?php
                        $date = $user->updated_at;
                        $date = date('Y/m/d', strtotime($date));
                     ?>
                    <td class="sp_display_none">{{ $date }}</td>
                    <td>
                    {!! Form::open(['route' => ['users.edit', $user->id], 'method' => 'get']) !!}
                        {!! Form::submit('編集', ['class' => 'btn btn-success btn-block btn-sm']) !!}
                    {!! Form::close() !!}
                    </td>
                    <td class="sp_display_none">
                    {!! Form::open(['route' => ['users.destroy', $user->id], 'method' => 'delete']) !!}
                        {!! Form::submit('削除', ['class' => 'btn btn-danger btn-block btn-sm']) !!}
                    {!! Form::close() !!}
                    </td>
                </tr>
            <?php $i++; ?>
            @endforeach
        </tbody>
    </table>
    @endif

    {!! $users->render() !!}
</div>
<!-- /body -->
</div>
<!-- /box -->


<!--　削除確認メッセージ　-->
<script>
    $(function(){
        $(".btn-danger").click(function(){
            if(confirm("本当に削除しますか？")){
                // 削除処理。
            }else{
                return false;
            }
        });
    });
</script>
@endsection
