@extends('layouts.app')

@section('content')
<ul class="list-inline">
    <li><a href="{{ route('admin_tenants.create') }}"><i class="glyphicon glyphicon-hand-right"></i>新規登録はこちら</a></li>
</ul>

    <div class="row">
        <div class="col-md-4">
            <!-- box -->
            <div class="box box-default">
                <!-- header -->
                <div class="box-header with-border">
                  <h3 class="box-title"><i class="glyphicon glyphicon-picture"></i> 保育所更新</h3>

                </div>
                <!-- /header -->
                <!-- body -->
                <div class="box-body" style="padding: 30px;">

            {!! Form::open(['route' => ['admin_tenants.update', $tenant->id], 'files' => true, 'method' => 'put']) !!}
                <div class="form-group">
                    {!! Form::label('tenant_name', '保育所名称', [ 'class' => 'required', ]) !!}
                    {!! Form::text('tenant_name', $tenant->name, ['class' => 'form-control']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('access', 'アクセス') !!}
                    {!! Form::text('access', $tenant->access,  ['class' => 'form-control']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('address', '住所') !!}
                    {!! Form::text('address', $tenant->address,  ['class' => 'form-control']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('main_image', '画像アップロード', ['class' => 'control-label']) !!}
                    <input id="lefile_main_image" type="file" style="display:none" name="main_image">
                    <div class="input-group">
                      <input type="text" id="photoCover_main" class="form-control phototext" placeholder="画像ファイルを選択してください">
                      <span class="input-group-btn"><button type="button" class="btn btn-info" onclick="$('input[id=lefile_main_image]').click();">ファイル選択</button></span>
                    </div>
                    <script>
                      $('input[id=lefile_main_image]').change(function() {
                        $('#photoCover_main').val($(this).val());
                      });
                    </script>
                </div>
            </div>
        <!-- /body -->
    <!-- footer -->
    <div class="box-footer text-center">
        <div class="col-md-6 col-md-offset-3">
        {!! Form::submit('更新', ['class' => 'btn   btn-primary btn-block']) !!}
        {!! Form::close() !!}
        </div>
    </div>
    <!-- /footer -->
</div>
<!-- /box -->
</div>
    @include('admin.tenants.index', ['tenants' => $tenants])
    </div>
@endsection
