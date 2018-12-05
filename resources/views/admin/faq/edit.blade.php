@extends('layouts.app')

@section('content')
<ul class="list-inline">
    <li><a href="{{ route('admin_faq.index') }}"><i class="glyphicon glyphicon-hand-right"></i>FAQ一覧はこちら</a></li>
    <li><a href="{{ route('admin_categorys.create') }}"><i class="glyphicon glyphicon-hand-right"></i>分類登録・更新はこちら</a></li>
</ul>

    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <!-- box -->
            <div class="box box-default">
                <!-- header -->
                <div class="box-header with-border">
                  <h3 class="box-title"><i class="glyphicon glyphicon-question-sign"></i> よくある質問更新</h3>

                </div>
                <!-- /header -->
                <!-- body -->
                <div class="box-body" style="padding: 30px;">

            {!! Form::open(['route' => ['admin_faq.update', $faq->id], 'method' => 'put']) !!}
            <div class="row">
                <div class="form-group col-md-4">
                    {!! Form::label('category', '分類', [ 'class' => 'required', ]) !!}
                    {!! Form::select('category', $categorys, $category->category, ['class' => 'form-control']) !!}
                </div>
            </div>
                <div class="form-group">
                    {!! Form::label('question', 'よくある質問') !!}
                    {!! Form::text('question', $faq->question,  ['class' => 'form-control']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('answer', '回答') !!}
                    {!! Form::text('answer', $faq->answer,  ['class' => 'form-control']) !!}
                </div>
                <div class="form-group">
                    <p>このFAQを公開しますか？</p>
                    <?php if ($faq->status === 0) { $open = 'true' ; $close = ''; }else { $open = '' ; $close = 'true' ; } ?>

                    {!! Form::label('status', '公開') !!}
                    {!! Form::radio('status', 0, $open) !!}
                    {!! Form::label('status', '非公開') !!}
                    {!! Form::radio('status', 1, $close) !!}
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
@endsection
