<script>
$(function(){
  //フォーム指定
  $('#event_entry_validation').validate({

    //検証ルール設定
    rules: {
      //ここに検証ルールを設定
      name: {
          required: true,
          maxlength :30,
      },
      name_ja: {
          required: true,
          maxlength :30,
      },
      email: {
          required: true,
          email: true,
          maxlength :50,
      },
      mobile_tel: {
          required: true,
          number: true,
          rangelength:[11,11],
      },
      message: {
          maxlength :100,
      }
    },

    //エラーメッセージ設定
    messages: {
      //ここにエラーメッセージを設定
      name: {
          required: 'お名前は必須です。',
          maxlength: '30文字以内で入力してください。',
      },
      name_ja: {
          required: 'お名前（ひらがな）は必須です。',
          maxlength: '30文字以内で入力してください。',
      },
      email: {
          required: 'メールアドレスは必須です。',
          email: 'メールアドレスを入力してください。',
          maxlength: '70文字以内で入力してください。'
      },
      mobile_tel: {
          required: '携帯番号は必須です。',
          number: '半角数字で入力してください。',
          rangelength: '11桁の半角数字（ハイフンなし）で入力してください。',
      },
      message: {
          maxlength: '100文字以内で入力してください。'
      }
    },

    //エラーメッセージ出力箇所設定
    errorPlacement: function(error, element){
      //ここにエラーメッセージの出力箇所を設定
      error.insertAfter(element);
    },
  });
});
</script>


<div id="contact-form">
    <div class="page-header">
        <h2>イベント申し込みフォーム</h2>
    </div>
    <div class="form">
        {!! Form::open(['route' => 'eventinfo.send', 'method' => 'post', 'id' => 'event_entry_validation']) !!}
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
