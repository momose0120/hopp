@extends('layouts.app')

@section('content')
<ul class="list-inline">
    <li><a href="{{ route('admin_recruits.create') }}"><i class="glyphicon glyphicon-hand-right"></i>新規登録はこちら</a></li>
</ul>
<p class="help-block"><i class="glyphicon glyphicon-arrow-down"></i> タブを切り替えると表示される一覧が変更されます。</p>
<div class="row">
    <div class="col-md-4">
        <ul class="nav nav-pills nav-justified">
            <li role="presentation" class="{{ Request::is('admin_recruits') ? 'active' : '' }}"><a class="tab-color" href="{{ route('admin_recruits.index') }}">全件<span class="badge">{{ $recruit_all_count }}</span></a></li>
            <li role="presentation" class="{{ Request::is('recruit_archives') ? 'active' : '' }}"><a href="{{ route('recruit.archives') }}">保存<span class="badge">{{ $recruit_archive_count }}</span></a></li>
        </ul>
    </div>
</div>

<!-- box -->
<div class="box box-defaultr">
    <!-- header -->
    <div class="box-header with-border">
      <h3 class="box-title"><i class="glyphicon glyphicon-list-alt"></i> 募集要項一覧</h3>

      <div class="box-tools pull-right">
      </div>
    </div>
    <!-- /header -->
    <!-- body -->
    <div class="box-body" style="padding: 30px;">

    @if (count($recruits) > 0)
    <?php $i = 1; ?>
        <table class="table table-striped">
            <thead class="sp_display_none">
                <tr>
                    <th>#</th>
                    <th>メイン画像</th>
                    <th>職種</th>
                    <th>タイトル</th>
                    <th>保育所</th>
                    <th>公開・非公開</th>
                    <th>更新日</th>
                    <th><a class="help" title="「保存」を押すと、全件表示に表示されなくなる。
                    <br />元に戻す場合は、「非保存」を押す。"><i class="glyphicon glyphicon glyphicon-question-sign"></i>help</a></th>
                    <th></th>
                </tr>
            </thead>
        <tbody>
            @foreach ($recruits as $recruit)
                <tr>
                    <th class="sp_display_none">{{ $i }}</th>
                    <td><img src="{{ asset("image/recruits/$recruit->main_image") }}"　 width="80" height="80" class="img-rounded image_fit_cover" alt="{{ $recruit->main_image_title }}"></td>
                    <td>{{ $recruit->type }}</td>
                    <td class="sp_display_none">{{ $recruit->title }}</td>
                    <td class="sp_display_none">{{ $recruit->tenant->name }}</td>
                    <?php if ($recruit->status === 0){ $status = '公開'; } else { $status = '非公開'; }?>
                    <td class="sp_display_none">{{ $status }}</td>
                    <?php
                        $date = $recruit->updated_at;
                        $date = date('Y/m/d', strtotime($date));
                     ?>
                    <td class="sp_display_none">{{ $date }}</td>
                    <td>
                    {!! Form::open(['route' => ['admin_recruits.edit', $recruit->id], 'method' => 'get']) !!}
                        {!! Form::submit('編集', ['class' => 'btn btn-success btn-block btn-sm']) !!}
                    {!! Form::close() !!}
                    </td>

                    @if ($mode !== 1)
                    <td class="sp_display_none">
                    {!! Form::open(['route' => ['recruit.archive', $recruit->id], 'method' => 'put']) !!}
                        {!! Form::hidden('archive', '1') !!}
                        {!! Form::hidden('status', '1') !!}
                        {!! Form::submit('保存', ['class' => 'btn btn-warning btn-block btn-sm']) !!}
                    {!! Form::close() !!}
                    </td>
                    @endif

                    @if ($mode === 1)
                    <td class="sp_display_none">
                    {!! Form::open(['route' => ['recruit.nonarchive', $recruit->id], 'method' => 'put']) !!}
                        {!! Form::hidden('archive', '0') !!}
                        {!! Form::submit('非保存', ['class' => 'btn btn-default btn-block btn-sm']) !!}
                    {!! Form::close() !!}
                    </td>
                    @endif

                    @if ($mode === 1)
                    <td class="sp_display_none">
                    {!! Form::open(['route' => ['admin_recruits.destroy', $recruit->id], 'method' => 'delete']) !!}
                        {!! Form::submit('削除', ['class' => 'btn btn-danger btn-block btn-sm']) !!}
                    {!! Form::close() !!}
                    </td>
                    @endif
                </tr>
            <?php $i++; ?>
            @endforeach
        </tbody>
    </table>
    @endif
{!! $recruits->render() !!}

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
