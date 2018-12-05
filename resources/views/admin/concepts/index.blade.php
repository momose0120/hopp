@extends('layouts.app')

@section('content')
<ul class="list-inline">
    <li><a href="{{ route('admin_concepts.create') }}"><i class="glyphicon glyphicon-hand-right"></i>新規登録はこちら</a></li>
</ul>
<!-- box -->
<div class="box box-defaultr">
    <!-- header -->
    <div class="box-header with-border">
      <h3 class="box-title"><i class="glyphicon glyphicon-plus-sign"></i> 特長一覧</h3>

      <div class="box-tools pull-right">
      </div>
    </div>
    <!-- /header -->
    <!-- body -->
    <div class="box-body" style="padding: 30px;">

    @if (count($concepts) > 0)
    <?php $i = 1; ?>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>メイン画像</th>
                    <th>タイトル</th>
                    <th>更新日</th>
                </tr>
            </thead>
        <tbody>
            @foreach ($concepts as $concept)
                <tr>
                    <th>{{ $i }}</th>
                    <td><img src="{{ asset("image/concepts/$concept->main_image") }}"　 width="80" height="80" class="img-rounded image_fit_cover" alt="{{ $concept->main_image_title }}"></td>
                    <td>{{ $concept->title }}</td>
                    <?php
                        $date = $concept->updated_at;
                        $date = date('Y/m/d', strtotime($date));
                     ?>
                    <td>{{ $date }}</td>
                    <td>
                    {!! Form::open(['route' => ['admin_concepts.edit', $concept->id], 'method' => 'get']) !!}
                        {!! Form::submit('編集', ['class' => 'btn btn-success btn-block btn-sm']) !!}
                    {!! Form::close() !!}
                    </td>
                    <td>
                    {!! Form::open(['route' => ['admin_concepts.destroy', $concept->id], 'method' => 'delete']) !!}
                        {!! Form::submit('削除', ['class' => 'btn btn-danger btn-block btn-sm']) !!}
                    {!! Form::close() !!}
                    </td>
                </tr>
            <?php $i++; ?>
            @endforeach
        </tbody>
    </table>
    @endif
    {!! $concepts->render() !!}

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
{!! $concepts->render() !!}
@endsection
