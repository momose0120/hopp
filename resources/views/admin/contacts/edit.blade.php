@extends('layouts.app')

@section('content')
<ul class="list-inline">
    <li><a href="{{ route('admin_contacts.index') }}"><i class="glyphicon glyphicon-hand-right"></i>応募者一覧はこちら</a></li>
</ul>
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <!-- box -->
            <div class="box box-default">
                <!-- header -->
                <div class="box-header with-border">
                  <h3 class="box-title"><i class="glyphicon glyphicon-envelope"></i> 応募者詳細</h3>

                </div>
                <!-- /header -->
                <!-- body -->
                <div class="box-body" style="padding: 30px;">

            <div class="row">
                <div class="form-group col-md-3">
                    @if($recruit === null)
                        {!! Form::open(['route' => ['contact.warning'], 'method' => 'get']) !!}
                            {!! Form::submit('募集要項はこちら', ['class' => 'btn btn-success btn-block btn-sm']) !!}
                        {!! Form::close() !!}
                    @else
                        {!! Form::open(['route' => ['recruitinfo.show', $contact->recruit_id], 'method' => 'get', 'target
                        ' => '_blank']) !!}
                            {!! Form::submit('募集要項はこちら', ['class' => 'btn btn-success btn-block btn-sm']) !!}
                        {!! Form::close() !!}
                    @endif
                </div>
                <div class="form-group col-md-3">
                    <P>応募日時：{{ $contact->created_at }}</p>
                </div>
            </div>

            {!! Form::open(['route' => ['admin_contacts.update', $contact->id], 'method' => 'put']) !!}
            <div class="row">
                <div class="form-group col-md-3">
                    {!! Form::label('name', '氏名（ひらなが）') !!}
                    {!! Form::text('name', $contact->name, ['class' => 'form-control', 'readonly' => 'readonly']) !!}
                </div>
                <!-- <div class="form-group col-md-5">
                    {!! Form::label('email', 'メールアドレス') !!}
                    {!! Form::text('email', $contact->email,  ['class' => 'form-control', 'readonly' => 'readonly']) !!}
                </div> -->
                <div class="form-group col-md-3">
                    {!! Form::label('tel', '携帯番号') !!}
                    {!! Form::text('tel', $contact->tel,  ['class' => 'form-control', 'readonly' => 'readonly']) !!}
                </div>
                <div class="form-group col-md-2">
                    {!! Form::label('age', '年齢') !!}
                    {!! Form::text('age', $contact->age,  ['class' => 'form-control', 'readonly' => 'readonly']) !!}
                </div>
                <div class="form-group col-md-3">
                    {!! Form::label('message', 'メッセージ') !!}
                    {!! Form::text('message', $contact->message,  ['class' => 'form-control', 'readonly' => 'readonly']) !!}
                </div>
            </div>
            <div class="row">
                <!-- <div class="form-group col-md-2">
                    <?php if ($contact->gender === 0){ $gender = '女性'; } else { $gender = '男性'; }?>
                    {!! Form::label('gender', '性別') !!}
                    {!! Form::text('gender', $gender,  ['class' => 'form-control', 'readonly' => 'readonly']) !!}
                </div> -->
            </div>
            <div class="row">
                <div class="form-group col-md-2">
                    {!! Form::label('progress', '対応進捗') !!}
                    {!! Form::select('progress', $progress, $contact->progress, ['class' => 'form-control']) !!}
                    <a class="help" title="ここを「対応済み」にすると未対応にカウントされなくなります。"><i class="glyphicon glyphicon glyphicon-question-sign"></i>help</a>
                </div>
                <div class="form-group col-md-2">
                    {!! Form::label('result', '結果') !!}
                    {!! Form::select('result', $result, $contact->result, ['class' => 'form-control']) !!}
                    <a class="help" title="ここを入力すると保存ができるようになります。"><i class="glyphicon glyphicon glyphicon-question-sign"></i>help</a>

                </div>
            </div>
                <div class="form-group">
                    {!! Form::label('memo', 'メモ') !!}
                    {!! Form::textarea('memo', $contact->memo, ['class' => 'form-control']) !!}
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
