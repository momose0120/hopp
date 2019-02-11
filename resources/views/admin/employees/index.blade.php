@extends('layouts.app')

@section('content')
<ul class="list-inline">
    <li><a href="{{ route('admin_employees.create') }}"><i class="glyphicon glyphicon-hand-right"></i>新規登録はこちら</a></li>
</ul>
<!-- box -->
<div class="box box-defaultr">
    <!-- header -->
    <div class="box-header with-border">
      <h3 class="box-title"><i class="glyphicon glyphicon-link"></i> 働く仲間の一覧</h3>

      <div class="box-tools pull-right">
      </div>
    </div>
    <!-- /header -->
    <!-- body -->
    <div class="box-body" style="padding: 30px;">

    @if (count($employees) > 0)
    <?php $i = 1; ?>
        <table class="table table-striped">
            <thead class="sp_display_none">
                <tr>
                    <th>#</th>
                    <th>メイン画像</th>
                    <th>働く仲間</th>
                    <th>職種</th>
                    <th>公開・非公開</th>
                    <th>更新日</th>
                </tr>
            </thead>
        <tbody>
            @foreach ($employees as $employee)
                <tr>
                    <th class="sp_display_none">{{ $i }}</th>
                    <td><img src="{{ asset("image/employees/$employee->main_image") }}"　 width="80" height="80" class="img-rounded image_fit_cover" alt="{{ $employee->main_image_title }}"></td>
                    <td>{{ $employee->name }}</td>
                    <td class="sp_display_none">{{ $employee->type }}</td>
                    <?php if ($employee->status === 0){ $status = '公開'; } else { $status = '非公開'; }?>
                    <td class="sp_display_none">{{ $status }}</td>
                    <?php
                        $date = $employee->updated_at;
                        $date = date('Y/m/d', strtotime($date));
                     ?>
                    <td class="sp_display_none">{{ $date }}</td>
                    <td>
                    {!! Form::open(['route' => ['admin_employees.edit', $employee->id], 'method' => 'get']) !!}
                        {!! Form::submit('編集', ['class' => 'btn btn-success btn-block btn-sm']) !!}
                    {!! Form::close() !!}
                    </td>
                    <td class="sp_display_none">
                    {!! Form::open(['route' => ['admin_employees.destroy', $employee->id], 'method' => 'delete']) !!}
                        {!! Form::submit('削除', ['class' => 'btn btn-danger btn-block btn-sm']) !!}
                    {!! Form::close() !!}
                    </td>
                </tr>
            <?php $i++; ?>
            @endforeach
        </tbody>
    </table>
    @endif
    {!! $employees->render() !!}

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
{!! $employees->render() !!}
@endsection
