@extends('layouts.app')

@section('content')
    <div class="row">
        <div class="col-md-offset-1 col-md-3">
            <!-- box -->
            <div class="box box-default">
                <!-- header -->
                <div class="box-header with-border">
                  <h3 class="box-title"><i class="glyphicon glyphicon-question-sign"></i> 分類登録</h3>

                </div>
                <!-- /header -->
                <!-- body -->
                <div class="box-body" style="padding: 5px;">
                        {!! Form::open(['route' => ['admin_categorys.update', $category->id], 'method' => 'put']) !!}
                        <div class="form-group">
                            {!! Form::label('category', '分類', [ 'class' => 'required', ]) !!}
                            {!! Form::text('category', $category->category, ['class' => 'form-control']) !!}
                        </div>
                        <div class="form-group">
                            {!! Form::label('sort', '表示順位', [ 'class' => 'required', ]) !!}
                            {!! Form::text('sort', $category->sort,  ['class' => 'form-control']) !!}
                        </div>
                    </div>
                    <!-- /body -->
                <!-- footer -->
                <div class="box-footer text-center">
                    <div class="col-md-10 col-md-offset-1">
                    {!! Form::submit('更新', ['class' => 'btn   btn-primary btn-block']) !!}
                    {!! Form::close() !!}
                    </div>
                </div>
                <!-- /footer -->
            </div>
            <!-- /box -->
        </div>
        @include('admin.categorys.index', ['categorys' => $categorys])
    </div>
@endsection
