<div id="contact-form">
    <div class="page-header">
        <h2>お問合せフォーム</h2>
    </div>
    <div class="form">
        {!! Form::open(['route' => 'contact.send', 'method' => 'post']) !!}
        {!! Form::hidden('id', $recruit->id) !!}
        <div class="cp_iptxt">
            {!! Form::text('name', old('name'), ['placeholder' => 'お名前（ひらがな）']) !!}
        	<i class="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
        </div>
        <div class="cp_iptxt">
            {!! Form::text('mobile_tel', old('mobile_tel'),  ['placeholder' => '携帯番号（ハイフンなし）']) !!}
            <i class="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
        </div>
        <div class="cp_iptxt">
            {!! Form::text('age', old('age'),  ['placeholder' => '年齢（半角数字）']) !!}
            <i class="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
        </div>
        <div class="cp_radio">
            <p>メッセージを選択下さい</p>
            <ul class="radio">
                <li class="radio-list">
                    {!! Form::label('message', '面接希望') !!}
                    {!! Form::radio('message', '面接希望', true) !!}
                </li>
                <li class="radio-list">
                    {!! Form::label('message', '勤務地見学希望') !!}
                    {!! Form::radio('message', '勤務地見学希望') !!}
                </li>
                <li class="radio-list">
                    {!! Form::label('message', 'お仕事内容の説明希望（電話）') !!}
                    {!! Form::radio('message', 'お仕事内容の説明希望') !!}
                </li>
                <li class="radio-list">
                    {!! Form::label('message', 'その他') !!}
                    {!! Form::radio('message', 'その他') !!}
                </li>
            </ul>
        </div>
        {!! Form::submit('送信') !!}
        {!! Form::close() !!}
    </div>
</div>
