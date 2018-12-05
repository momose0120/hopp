@extends('layouts.app')

@section('content')
    <div class="row">
        <!-- 応募者総数 -->
        <div class="col-md-6">
            <!-- box -->
            <div class="box box-danger">
                <!-- header -->
                <div class="box-header with-border">
                  <h3 class="box-title"><i class="glyphicon glyphicon-user"></i> 管理者登録</h3>

                  <div class="box-tools pull-right">
                    <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                    </button>
                  </div>
                </div>
                <!-- /header -->
                <!-- body -->
                <div class="box-body no-padding text-center">
                    <video controls width="90%" height="90%"><source src="{{ asset("manual/admin_create.mp4") }}"></video>
                </div>
                <!-- /body -->
                <!-- footer -->
                <div class="box-footer text-center">
                  <a href="{{ route('admin_contacts.index') }}" class="uppercase"><i class="glyphicon glyphicon-play-circle"></i> 管理者登録へ</a>
                </div>
                <!-- /footer -->
            </div>
            <!-- /box -->
        </div>
    </div>
@endsection
