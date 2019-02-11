$(function(){
  //フォーム指定
  $('#contact_form_validation').validate({

    //検証ルール設定
    rules: {
      //ここに検証ルールを設定
      mobile_tel: {
          required: true
      }
    },

    //エラーメッセージ設定
    messages: {
      //ここにエラーメッセージを設定
      mobile_tel: {
          required: '名前を入力してください'
      }
    },

    //エラーメッセージ出力箇所設定
    errorPlacement: function(error, element){
      //ここにエラーメッセージの出力箇所を設定
      error.insertAfter(element);
    },
  });
  console.log('test');
});
