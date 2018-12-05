
function ___formvalidate () {
	this.$inputwrap = $('.mdl-form-inputwrap');
	this.$confirmwrap = $('.mdl-form-confirmwrap');
	this.pathname = location.pathname;
	this.submitFlag = false;
}

// valueチェック
___formvalidate.prototype.isSet = function(val){
	if(val instanceof Object){
		return false; 
	}else{
		switch(val){
			case null :
			case undefined :
			case "" :
			case false :
			case 0 :
				return false;
				break;
			default:
				return true;
				break;
		}
	}
};

// 機種依存文字対策
___formvalidate.prototype.mdc = function(str) {
	var reg = '[<>㌶Ⅲ⑳㏾☎㈱髙﨑①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡㍻〝〟№㏍℡㊤㊥㊦㊧㊨㈱㈲㈹㍾㍽㍼]';
	if(str.match(reg)) {
		return false;
	}else{
		return true;
	}
};

// クロスサイトスクリプティング対策
___formvalidate.prototype.h = function(str) {
	if(this.isSet(str)){
		str = str.replace(/<br>/g, '\n');
		str = str.replace(/<br \/>/g, '\n');
		str = str.replace(/&/g, '&amp;');
		str = str.replace(/</g, '&lt;');
		str = str.replace(/>/g, '&gt;');
		str = str.replace(/"/g, '&quot;');
		str = str.replace(/'/g, '&#39;');
		str = str.replace(/\n/g, '<br>');
	}
    return str;
};

// セレクトボックスチェック
___formvalidate.prototype.selectbox = function($target) {
	return $target.val() != '' ? true : false;
};

// ファイルチェック
___formvalidate.prototype.file = function($target) {
	return $target.val() != '' ? true : false;
};

// テキストエリアチェック
___formvalidate.prototype.textarea = function($target) {
	// return $target.val() != '' ? true : false;
	return this.isSet($target.val());
};

// メールアドレスチェック
___formvalidate.prototype.mailaddress = function($target) {
	var reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
	// var reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var val = $target.val();
	if(this.isSet(val)) {
		if(reg.test(val)) {
			return true;
		}else{
			return 'メールアドレスを正しく入力してください';
		}
	}else{
		return 'メールアドレスを入力してください';
	}
};

// 電話番号チェック
___formvalidate.prototype.tel = function($target) {
	var val = $target.val().replace(/[━.*‐.*―.*－.*\-.*ー.*\-]/gi,'');
	if(val != '') {
		if(!val.match(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/)) {
			return false;
		}else{
			return true;
		}
	}else{
		return false;
	}
};

// かなチェック
___formvalidate.prototype.kana = function($target) {
	var val = $target.val();
	if(this.isSet(val)) {
		if(val.match(/^[ぁ-んー]*$/)) {
			return true;
		}else{
			return '全角かなで入力してください';
		}
	}else{
		return 'ふりがなを入力してください';
	}
};

// 空チェック
___formvalidate.prototype.empty = function($target) {
	var val = $target.val();
	if(val != '') {
		if(this.mdc(val)) {
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}
};

// 郵便番号チェック
___formvalidate.prototype.zipcode = function($target) {
	var val = $target.val();
	if(val != '') {
		if(val.match(/^\d{3}-?\d{4}$/)) {
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}
};

// 年チェック
___formvalidate.prototype.year = function($target) {
	var reg = new RegExp(/^[0-9]+$/);
	var val = $target.val();
	if(this.isSet(val)) {
		if(val.length == 4) {
			if(reg.test(val)) {
				if(val > 1850 && val <= 2010) {
					return true;
				}else{
					return '西暦を正しく入力してください';
				}
			} else {
				return '西暦を半角数値で入力してください';
			}
		}else{
			return '西暦を4桁入力してください';
		}
	}else{
		return '西暦を入力してください';
	}
};

//月チェック
___formvalidate.prototype.month = function($target) {
	var reg = new RegExp(/^[0-9]+$/);
	var val  = $target.val();
	if(this.isSet(val)) {
		if(val.length <= 2) {
			if(reg.test(val)) {
				if(val > 0 && val <= 12) {
					return true;
				}else{
					return '月を正しく入力してください';
				}
			}else{
				return '月を半角数値で入力してください';
			}
		}else{
			return '月を入力してください';
		}
	}else{
		return '月を入力してください';
	}
};

// 日チェック
___formvalidate.prototype.day = function($target) {
	var reg = new RegExp(/^[0-9]+$/);
	var val  = $target.val();
	if(this.isSet(val)) {
		if(val.length <= 2) {
			if(reg.test(val)) {
				if(val > 0 && val <= 31) {
					return true;
				}else{
					return '日を正しく入力してください';
				}
			}else{
				return '日を半角数値で入力してください';
			}
		}else{
			return '日を入力してください';
		}
	}else{
		return '日を入力してください';
	}
};

// 卒業年月チェック
___formvalidate.prototype.graduation = function($target) {
	var reg = new RegExp(/^[0-9]+$/);
	var val = $target.val();
	var val_int = parseInt(val);
	var year = parseInt(val.split('-')[0]);
	var day = parseInt(val.split('-')[1]);
	var nowYear = parseInt(moment().format('YYYY'));
	if(this.isSet(val)) {
		if(val.indexOf('-') > 0) {
			if(reg.test(year) && reg.test(day)) {
				if((year >= nowYear && year <= 2040) && (day > 0 && day <= 12)) {
					return true;
				}else{
					return '卒業年月を正しく入力してください　例）2018-03';
				}
			}else{
				return '卒業年月を半角数値で入力してください　例）2018-03';
			}
		}else{
			return '卒業年月のハイフン（-）を半角数値で入力してください　例）2018-03';
		}
	}else{
		return '卒業年月を入力してください　例）2018-03';
	}
};

// radioボタンチェック
___formvalidate.prototype.radio = function($target) {
	var name = $target.attr('name');
	var val = $('input[name="'+ name +'"]:checked').val();
	if(val == undefined) {
		return false;
	}else{
		return true;
	}
};

// ページトップ（ページアップ）に戻る
___formvalidate.prototype.scrolltop = function() {
	$('html,body').stop().animate({scrollTop:$('.mdl-form_main').offset().top}, 0);
};

// 確認画面切り替え
___formvalidate.prototype.confirm = function() {
	this.scrolltop();
	this.$inputwrap.hide();
	this.$confirmwrap.show();
	adjustheight.set_whitebg_height();

	history.pushState('', '', this.pathname+'#confirm');
};

// 入力画面切り替え
___formvalidate.prototype.back = function() {
	this.scrolltop();
	this.$inputwrap.show();
	this.$confirmwrap.hide();
	adjustheight.set_whitebg_height();

	history.pushState('', '', this.pathname);
};
___formvalidate.prototype.validation = function() {
	var __ = this;
	var $inputList = $('[data-required="true"]');
	var length = $inputList.length;
	var isValidateOkArray = [];
	var i = 0;

	while(i < length) {
		isValidateOkArray[i] = true;
		i = (i + 1) | 0;
	}

	// 入力チェックOKフラグ
	function isValidateOk() {
		var i = 0;
		while(i < length) {
			if(!isValidateOkArray[i]) {
				return false;
				i = length;
			}
			i = (i + 1) | 0;
		}
		return true;
	}

	// エラー文言表示
	function setError($t, i, erroText) {
		isValidateOkArray[i] = false;

		// $t.addClass('is-error').find('.error-msg').show();
		$t.text(erroText).show();
	}

	// エラー文言非表示
	function rejectError($t, i) {
		isValidateOkArray[i] = true;
		// $t.removeClass('is-error').find('.error-msg').hide();
		$t.hide();
	}

	var i = 0;
	while(i < length) {

		var $selector = $($inputList[i]);
		var $errorSelector = $selector.parents('.mdl-form-inputwrap');
		var $confirmSelector = $selector.parents('.mdl-form-confirmwrap');

		// セレクトボックスチェック
		if($inputList[i].type == 'select-one') {
			if(this.selectbox($selector)) {
				rejectError($errorSelector.removeClass('is-error').find('.error-msg'), i);
			}else{
				setError($errorSelector.addClass('is-error').find('.error-msg'), i);
			}
		}

		// 添付ファイルチェック
		if($inputList[i].type == 'file') {
			if(this.file($selector)) {
				rejectError($errorSelector.removeClass('is-error').find('.error-msg'), i);
			}else{
				setError($errorSelector.addClass('is-error').find('.error-msg'), i);
			}
		}

		// テキストエリアチェック
		if($inputList[i].type == 'textarea') {
			if(this.textarea($selector)) {
				rejectError($errorSelector.removeClass('is-error').find('.error-msg'), i);
			}else{
				setError($errorSelector.addClass('is-error').find('.error-msg'), i);
			}
		}

		// ラジオボタンチェック
		if($inputList[i].type == 'radio') {
			if(this.radio($selector)) {
				rejectError($errorSelector.removeClass('is-error').find('.error-msg'), i);
			}else{
				setError($errorSelector.addClass('is-error').find('.error-msg'), i);
			}
		}

		// inputのname別チェック
		if($inputList[i].type == 'text') {
			switch($inputList[i].name) {
				case 'name':
					if(this.empty($selector)) {
						rejectError($errorSelector.removeClass('is-error').find('.error-msg'), i);
					}else{
						setError($errorSelector.addClass('is-error').find('.error-msg'), i);
					}
					break;
				case 'kana':
					var result = this.kana($selector);
					if(result === true) {
						rejectError($errorSelector.removeClass('is-error').find('.error-msg'), i);
					}else{
						setError($errorSelector.addClass('is-error').find('.error-msg'), i, result);
					}
					break;
				case 'year':
					var result = this.year($selector);
					if(result === true) {
						rejectError($errorSelector.removeClass('is-error').find('.error-msg').eq(0), i);
					}else{
						setError($errorSelector.addClass('is-error').find('.error-msg').eq(0), i, result);
					}
					break;
				case 'month':
					var result = this.month($selector);
					if(result === true) {
						rejectError($errorSelector.removeClass('is-error').find('.error-msg').eq(1), i);
					}else{
						setError($errorSelector.addClass('is-error').find('.error-msg').eq(1), i, result);
					}
					break;
				case 'day':
					var result = this.day($selector);
					if(result === true) {
						rejectError($errorSelector.removeClass('is-error').find('.error-msg').eq(2), i);
					}else{
						setError($errorSelector.addClass('is-error').find('.error-msg').eq(2), i, result);
					}
					break;
				case 'tel':
					if(this.tel($selector)) {
						rejectError($errorSelector.removeClass('is-error').find('.error-msg'), i);
					}else{
						setError($errorSelector.addClass('is-error').find('.error-msg'), i);
					}
					break;
				case 'mailaddress':
					var result = this.mailaddress($selector)
					if(result === true) {
						rejectError($errorSelector.removeClass('is-error').find('.error-msg'), i);
					}else{
						setError($errorSelector.addClass('is-error').find('.error-msg'), i, result);
					}
					break;
				case 'zipcode':
					if(this.zipcode($selector)) {
						rejectError($errorSelector.removeClass('is-error').find('.error-msg'), i);
					}else{
						setError($errorSelector.addClass('is-error').find('.error-msg'), i);
					}
					break;
				case 'address1':
					if(this.empty($selector)) {
						rejectError($errorSelector.removeClass('is-error').find('.error-msg'), i);
					}else{
						setError($errorSelector.addClass('is-error').find('.error-msg'), i);
					}
					break;
				case 'graduationdate':
					var result = this.graduation($selector);
					if(result === true) {
						rejectError($errorSelector.removeClass('is-error').find('.error-msg'), i);
					}else{
						setError($errorSelector.addClass('is-error').find('.error-msg'), i, result);
					}
					break;
				default:
					if(this.empty($selector)) {
						rejectError($errorSelector.removeClass('is-error').find('.error-msg'), i);
					}else{
						setError($errorSelector.addClass('is-error').find('.error-msg'), i);
					}
					break;
			}
		}
		i = (i + 1) | 0;
	}
	this.scrolltop();

	if(isValidateOk()) {
		console.log('isValidateOk');
		__.confirm();
	}else{
		console.log('isValidateNg');
		adjustheight.set_whitebg_height();
	}
};


___formvalidate.prototype.init = function() {
	var __ = this;
	var $formTable = $('.mdl-form-table');

	// 確認エリアにvalueを挿入
	function insetValue($t, val) {
		$t.parents('.mdl-form-list').find('.mdl-form-confirmwrap').html(val);
	}

	/* --------------
		入力要素用イベント
	-------------- */

	// セレクトボックス切り替え
	$formTable.find('select').on('change', function() {
		var $that = $(this);
		var val = $that.val();
		insetValue($that, val);
	});

	// ラジオボタン切り替え
	$('input[type="radio"]').on('change', function() {
		var $that = $(this);
		var val = $that.val();
		insetValue($that, val);
	});

	// 添付切り替え
	$('[name="file"]').on('change', function() {
		var $that = $(this);
		$that.prev().text($that[0].files[0].name);
	});

	// 生年月日切り替え
	$formTable.find('input[name="year"], input[name="month"], input[name="day"]').on('change', function() {
		var $that = $(this);
		var val = $formTable.find('input[name="year"]').val() + '年' + $formTable.find('input[name="month"]').val() + '月' + $formTable.find('input[name="day"]').val()  + '日';
		insetValue($that, val);
	});

	// 住所切り替え
	$formTable.find('input[name="zipcode"], input[name="address1"], input[name="address2"]').on('change', function() {
		var $that = $(this);
		var val =  '〒' + $formTable.find('input[name="zipcode"]').val() + '<br>' + $formTable.find('input[name="address1"]').val() + '<br>' + $formTable.find('input[name="address2"]').val();
		insetValue($that, val);
	});

	// input type="text"切り替え
	$formTable.find('input[type="text"]')
	.not('[name="year"]')
	.not('[name="month"]')
	.not('[name="day"]')
	.not('[name="zipcode"]')
	.not('[name="address1"]')
	.not('[name="address2"]')
	.on('change', function() {
		var $that = $(this);
		var val = $that.val();
		insetValue($that, val);
	});

	// XSS対策
	$('input[type="text"], textarea').keyup(function(e) {
		var reg = '[<>"\'&]';
		var $that = $(this);
		var val = $that.val();
		if(val.match(reg)){
			$that.val('')
			return false;
		}
	});

	/* --------------
		確認・戻る・送信ボタンイベント
	-------------- */

	// 確認ボタン
	$('#btn-form-confirm').on('click', function(e) {
		e.preventDefault();
		__.validation();
		// __.confirm();
	});

	// 戻るボタン
	$('#btn-form-back').on('click', function(e) {
		e.preventDefault();
		__.back();
	});

	// 送信ボタン
	$('#btn-form-submit').on('click', function(e) {
		e.preventDefault();
		if(!__.submitFlag) {
			__.submitFlag = true;
			document:form.submit();
		}else{
			alert('送信中');
		}
	});

	// 戻るボタン
	$(window).on('popstate', function() {
		if(location.hash != '#confirm') {
			__.back();
			console.log('pop hash')
		}else{
			__.validation();
			console.log('pop')
		}
		
	});
};

var F_CHECK = new ___formvalidate();
F_CHECK.init();
