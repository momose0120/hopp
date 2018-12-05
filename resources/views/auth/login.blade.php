@extends('layouts.login_app')

@section('content')
<div class="container">
    <div class="row justify-content-center login_header">
        <h1 class="login_title">Welcom <span>Hopp！</span></h1>
    </div>
    <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4 col-sm-8 login_transparent">
            <div class="card">
                <div class="card-header">{{ __('ログイン') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="form-group row">
                            <!-- <label for="login_id" class="col-md-4 col-form-label text-md-right">{{ __('ログインID') }}</label> -->

                            <div class="col-md-8 offset-md-2">
                                <input id="login_id" type="text" class="form-control{{ $errors->has('login_id') ? ' is-invalid' : '' }}" name="login_id" value="{{ old('login_id') }}" placeholder="ログインID" required autofocus>

                                @if ($errors->has('login_id'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('login_id') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <!-- <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('パスワード') }}</label> -->

                            <div class="col-md-8 offset-md-2">
                                <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" placeholder="パスワード" required>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-8 offset-md-2">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> {{ __('ログイン状態を保存') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-2">
                                <button type="submit" class="btn btn-primary btn-block">
                                    {{ __('ログイン') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
