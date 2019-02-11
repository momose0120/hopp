<script>
$(function(){
  //フォーム指定
  $('#contact_form_validation').validate({

    //検証ルール設定
    rules: {
      //ここに検証ルールを設定
      name: {
          required: true,
          maxlength :30,
      },
      mobile_tel: {
          required: true,
          number: true,
          rangelength:[11,11],
      },
      age: {
          required: true,
          number: true,
          rangelength:[1,3],
      }
    },

    //エラーメッセージ設定
    messages: {
      //ここにエラーメッセージを設定
      name: {
          required: 'お名前は必須です。',
          maxlength: '30文字以内で入力してください。',
      },
      mobile_tel: {
          required: '携帯番号は必須です。',
          number: '半角数字で入力してください。',
          rangelength: '11桁の半角数字（ハイフンなし）で入力してください。',
      },
      age: {
          required: '年齢は必須です。',
          number: '半角数字で入力してください。',
          rangelength: '1-3桁の半角数字で入力してください。',
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
        <h2>お問合せフォーム</h2>
    </div>
    <div class="form">
        {!! Form::open(['route' => 'contact.send', 'method' => 'post', 'id' => 'contact_form_validation']) !!}
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
