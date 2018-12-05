// A plugin for adding "A-Form" functionality.
// Copyright (c) 2008 ARK-Web Co.,Ltd.

function isEmpty(v) {
  return  ((v == null) || (v.length == 0) || /^\s+$/.test(v.toHankaku()));
}

function escapeHTML(str) {
  return aform$('<div>').text(str).html();
}

function aformValidate_showErrors(errorMap, errorList) {
  var icon = '<img src="'+ aform.static_uri  +'plugins/AForm/images/icons/warning_y.gif">';
  for( var i = 0; errorList[i]; i++ ){
    errorList[i].message = icon + errorList[i].message;
  }
  this.defaultShowErrors();
}

function aformValidate_errorPlacement(error, elm) {
  var id = elm[0].id;
  if( elm[0].type == 'checkbox' || elm[0].type == 'radio' ){
    id = id.replace(/(.*)-[^-]+$/, "$1");
  }
  if( elm[0].name.match(/(aform-field-[0-9]+)-[0-9]+-text$/) ){
    id = id.replace(/(.*)-[0-9]+-text$/, "$1");
  }
  if( match = elm[0].id.match(/^(.*)-confirm$/) ){
    id = match[1];
  }
  if( match = id.match(/^(.*-cardnumber)\d$/) ){
    id = match[1];
  }
  error.addClass('validation-advice');
  aform$('#'+ id +'-error').html(error);
}

function addAFormValidate() {

    aform_jQuery.validator.addMethod('hankaku', function(v,elm) {
      elm.value = elm.value.toHankaku();
      return true;
    });

    aform_jQuery.validator.addMethod('required', function(v,elm) {
      if (aform_ignore_validate(elm)) {
        return true;
      }
      if (!aform$(elm).hasClass('required')) {
        return true;
      }
      if( !isEmpty(v) ){
        removeAFormInputErrorTitle(elm);
        return true;
      }else{
        addAFormInputErrorTitle(elm);
        postAFormErrorLog('empty', elm, v);
        return false;
      }
    });

    aform_jQuery.validator.addMethod('validate-length', function(v,elm) {
      if (aform_ignore_validate(elm)) {
        return true;
      }
      if (isEmpty(v)) {
        removeAFormInputErrorTitle(elm);
        return true;
      }
      var pattern = aform$(elm).attr('pattern');
      var min_length = null;
      var max_length = null;
      if (matches = pattern.match(/^.*\{(\d*),(\d*)\}$/)) {
        min_length = parseInt(matches[1]);
        max_length = parseInt(matches[2]);
      }
      v = v.replace(/\r/g, "");
      v = v.replace(/\n/g, "");
      if( (!min_length || v.length >= min_length) && (!max_length || v.length <= max_length) ){
        removeAFormInputErrorTitle(elm);
        return true;
      }else{
        addAFormInputErrorTitle(elm);
        postAFormErrorLog('max_length_error', elm, v);
        return false;
      }
    });

    aform_jQuery.validator.addMethod('validate-email', function(v,elm) {
      if (aform_ignore_validate(elm)) {
        return true;
      }
      if( isEmpty(v) || /^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/i.test(v) ){
        removeAFormInputErrorTitle(elm);
        return true;
      }else{
        addAFormInputErrorTitle(elm);
        postAFormErrorLog('email_format_error', elm, v);
        return false;
      }
    });

    aform_jQuery.validator.addMethod('validate-ascii', function(v,elm) {
      if (aform_ignore_validate(elm)) {
        return true;
      }
      var pattern = aform$(elm).attr('pattern');
      var char_pattern = '[\\x21-\\x7E]';
      var re = new RegExp('^' + char_pattern + '*$', 'i');
      if( isEmpty(v) || re.test(v) ){
        removeAFormInputErrorTitle(elm);
        return true;
      }else{
        addAFormInputErrorTitle(elm);
        postAFormErrorLog('ascii_error', elm, v);
        return false;
      }
    });

    aform_jQuery.validator.addMethod('validate-url', function (v,elm) {
      if (aform_ignore_validate(elm)) {
        return true;
      }
      if( isEmpty(v) || /^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i.test(v) ){
        removeAFormInputErrorTitle(elm);
        return true;
      }else{
        addAFormInputErrorTitle(elm);
        postAFormErrorLog('url_format_error', elm, v);
        return false;
      }
    });

    aform_jQuery.validator.addMethod('validate-tel', function(v,elm) {
      if (aform_ignore_validate(elm)) {
        return true;
      }
      if( isEmpty(v) || /^[0-9\-]+$/.test(v) ){
        removeAFormInputErrorTitle(elm);
        return true;
      }else{
        addAFormInputErrorTitle(elm);
        postAFormErrorLog('tel_format_error', elm, v);
        return false;
      }
    });

    aform_jQuery.validator.addMethod('validate-zipcode', function(v,elm) {
      if (aform_ignore_validate(elm)) {
        return true;
      }
      if( isEmpty(v) || /^[0-9]{3}-[0-9]{4}$/.test(v) ){
        removeAFormInputErrorTitle(elm);
        return true;
      }else{
        addAFormInputErrorTitle(elm);
        postAFormErrorLog('zipcode_format_error', elm, v);
        return false;
      }
    });

    aform_jQuery.validator.addMethod('validate-selection', function(v,elm){
      if( !isEmpty(v) ){
        removeAFormInputErrorTitle(elm);
        return true;
      }else{
        addAFormInputErrorTitle(elm);
        postAFormErrorLog('not_selected', elm, v);
        return false;
      }
    });

    aform_jQuery.validator.addMethod('validate-one-required', function(v,elm) {
      var field_id = elm.name.match(/^aform-field-[0-9]+/);
      var reg;
      if( elm.type == 'checkbox' ){
        reg = new RegExp( '^'+ field_id +'-[0-9]+$' );
      }else{
        reg = new RegExp( '^'+ field_id +'$');
      }

      var options = elm.form.getElementsByTagName('INPUT');
      var check = false;
      aform$(options).each(function() {
        if( this.name.search(reg) == -1 ){
          return true;
        }
        if( this.checked ){
          check = true;
          return false;
        }
      });
      if( check ){
        hideAFormAdvice(elm);
        removeAFormInputErrorTitle(elm);
        return true;
      }else{
        addAFormInputErrorTitle(elm);
        postAFormErrorLog('empty', elm, '');
        return false;
      }
    });

    aform_jQuery.validator.addMethod('validate-option-text', function(v,elm) {
      var matches = elm.id.match(/^(.*)-([0-9]+)-text$/);
      if( matches.length > 0 ){
        var field_id = matches[1];
        var option_idx = matches[2];
        if( aform$('#'+field_id+'-'+option_idx)[0].checked && isEmpty(v) ){
          addAFormInputErrorTitle(elm);
          postAFormErrorLog('empty', elm, v);
          return false;
        }else{
          removeAFormInputErrorTitle(elm);
          return true;
        }
      }
      return true;
    });

    aform_jQuery.validator.addMethod('validate-upload', function(v,elm) {
      if( !isEmpty(v) ){
        removeAFormInputErrorTitle(elm);
        return true;
      }else{
        addAFormInputErrorTitle(elm);
        postAFormErrorLog('empty', elm, v);
        return false;
      }
    });

    aform_jQuery.validator.addMethod('validate-privacy', function(v,elm) {
      var field_id = elm.name.match(/^aform-field-[0-9]+/);
      var reg = new RegExp( field_id );
      var options = elm.form.getElementsByTagName('INPUT');
      var check = false;
      aform$(options).each(function() {
        if( this.name.search(reg) == -1 ){
          return true;
        }
        if( this.checked ){
          check = true;
          return false;
        }
      });
      if( check ){
        removeAFormInputErrorTitle(elm);
        return true;
      }else{
        addAFormInputErrorTitle(elm);
        postAFormErrorLog('privacy_error', elm, '');
        return false;
      }
    });

    aform_jQuery.validator.addMethod('require-twice', function(v,elm) {
      if (match = elm.id.match(/^(.*)-confirm$/)) {
        var orig_id = match[1];
        var orig_elm = aform_jQuery('#' + orig_id);
        if (orig_elm.hasClass('error')) {
          return true;
        }
        if (v == orig_elm.val()) {
          removeAFormInputErrorTitle(elm);
          return true;
        }else{
          addAFormInputErrorTitle(elm);
          postAFormErrorLog('require_twice', elm, v);
          return false;
        }
      }
    });

    aform_jQuery.validator.addMethod('validate-name', function(v,elm) {
      if (v.match(/%/)) {
        addAFormInputErrorTitle(elm);
        postAFormErrorLog('validate_name', elm, v);
        return false;
      }else{
        removeAFormInputErrorTitle(elm);
        return true;
      }
    });

    aform_jQuery.validator.addMethod('validate-name-kana', function(v,elm) {
      elm.value = elm.value.toZenkakuKana();
      if (isEmpty(elm.value) || elm.value.isKanaOnly()) {
        removeAFormInputErrorTitle(elm);
        return true;
      }else{
        addAFormInputErrorTitle(elm);
        postAFormErrorLog('validate_name_kana', elm, v);
        return false;
      }
    });

    var disable_methods = ['remote', 'minlength', 'maxlength', 'rengelength', 'min', 'max', 'range', 'email', 'url', 'date', 'dateISO', 'number', 'digits', 'creditcard', 'accept', 'equalTo', 'phoneUS'];
    aform_jQuery.each(disable_methods, function(idx, val) {
      aform_jQuery.validator.addMethod(val, function (v,elm) {
        return true;
      });
    });
}



function addAFormInputErrorTitle(elm)
{
  if( ! elm.title.match(eval("/^"+ aform.phrases['Input error:'] +"/")) ){
    elm.title = aform.phrases['Input error:'] + elm.title;
  }
}


function removeAFormInputErrorTitle(elm)
{
  elm.title = elm.title.replace(eval("/"+ aform.phrases['Input error:'] +"/"), "");
}


function hideAFormAdvice(elm)
{
  var field_id = elm.id.replace(/(.*)-[0-9]+$/, "$1");
  aform$('#' + field_id + '-error').html('');
}

function postAFormAccessLog(aform_id)
{
  var params = {
    screen : 'form',
    run_mode : 'access',
    aform_id : aform_id,
    aform_url : document.location.href,
    first_access : aform$.cookie(document.location.pathname) ? 0 : 1
  };
  aform_jQuery.ajax({
        url: aform.logger_url,
        dataType: 'jsonp',
        data: params
        }); 
  var date = new Date();
  date.setTime(date.getTime() + 30*60*1000);
  aform$.cookie(document.location.pathname, "1", { expires: date});	// expires sec
}

function postAFormErrorLog(type, elm, value)
{
  var aform_id = elm.form.id.value;
  var field_id = elm.name.replace(/aform-field-(\d+).*/, "$1");
  var params = {
    run_mode : 'error',
    aform_id : aform_id,
    aform_url : document.location.href,
    type : type,
    error_field_id : field_id,
    error_value : value
  };
  aform_jQuery.ajax({
        url: aform.logger_url,
        dataType: 'jsonp',
        data: params
  });
}

function postAFormChecker()
{
  aform_jQuery.ajax({
    url: aform.checker_url,
    dataType: 'jsonp'
  });
}

function postAFormActiveChecker(aform_id)
{
  aform_jQuery('.aform-checking').show();
  aform_jQuery('.aform-content').hide();

  var params = {
    __mode : 'rebuild_aform',
    aform_id : aform_id
  };
  aform_jQuery.ajax({
        url: aform.checker_url,
        dataType: 'jsonp',
        data: params,
        success: reload_if_rebuild
  }); 
}

function reload_if_rebuild(response)
{
  if( response == 'rebuild' ){
    document.location.reload();
  }else{
    aform_jQuery('.aform-checking').hide();
    aform_jQuery('.aform-content').show();
  }
}

function regist_ajax_upload(field_id, size, type){
  var ext = '';
  if( type != '' ){
    var types = type.split(',');
    for( i = 0; i < types.length; i++ ){
      types[i] = '*.' + types[i].replace(/^\s+|\s+$/g, '');
    }
    ext = types.join(';');
  }
  if( size <= 0 ){
    size = '';
  }
  aform_jQuery('#aform-upload-button-' + field_id).fileUpload({
    'script' : aform.upload_script_url,
    'uploader' : aform.static_uri + 'plugins/AForm/js/jquery.uploadify/uploader.swf',
    'cancelImg' : aform.static_uri + 'plugins/AForm/js/jquery.uploadify/cancel.png',
//    'buttonImg' : aform.static_uri + 'plugins/AForm/js/jquery.uploadify/button.gif',
    'auto' : true,
    'sizeLimit' : size,
    'fileDesc' : ext,
    'fileExt' : ext,
    'fileDataName' : 'upload_file',
    'scriptData' : {
      run_mode : 'upload',
      aform_id : 1,
      field_id : field_id
    },
    'onComplete' : function(event, queueID, fileObj, responseText, data){
      var response = eval("(" + responseText + ")");
      aform_jQuery('#aform-upload-info-' + field_id).text(fileObj.name + response.message);
      switch( response.result ){
      case 'success':
        aform_jQuery('#aform-field-' + field_id).val(response.id);
        aform_jQuery('#aform-upload-name-' + field_id).val(fileObj.name);
        aform_jQuery('#aform-upload-remove-' + field_id).show();
        aform_jQuery('#advice-validate-upload-aform-field-' + field_id).hide();
        break;
      default:
        aform_jQuery('#aform-field-' + field_id).val('');
        aform_jQuery('#aform-upload-name-' + field_id).val('');
        aform_jQuery('#aform-upload-remove-' + field_id).hide();
        break;
      }
      this.enable();
    },
    onError : function(event, queueID, fileObj, errorObj){
      switch( errorObj.type ){
      case 'File Size':
        aform_jQuery("#" + event.target.id + queueID + " .fileName").text("エラー : ファイルサイズオーバー " + fileObj.name);
        break;
      default:
        alert('error!' + errorObj.type);
        break;
      }
      return false;
    }
  });
}

function remove_upload(field_id){
  aform_jQuery('#aform-upload-info-' + field_id).text('');
  aform_jQuery('#aform-field-' + field_id).val('');
  aform_jQuery('#aform-upload-name-' + field_id).val('');
  aform_jQuery('#aform-upload-remove-' + field_id).hide();
  Validation.reset($('aform-field-' + field_id));
}

function get_aform_parameter(parts_id, parameter_name){
  if( isEmpty(parameter_name) ){
    return false;
  }
  var val = aform$.query.get(parameter_name);
  aform_jQuery('#' + parts_id).val(val);
  aform_jQuery('#' + parts_id + '-text').text(val);
}

function set_datepicker(parts_id, range_from, range_to, default_value, disables){
  init_aform_calendar(parts_id, default_value);

  aform$('#' + parts_id).datepicker({
    showOn: 'button',
    buttonImage: aform.static_uri + 'plugins/AForm/images/calendar.gif',
    buttonImageOnly: true,
    changeMonth: true,
    changeYear: true,
    minDate: new Date(range_from, 1-1, 1),
    maxDate: new Date(range_to, 12-1, 31),
    beforeShow: function(){
      var yy = aform$('#' + parts_id + '-yy').val();
      var mm = aform$('#' + parts_id + '-mm').val();
      var dd = aform$('#' + parts_id + '-dd').val();
      if( yy > 0 && mm > 0 && dd > 0 ){
        aform$(this).datepicker('setDate', new Date(yy, mm-1, dd));
      }
    },
    beforeShowDay: function(day) {
      var mm = ("00" + (day.getMonth() + 1)).slice(-2);
      var dd = ("00" + day.getDate()).slice(-2);
      var ymd = day.getFullYear() + '' + mm + '' + dd;
      var disable_date = disables[ymd];
      if (disable_date) {
        return [false, "", disable_date.title];
      } else {
        return [true, ""];
      }
    },
    onSelect: function() {
      var date = aform$(this).datepicker('getDate');
      var elm_yy = aform$('#' + parts_id + '-yy');
      var elm_mm = aform$('#' + parts_id + '-mm');
      var elm_dd = aform$('#' + parts_id + '-dd');
      aform$(elm_yy).val(date.getFullYear());
      aform$(elm_mm).val(date.getMonth()+1);
      aform$(elm_dd).val(date.getDate());
      aform$(elm_yy).valid();
      aform$(elm_mm).valid();
      aform$(elm_dd).valid();
    }
  });
}

function init_aform_calendar(parts_id, default_value) {
  var elm_yy = aform$('#' + parts_id + '-yy');
  var elm_mm = aform$('#' + parts_id + '-mm');
  var elm_dd = aform$('#' + parts_id + '-dd');

  if (aform$(elm_yy).val() != '' || aform$(elm_mm).val() != '' || aform$(elm_dd).val() != '') {
    return;
  }

  var date = new Date();
  var yy = date.getFullYear();
  var mm = date.getMonth() + 1;
  var dd = date.getDate();

  if (match = default_value.match(/([\+\-]\d+)((day|month|year))/)) {
    var offset = parseInt(match[1]);
    var type = match[2];
    if (type == "day") {
      date.setTime(date.getTime() + offset * 60*60*24*1000);
      yy = date.getFullYear();
      mm = date.getMonth() + 1;
      dd = date.getDate();
    }
    else if (type == "month") { 
      mm += offset;
      if (mm > 12) {
        yy += 1;
        mm -= 12;
      }
      if (mm < 1) {
        yy -= 1;
        mm += 12;
      }
    }
    else if (type == "year") {
      yy += offset;
    }
    // fix date
    var check_date = new Date(yy, mm, 0);
    if (dd > check_date.getDate()) {
      dd = check_date.getDate();
    }
  } else if (default_value == 'today') {
    // 
  } else {
    return;
  }
  // set dropdown
  aform$(elm_yy).val(yy);
  aform$(elm_mm).val(mm);
  aform$(elm_dd).val(dd);
}

aform$(document).ready(function(){
  aform_set_reserve_events();
});

function aform_set_reserve_events(){
  aform$('.aform-reserve-date').each(function(){
    aform_set_reserve_plan_list(this);
  });
  aform$('.aform-reserve-date').change(function(){
    aform_set_reserve_plan_list(this);
  });
  aform$('.aform-reserve-plan-id').each(function(){
    aform_set_reserve_option_list(this);
  });
  aform$('.aform-reserve-plan-id').change(function(){
    aform_set_reserve_option_list(this);
  });
}

function aform_set_reserve_plan_list(date_parts){
    var parts_id;
    if( match = date_parts.id.match(/^(.+)-date$/) ){
      parts_id = match[1];
    }
    if( !parts_id ){
      return;
    }
    var plan_select = aform$('#'+ parts_id +'-plan-id');
    plan_select.empty();
    var date_value = aform$(date_parts).val();
    var plan_items = '<option value="">-</option>';
    var plans = aformReserveOptionValues[date_value];
    aform$(plans).each(function() {
      plan_items += '<option value="' + this['id'] + '">' + this['name'] + '</option>';
    })
    plan_select.append(plan_items);
    plan_select.trigger("change");
}

function aform_set_reserve_option_list(plan_parts){
    var parts_id;
    if( match = plan_parts.id.match(/^(.+)-plan-id$/) ){
      parts_id = match[1];
    }
    if( !parts_id ){
      return;
    }
    var date_parts = aform$('#'+ parts_id +'-date');
    if( !date_parts ){
      return;
    }
    var date_value = aform$(date_parts).val();
    var plan_id = aform$(plan_parts).val();

    var option_value_select = aform$('#'+ parts_id +'-option-value-id');
    option_value_select.empty();
    var option_items = '<option value="">-</option>';
    var exists_option = false;
    if (date_value && plan_id) {
      var plans = aformReserveOptionValues[date_value];
      aform$(plans).each(function() {
          if (this.id == plan_id) {
              var option_values = this['option_values'];
              aform$(option_values).each(function() {
                  option_items += '<option value="' + this['id'] + '">' + this['name'] + '</option>';
                  exists_option = true;
              });
          }
      });
    }
    option_value_select.append(option_items);

    if (exists_option) {
        option_value_select.removeAttr('disabled', '');
        option_value_select.show();
    }else{
        option_value_select.attr('disabled', 'disabled');
        option_value_select.hide();
    }
}

CheckNextStep = {};
CheckNextStep.vars = {};
CheckNextStep.check = function(me, max_length, e) {
    var value = aform$(me).val();
    if (value.length < max_length) {
        return ;
    }
    // 矢印キー、TAB、Shift の場合は何もしない
    var denyKey = [37,38,39,40,9,16];
    for (var i = 0 ; i < denyKey.length ; i++) {
        if (e.keyCode == denyKey[i]) {
            return ;
        }
    }
    value = value.substr(0, max_length); // オーバー分は切る
    aform$(me).val(value);
    
    if (match = aform$(me).attr("id").match(/(\d+)$/)) {
        var next_num = parseInt(match[1],10) + 1;
        var next_id  = aform$(me).attr("id").replace(/\d+$/, next_num);
        aform$("#"+next_id).focus();
    } else {
        aform$(me).blur();
    }
}

function aform_ignore_validate(elm) {
    if (aform$(elm).hasClass('require-twice')) {
        return true;
    }
    return false;
}
