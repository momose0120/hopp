<div id="contact-form">
    <div class="page-header">
        <h2>イベント申し込みフォーム</h2>
    </div>
    <div class="form">
        {!! Form::open(['route' => 'eventinfo.send', 'method' => 'post']) !!}
        {!! Form::hidden('id', $event->id) !!}
        <div class="cp_iptxt">
            {!! Form::text('name', old('name'), ['placeholder' => 'お名前']) !!}
        	<i class="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
        </div>
        <div class="cp_iptxt">
            {!! Form::text('name_ja', old('name_ja'), ['placeholder' => 'お名前（ひらがな）']) !!}
        	<i class="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
        </div>
        <div class="cp_iptxt">
            {!! Form::text('email', old('email'),  ['placeholder' => 'メールアドレス']) !!}
            <i class="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
        </div>
        <div class="cp_iptxt">
            {!! Form::text('mobile_tel', old('mobile_tel'),  ['placeholder' => '携帯番号（ハイフンなし）']) !!}
            <i class="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
        </div>
        <div class="cp_iptxt">
            {!! Form::textarea('message', old('message'),  ['placeholder' => 'ご連絡事項があれば記載ください']) !!}
            <i class="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
        </div>
        {!! Form::submit('送信') !!}
        {!! Form::close() !!}
    </div>
</div>
