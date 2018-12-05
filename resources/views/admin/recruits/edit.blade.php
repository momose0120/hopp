@extends('layouts.app')

@section('content')
<ul class="list-inline">
    <li><a href="{{ route('admin_recruits.index') }}"><i class="glyphicon glyphicon-hand-right"></i>募集要項一覧はこちら</a></li>
</ul>
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <!-- box -->
            <div class="box box-default">
                <!-- header -->
                <div class="box-header with-border">
                  <h3 class="box-title"><i class="glyphicon glyphicon-list-alt"></i> 募集要項更新</h3>

                </div>
                <!-- /header -->
                <!-- body -->
                <div class="box-body" style="padding: 30px;">

                    {!! Form::open(['route' => ['admin_recruits.update', $recruit->id], 'files' => true, 'method' => 'put']) !!}
            <div class="row">
                <div class="form-group col-md-3">
                    {!! Form::label('tenant_name', '保育所', [ 'class' => 'required', ]) !!}
                    {!! Form::select('tenant_name', $name, $tenant->name, ['class' => 'form-control']) !!}
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-3">
                    {!! Form::label('job_type', '職種', [ 'class' => 'required', ]) !!}
                    {!! Form::text('job_type', $recruit->type, ['class' => 'form-control']) !!}
                </div>
                <div class="form-group col-md-9">
                    {!! Form::label('title', '職種タイトル', [ 'class' => 'required', ]) !!}
                    <a class="help reference" title="この項目を求職者は最も確認</br>魅力的な職種タイトルが必要</br>16文字以下を推奨"><i class="glyphicon glyphicon glyphicon-exclamation-sign"></i>tips</a>
                    {!! Form::text('title', $recruit->title,  ['class' => 'form-control']) !!}
                </div>
            </div>
                <div class="form-group form-inline">
                    <?php
                    $employments = explode(',', $recruit->employment);
                    $check0 = null;
                    $check1 = null;
                    $check2 = null;
                    foreach ($employments as $employment){
                        if ($employment === '0'){
                            $check0 = true;
                        }elseif($employment === '1'){
                            $check1 = true;
                        }else{
                            $check2 = true;
                        }
                    }
                    ?>

                    {!! Form::label('employment', '雇用形態', ['class' => 'required']) !!}
                    {!! Form::checkbox('employment[]', 0, $check0, ['class' => 'checkbox-inline input_employment']) !!}正社員
                    {!! Form::checkbox('employment[]', 1, $check1, ['class' => 'checkbox-inline input_employment']) !!}パート・アルバイト
                    {!! Form::checkbox('employment[]', 2, $check2, ['class' => 'checkbox-inline input_employment']) !!}契約社員
                </div>
                <div class="form-group">
                    {!! Form::label('talent', '人材イメージ') !!}
                    {!! Form::textarea('talent', $recruit->talent,  ['class' => 'form-control']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('job', '仕事内容') !!}
                    <a target="_blank" class="reference" href="https://support.hopp-recruit.jp/ja/article/%E4%BB%95%E4%BA%8B%E5%86%85%E5%AE%B9%E8%A8%98%E8%BC%89%E3%81%AE%E3%82%B3%E3%83%84"><i class="glyphicon glyphicon-book"></i>教えてHopp！</a>
                    {!! Form::textarea('job', $recruit->job,  ['class' => 'form-control']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('salary', '給与・時給') !!}
                    {!! Form::text('salary', $recruit->salary,  ['class' => 'form-control']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('work_period', '勤務期間') !!}
                    {!! Form::text('work_period', $recruit->work_period,  ['class' => 'form-control']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('work_hours', '勤務時間帯') !!}
                    {!! Form::textarea('work_hours', $recruit->work_hours,  ['class' => 'form-control textarea-size-md']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('allowance', '諸手当') !!}
                    {!! Form::text('allowance', $recruit->allowance,  ['class' => 'form-control']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('welfare', '待遇・福利厚生') !!}
                    {!! Form::text('welfare', $recruit->welfare,  ['class' => 'form-control']) !!}
                </div>

                <!--画像アップロード装飾-->
                <div class="row">
                    <div class="col-md-1">
                        <img src="{{ asset("image/recruits/$recruit->main_image") }}"　 width="60" height="60" class="img-rounded image_fit_cover" alt="{{ $recruit->main_image_title }}">
                    </div>
                    <div class="form-group col-md-5">
                        {!! Form::label('main_image', 'メイン画像アップロード', ['class' => 'control-label']) !!}
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
                    <!-- <div class="col-md-7">
                        <p>　</p>
                        <a href="https://gyazo.com/d198a9f2bbceb2994409d472dbda5651" target="_blank" style="font-size: 8px;"><i class="glyphicon glyphicon-hand-right"></i>メイン画像は公開ページのこちらに表示されます。</a>
                    </div> -->
                </div>
                <div class="row">
                    <div class="col-md-1">
                        <img src="{{ asset("image/recruits/$recruit->image_01") }}"　 width="60" height="60" class="img-rounded image_fit_cover" alt="{{ $recruit->image_01_title }}">
                    </div>
                    <div class="form-group col-md-5">
                        {!! Form::label('image_01', '職場画像アップロード', ['class' => 'control-label']) !!}
                        <input id="lefile_image_01" type="file" style="display:none" name="image_01">
                        <div class="input-group">
                          <input type="text" id="photoCover_01" class="form-control phototext" placeholder="画像ファイルを選択してください">
                          <span class="input-group-btn"><button type="button" class="btn btn-info" onclick="$('input[id=lefile_image_01]').click();">ファイル選択</button></span>
                        </div>
                        <script>
                          $('input[id=lefile_image_01]').change(function() {
                            $('#photoCover_01').val($(this).val());
                          });
                        </script>
                    </div>
                    <!-- <div class="col-md-7">
                        <p>　</p>
                        <a href="#" style="font-size: 8px;"><i class="glyphicon glyphicon-hand-right"></i>こちらの画像は公開ページのこちらに表示されます。</a>
                    </div> -->
                </div>
                <div class="row">
                    <div class="col-md-1">
                        <img src="{{ asset("image/recruits/$recruit->image_02") }}"　 width="60" height="60" class="img-rounded image_fit_cover" alt="{{ $recruit->image_02_title }}">
                    </div>
                    <div class="form-group col-md-5">
                        {!! Form::label('image_02', '職場画像アップロード', ['class' => 'control-label']) !!}
                        <input id="lefile_image_02" type="file" style="display:none" name="image_02">
                        <div class="input-group">
                          <input type="text" id="photoCover_02" class="form-control phototext" placeholder="画像ファイルを選択してください">
                          <span class="input-group-btn"><button type="button" class="btn btn-info" onclick="$('input[id=lefile_image_02]').click();">ファイル選択</button></span>
                        </div>
                        <script>
                          $('input[id=lefile_image_02]').change(function() {
                            $('#photoCover_02').val($(this).val());
                          });
                        </script>
                    </div>
                    <!-- <div class="col-md-7">
                        <p>　</p>
                        <a href="#" style="font-size: 8px;"><i class="glyphicon glyphicon-hand-right"></i>こちらの画像は公開ページのこちらに表示されます。</a>
                    </div> -->
                </div>
                <div class="row">
                    <div class="col-md-1">
                        <img src="{{ asset("image/recruits/$recruit->image_03") }}"　 width="60" height="60" class="img-rounded image_fit_cover" alt="{{ $recruit->image_03_title }}">
                    </div>
                    <div class="form-group col-md-5">
                        {!! Form::label('image_03', '職場画像アップロード', ['class' => 'control-label']) !!}
                        <input id="lefile_image_03" type="file" style="display:none" name="image_03">
                        <div class="input-group">
                          <input type="text" id="photoCover_03" class="form-control phototext" placeholder="画像ファイルを選択してください">
                          <span class="input-group-btn"><button type="button" class="btn btn-info" onclick="$('input[id=lefile_image_03]').click();">ファイル選択</button></span>
                        </div>
                        <script>
                          $('input[id=lefile_image_03]').change(function() {
                            $('#photoCover_03').val($(this).val());
                          });
                        </script>
                        <p class="help-block">ファイルサイズは2MBまでとなります。</p>
                    </div>
                    <!-- <div class="col-md-7">
                        <p>　</p>
                        <a href="#" style="font-size: 8px;"><i class="glyphicon glyphicon-hand-right"></i>こちらの画像は公開ページのこちらに表示されます。</a>
                    </div> -->
                </div>

            <div class="form-group">
                <p>この募集要項を公開しますか？</p>
                <?php if ($recruit->status === 0) { $open = 'true' ; $close = ''; }else { $open = '' ; $close = 'true' ; } ?>

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
