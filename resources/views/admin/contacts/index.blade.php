@extends('layouts.app')

@section('content')
<div class="row">
    <div class="col-md-6">
        {!! Form::open(['route' => 'contact.search', 'method' => 'post']) !!}
        <ul class="list-inline">
            <li>{!! Form::text('contact_search', null, ['class' => 'form-control', 'placeholder' => '応募者氏名検索']) !!}</li>
            <li>{!! Form::submit('検索', ['class' => 'btn btn-warning btn-block btn-sm']) !!}</li>
        </ul>
        {!! Form::close() !!}
    </div>
</div>
<p class="help-block"><i class="glyphicon glyphicon-arrow-down"></i> タブを切り替えると表示される一覧が変更されます。</p>
<div class="row">
    <div class="col-md-4">
        <ul class="nav nav-pills nav-justified">
            <li role="presentation" class="{{ Request::is('admin_contacts') ? 'active' : '' }}"><a class="tab-color" href="{{ route('admin_contacts.index') }}">全件<span class="badge">{{ $contact_all_count }}</span></a></li>
            <li role="presentation" class="{{ Request::is('contact_part') ? 'active' : '' }}"><a href="{{ route('contact.part') }}">未対応<span class="badge">{{ $contact_count }}</span></a></li>
            <li role="presentation" class="{{ Request::is('contact_archives') ? 'active' : '' }}"><a href="{{ route('contact.archives') }}">保存<span class="badge">{{ $contact_archive_count }}</span></a></li>
        </ul>
    </div>
</div>
<!-- box -->
<div class="box box-defaultr">
    <!-- header -->
    <div class="box-header with-border">
      @if ($mode !== 3)
        <h3 class="box-title"><i class="glyphicon glyphicon-envelope"></i> 応募者一覧</h3>
      @elseif ($mode === 3)
        <h3 class="box-title"><i class="glyphicon glyphicon-envelope"></i> 検索結果一覧</h3><small>「全件」タブを押すと表示が戻ります。</small>
      @endif

      <div class="box-tools pull-right">
      </div>
    </div>
    <!-- /header -->
    <!-- body -->
    <div class="box-body" style="padding: 30px;">

    @if (count($contacts) > 0)

    <?php $i = 1; ?>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>氏名</th>
                    <th>進捗</th>
                    <th>結果</th>
                    <!-- <th>性別</th> -->
                    <th>メッセージ</th>
                    <th>応募日時</th>
                    <th><a class="help" title="保存すると全件表示に表示されなくなります。
                        <br />全件表示に戻すには非保存をします。"><i class="glyphicon glyphicon glyphicon-question-sign"></i>help</a>
                    </th>
                    <th></th>
                </tr>
            </thead>
        <tbody>

            @foreach ($contacts as $contact)
                <tr class="{{ $contact->classUnread() }}">
                    <th>{{ $i }}</th>
                    <td>{{ $contact->name }}</td>
                    <!-- 配列処理 -->
                    <?php
                    $prog = '';
                    $rslt = '';
                    if ($contact->progress === 0){
                        $prog = $progress[0];
                    } elseif ($contact->progress === 1) {
                        $prog = $progress[1];
                    } elseif ($contact->progress === 2){
                        $prog = $progress[2];
                    } else{
                        $prog = '';
                    }

                    if ($contact->result === 0){
                        $rslt = $result[0];
                    } elseif ($contact->result === 1) {
                        $rslt = $result[1];
                    } elseif ($contact->result === 2) {
                        $rslt = $result[2];
                    } elseif ($contact->result === 3) {
                        $rslt = $result[3];
                    } elseif ($contact->result === 4) {
                        $rslt = $result[4];
                    } elseif ($contact->result === 5) {
                        $rslt = $result[5];
                    } else {
                        $rslt = '';
                    }
                    ?>
                    <td>{{ $prog }}</td>
                    <td class="{{ $contact->classNoinput() }}">{{ $rslt }}</td>
                    <?php if ($contact->gender === 0){
                        $gender = '女性';
                    } else {
                        $gender = '男性';
                    } ?>
                    <!-- <td>{{ $gender }}</td> -->
                    <td>{{ $contact->message }}</td>
                    <?php
                        $date = $contact->created_at;
                        $date = date('Y/m/d', strtotime($date));
                     ?>
                    <td>{{ $date }}</td>
                    <td>
                    {!! Form::open(['route' => ['admin_contacts.edit', $contact->id], 'method' => 'get']) !!}
                        {!! Form::submit('詳細', ['class' => 'btn btn-success btn-block btn-sm']) !!}
                    {!! Form::close() !!}
                    </td>

                    @if ($mode !==2)
                    <td>
                    {!! Form::open(['route' => ['contact.archive', $contact->id], 'method' => 'put']) !!}
                        {!! Form::hidden('archive', '1') !!}
                        {!! Form::hidden('progress', '2') !!}
                        {!! Form::submit('保存', ['class' => 'btn btn-warning btn-block btn-sm']) !!}
                    {!! Form::close() !!}
                    </td>
                    @endif

                    @if ($mode === 2)
                    <td>
                    {!! Form::open(['route' => ['contact.nonarchive', $contact->id], 'method' => 'put']) !!}
                        {!! Form::hidden('archive', '0') !!}
                        {!! Form::submit('非保存', ['class' => 'btn btn-default btn-block btn-sm']) !!}
                    {!! Form::close() !!}
                    </td>
                    @endif

                    @if ($mode === 2)
                    <td>
                    {!! Form::open(['route' => ['admin_contacts.destroy', $contact->id], 'method' => 'delete']) !!}
                        {!! Form::submit('削除', ['class' => 'btn btn-danger btn-block btn-sm']) !!}
                    {!! Form::close() !!}
                    </td>
                    @endif
                </tr>
            <?php $i++; ?>
            @endforeach
        </tbody>
    </table>
    {!! $contacts->render() !!}
    @endif

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
