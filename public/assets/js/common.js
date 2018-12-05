var __g, _g = _g || {};
_g = (function() {
	var __ = this;
	this.isDebug = false;
	this.$doc = document;
	this.$win = window;
	this._a = TweenMax;
	this.$html = this.$doc.documentElement;
	this.mq = this.$win.matchMedia('(max-width:750px)');
	this.isSp = null;
	this.isIos = null;
	this.isAndroid = null;
	this.isImgLoadDone = false;

	this.loadingOption = {
		isEady: false,
		key: 'loadingKey',
		val: true,
		expire: 1
	};


	function getDevice() {
		var ua = navigator.userAgent.toLowerCase();
		__.isSp = __.mq.matches ? true : false;
		__.isIos = ua.indexOf('iphone') != -1 ? true : ua.indexOf('ipad') != -1 ? true : false;
		__.isAndroid = ua.indexOf('android') != -1 ? true : false;
		__.$html.dataset.sp = __.isSp;
		__.$html.dataset.ios = __.isIos;
		__.$html.dataset.android = __.isAndroid;
	}
	this.mq.addListener(getDevice);
	getDevice();

	this.get  = (function(){
		return {
			id: function(id) {
				return __g.$doc.getElementById(id);
			},
			class: function(cls) {
				return __g.$doc.getElementsByClassName(cls);
			},
			tag: function(tag) {
				return __g.$doc.getElementsByTagName(tag);
			},
			offset: function($target) {
				return $target.getBoundingClientRect();
			},
			isclass: function($target, cls) {
				for(var i = 0, len = $target.classList.length; i < len; i++) {
					if($target.classList[i] == cls) {
						return true;
						break;
					}
				}
			}
		}
	})();

	this.getQueryString = function() {
		var query, params, i, element, name, value;
		var result = {};
		if (__.$doc.location.search.length === 0) return result;
		query = __.$doc.location.search.substring(1);
		params = query.split('&');
		for (i = 0; i < params.length; i++) {
			element = params[i].split('=');
			name = decodeURIComponent(element[0]);
			value = decodeURIComponent(element[1]);
			result[name] = decodeURIComponent(value);
		};
		return result;
	};

	this.setCoockie = (function(name, value, expires, domain, path, secure) {
		if (!name) return;
		expires = 1;
		var str = name + "=" + escape(value);
		if (domain) {
			if (domain == 1) domain = location.hostname.replace(/^[^\.]*/, "");
			// str += "; domain=" + domain;
			str += "; domain=" + domain;
		}
		if (path) {
			if (path == 1) path = location.pathname;
			str += "; path=" + path;
		}
		if (expires) {
			var nowtime = new Date().getTime();
			expires = new Date(nowtime + (60 * 60 * 24 * 1000 * expires));
			expires = expires.toGMTString();
			str += "; expires=" + expires;
		}
		if (secure && location.protocol == "https:") {
			str += "; secure";
		}
		document.cookie = str;
	});

	this.getCookie = (function(value) {
		var COOKIE = new Array();
		if (document.cookie) {
			var cookies = document.cookie.split("; ");
			for (var i = 0; i < cookies.length; i++) {
				var str = cookies[i].split("=");
				COOKIE[str[0]] = unescape(str[1]);
			}
		}
		var rval = null;
		Object.keys(COOKIE).forEach(function(key) {
			var val = this[key];
			if(key == value) rval = val
		}, COOKIE);

		// return (rval==null?COOKIE:rval);
		return rval;
	});


	this.load = (function(){
		return {
			img: function() {
				return new Promise(function (resolve, reject) {
					var $img = __g.get.tag('img');
					var imgList = [];
					var len = $img.length;
					var count = 0;
					function loadcomplete() {
						if (++count === len) {
							resolve();
						}
					}
					if(len > 0) {
						var i = 0;
						while(i < len) {
						// for (var i = 0; i < len; ++i) {
							imgList[i] = new Image();
							imgList[i].onload = loadcomplete;
							imgList[i].onerror = loadcomplete;
							imgList[i].src = $img[i].src;
							i = (i + 1) | 0;
						}
					}else{
						resolve();
					}
				});
			},
			bg: function(callback) {
				return new Promise(function (resolve, reject) {
					var imgList = [];
					var srcList = [];
					var reg = /url\([^"].*\)/;
					var path = null;
					function loadcomplete() {
						if (++count === len) {
							resolve();
						}
					}
					var i = 0;
					while(i < __g.$doc.all.length) {
					// for(var i = 0, len = __g.$doc.all.length; i < len; i++){
						var prop = __g.$doc.defaultView.getComputedStyle( __g.$doc.all[i], null ).getPropertyValue('background').replace(/"/g, '').match(reg);
						if(prop != null) {
							path = prop[0].replace('url(', '').replace(')', '');
							if(path.indexOf('svg') < 0) srcList.push(path);
						}
						i = (i + 1) | 0;
					}
					var len = srcList.length;
					var count = 0;
					if(len > 0) {
						var i = 0;
						while(i < len) {
						// for (var i = 0; i < len; ++i) {
							imgList[i] = new Image();
							imgList[i].onload = loadcomplete;
							imgList[i].onerror = loadcomplete;
							imgList[i].src = srcList[i];
							i = (i + 1) | 0;
						}
					}else{
						resolve();
					}
				});
			}
		}
	})();

	this.event = (function(){
		var events = {}, key = 0;
		return {
			on: function(target, type, listener, capture) {
				if(__.$win.addEventListener) {
					target.addEventListener(type, listener, capture);
				}else if(__.$win.attachEvent){
					target.attachEvent('on' + type, listener);
				}
				events[key] = {
					target: target,
					type: type,
					listener: listener,
					capture: capture
				};
				return key++;
			},
			off: function(key) {
				if(key in events) {
					var e = events[key];
					if(__.$win.removeEventListener) {
						e.target.removeEventListener(e.type, e.listener, e.capture);
					}else if(__.$win.detachEvent){
						e.target.detachEvent('on' + e.type, e.listener);
					}
				}
			}
		};
	})();

	// PARALLAX
	var parallax = function(){
		this.$bplx = __.$doc.querySelectorAll('[data-plx]');
		this.bplx_targets = [];
		this.bplx_len = this.$bplx.length;
		this.ease = 'ease-out';
		this.speed = '1s';
		this.handler = null;
		this.timer = null;
		this.init();
	};
	parallax.prototype = {
		stop: function() {
			var that = this;
			var deferred = $.Deferred();
			var stop = function() {
				clearTimeout(that.timer);
				that.timer = null;
				deferred.resolve();
			}();
			return deferred.promise();
		},
		reset: function() {
			var i = 0;
			while(i < this.bplx_len) {
			// for(var i = 0; i < this.bplx_len; i++){
				if(this.bplx_targets.length != 0) this.bplx_targets[i].dom.removeAttribute('style');
				i = (i + 1) | 0;
			}
		},
		para: function(){
			var i = 0;
			while(i < this.bplx_len) {
				__g._a.to(this.bplx_targets[i].dom, 1, {
					y: (this.bplx_targets[i].top / (__.mq.matches ? (this.bplx_targets[i].buf*3) : this.bplx_targets[i].buf))
				});// this.bplx_targets[i].dom.style.transitionProperty = 'transform';// this.bplx_targets[i].dom.style.transitionDuration = this.speed;// this.bplx_targets[i].dom.style.transitionTimingFunction = this.ease;// this.bplx_targets[i].dom.style.transform = 'translate3d(0px, '+ (this.bplx_targets[i].top / this.bplx_targets[i].buf) +'px, 0px)';
				i = (i + 1) | 0;
			}
		},
		scroll: function(){
			var that = this;
			this.stop().then(function() {
				that.timer = setTimeout(function() {

					var i = 0;
					while(i < that.bplx_len) {
						var top = __.get.offset(that.$bplx[i]);
						that.bplx_targets[i] = {
							dom: that.$bplx[i],
							top: (top.top - (__.$win.innerHeight / 2)) - __.$win.pageYOffset,
							buf: parseInt(that.$bplx[i].dataset.plx)
						}
						i = (i + 1) | 0;
					}
					that.para();
				}, 1);
			});
		},
		init: function(){
			var scope = this;
			var initialize = function() {
				// if(__.mq.matches) {
				// 	__.event.off(scope.handler);
				// 	scope.handler = null;
				// 	scope.reset();
				// }else{
					scope.handler = __.event.on(window, 'scroll', (function() {
						scope.scroll();
					}), false);
					scope.scroll();
				// }
			};
			__.mq.addListener(initialize);
			initialize();
		}
	};

	this.appear = function() {
		setTimeout(function() {
			$('.is-appear').lazyload({
				// threshold: __.mq.matches ? -100 : 0,
				appear: function() {
					// this.classList.add('is-show');
					$(this).addClass('is-show').promise().done(function() {
						// console.log('done');
						$(this).find('.fade-parent, .fade-child').on('animationend webkitAnimationEnd oAnimationEnd mozAnimationEnd', function() {
							$(this).css({'transition': 'none'});
						});
					});
				}
			});

		}, 1000);
	};

	this.bgFix = function() {
		var $hexagonBg = __.$doc.getElementById('hexagonBg');
		if($hexagonBg == null) return false;
		function mv() {
			$hexagonBg.style.top = (-1 * (__.$win.pageYOffset / 30)) + 'px';
		}
		__.$win.addEventListener('scroll', mv, false);
		mv();
	};

	var easyLoading = function() {
		this.$loading = __.get.id('loading');
	};
	easyLoading.prototype = {
		init: function() {
			this.$loading.classList.add('easy');
		},
		done: function() {
			if(!__.isDebug) window.scrollTo(0, 0);
			this.$loading.classList.add('is-hide');
		}
	};

	var loading = function() {
		this.$loading = __.get.id('loading');
		this.$canvas = __.get.id('loading-img');
		this.ctx = this.$canvas.getContext('2d');
		this.srcList = [];
		this.imgList = [];
		this.counter = 0;
		this.loop_timer = null;
		this.fps = 34;
		this.isDone = false;
		this.isEasy = __.loadingOption.isEady;
		this.init();
	};
	loading.prototype = {
		load_easy: function() {
			this.$loading.classList.add('easy');
		},
		load: function() {
			var scope = this;
			var count = 0;
			var i = 0;
			this.length = scope.srcList.length;
			// for (var i = 0; i < this.length; ++i) {
			while(i < this.length) {
				scope.imgList[i] = new Image();
				scope.imgList[i].onload = loadcomplete;
				scope.imgList[i].onerror = loadcomplete;
				scope.imgList[i].src = scope.srcList[i];
				i = (i + 1) | 0;
			}
			function loadcomplete() {
				if (++count === scope.length) {
					scope.loopstart();
				}
			}
		},
		done: function() {
			if(!__.isDebug) window.scrollTo(0, 0);

			this.$loading.classList.add('is-hide');

			if(!this.isEasy) this.loopstop();

			console.log('LOADING DONE!');
			__.appear();
			__.bgFix();
			__.parallax.init();
		},
		draw: function() {
			this.ctx.drawImage(this.imgList[this.counter], 0, 0, 320, 126);
			if(this.counter < this.length-1) {
				 this.counter++;
				 this.loopstart();
			}else{
				this.loopstop();
				if(__.isImgLoadDone) {
					this.isDone = true;
					this.done();
				}else{
					this.counter = 0;
					this.loopstart();
				}

			}
		},
		loopstop: function(callback) {
			var scope = this;
			return new Promise(function (resolve, reject) {
				if(!scope.isEasy) {
					clearTimeout(scope.loop_timer);
					scope.loop_timer = null;
				}
				resolve();
			});
		},
		loopstart: function() {
			var scope = this;
			this.loop_timer = setTimeout(function() {
				scope.loopstop().then(function() {
					scope.draw();
				})
			}, 1000 / this.fps);
		},
		init: function() {
			var __ = this;
			if(this.isEasy) {
				this.load_easy();
			}else{
				for (var i = 0; i <= 149; i++) {
					this.srcList.push('/assets/img/common/' + i + '.png');
				}
				this.load();
			}
		}
	};


	this.nav = function() {
		var $btnNavTrigger = __.get.id('js-header-sp_hamburger');
		var $outer = __.get.id('nav-outer');
		var $inner = __.get.id('nav-inner');
		var $ul = $inner.firstElementChild;
		var $li = $ul.children;
		var idOpen = false;
		var scrolloption = {
			mouseWheel: true,
			tap: true,
			click: true
		};
		var scrollInstance = null;

		function open() {
			__._a.to($btnNavTrigger, .3, {
				rotation: 90,
				scale: 0,
				onComplete: function() {
					this.target.src = '/assets/img/common/header-sp_hamburger_close.png'
					__._a.to(this.target, .3, {
						scale: 1,
						delay: .4
					})
				}
			})
		}
		function close() {
			__._a.to($btnNavTrigger, .3, {
				rotation: 0,
				scale: 0,
				onComplete: function() {
					this.target.src = '/assets/img/common/header-sp_hamburger.png'
					__._a.to(this.target, .3, {
						scale: 1,
						delay: .4
					})
				}
			})
		}

		function toggles() {
			if(!idOpen) {
				if(idOpen) return false;
				idOpen = true;
				__.$html.classList.add('nav-open');
				open();
			}else{
				if(!idOpen) return false;
				__.$html.classList.remove('nav-open');
				close();
				setTimeout(function() {
					idOpen = false;
					if(scrollInstance != null) scrollInstance.scrollToElement(__.$html, 0);
				}, 400);
			}
		}
		__.mq.addListener(function() {
			// if(__.mq.matches) toggles();
		});
		scrollInstance = new IScroll($outer, scrolloption);
		$btnNavTrigger.addEventListener('click', toggles, false);
	};

	this.sns = (function($w, url) {
		return {
			fb: function() {
				var set_url = 'http://www.facebook.com/share.php?u=' + encodeURIComponent(url);
				$w.open(set_url, '', 'width=650,height=450,menubar=no,toolbar=no,scrollbars=yes');
				return false;
			},
			tw: function(txt) {
				// var set_text = txt + '\r\n' + url;
				var set_text = document.title + ' ' + location.href;
				var set_url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(set_text.replace(/%%date%%/g, "?" + (new Date).getDate())).replace(/brbr/g, "%0a");
				$w.open(set_url, '', 'width=625,height=450,menubar=no,toolbar=no,scrollbars=yes');
				return false;
			},
			line: function() {
				var set_url = 'http://line.me/R/msg/text/?' + url;
				$w.open(set_url, '', 'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes');
				return false;
			},
			lin: function() {
				var set_url = 'http://www.linkedin.com/shareArticle?mini=true&url=' + url;
				$w.open(set_url, '', 'width=650,height=450,menubar=no,toolbar=no,scrollbars=yes');
				return false;
			}
		}
	})(window, location.href);


	var __formEventsFunction = (function() {
		var $inputErea = __.get.class('inputErea');
		var $inputInner = __.get.class('input-inner');
		var $targets = [];
		if($inputInner.length == 0) return false;


		// placeholder
		function userFocus(that) {
			if(that.value == that.dataset.sentence) that.value = '';
		}
		function userBlur(that) {
			if(that.value == '' || (that.value == that.dataset.sentence)) that.value = that.dataset.sentence;
		}
		for(var i = 0, len = $inputInner.length; i < len; i++) {
			var s = $inputInner[i].querySelector('input[type="text"], input[type="email"], input[type="tel"], textarea');
			var v = (s != null ? s.value : '');
			if(s != null && v != '') {
				$targets.push(s);
				s.dataset.sentence = v;
				// console.log(v);
			}
		}
		for(var i = 0, len = $targets.length; i < len; i++){
			$targets[i].addEventListener('focus', function() {
				userFocus(this);
			}, false);
			$targets[i].addEventListener('blur', function() {
				userBlur(this);
			}, false);
		}

		// element show hide change
		function nodeDisplayCheck(that) {
			for(var i = 0, len = $inputErea.length; i < len; i++) {
				var $__s = $inputErea[i].querySelector('dl');
				if($__s.style.display == 'none') {
					$__s.parentElement.style.display = 'none';
				}else if($__s.style.display == 'table') {
					$__s.parentElement.style.display = 'block';
				}
			}
		}
		for(var i = 0, len = $inputErea.length; i < len; i++) {
			var $_s = $inputErea[i].querySelectorAll('input');
			if($_s.length > 0) {
				for(var j = 0, lenj = $_s.length; j < lenj; j++) {
					if($_s[j] != null) {
						$_s[j].addEventListener('change', function() {
							nodeDisplayCheck($inputErea[i]);
						}, false);
						nodeDisplayCheck($inputErea[i]);
					}
				}
			}
		}

		// input type file
		// for(var i = 0, len = $inputInner.length; i < len; i++) {
		// 	var $_i = $inputInner[i].querySelector('input[type="file"]');
		// 	if($_i != null) {
		// 		var element = document.createElement('div');
		// 		element.className = 'inputCover';
		// 		element.innerHTML = 'ファイル添付';
		// 		$_i.parentElement.append(element);
		// 		$_i.addEventListener('change', function() {
		// 			element.innerHTML = this.files[0].name;
		// 		}, false);
		// 	}
		// }
		$('input[type="file"]').parents('.input-inner').append('<div class="inputCover">ファイル添付</div>');
		$('input[type="file"]').on('change', function() {
			$('.inputCover').text('添付しました')
		})


		// form change by query
		// midcareer
		// graduate
		var query = __g.getQueryString().from;
		if(query != undefined) {
			// if(query == 'midcareer') __g.get.id('parts-1-2').checked = true;
			// if(query == 'graduate') __g.get.id('parts-1-1').checked = true;
			if(query == 'midcareer') $(__g.get.id('parts-1-2')).trigger('click');
			if(query == 'graduate') $(__g.get.id('parts-1-1')).trigger('click');
		}
	});

	var imageChanger = function() {
		var deviceImageChange = function() {
			var $target = __.$doc.querySelectorAll('[data-img-sp]');
			var len = $target.length;
			if(len == 0) return false;
			function change() {
				var i = 0;
				while(i < len) {
					$target[i].src = (__.mq.matches ? $target[i].dataset.imgSp : $target[i].dataset.imgPc);
					i = (i + 1) | 0;
				}
			}
			__.mq.addListener(change);
			change();
		};
		deviceImageChange();
	}();

	this.init = function() {

		if(__.getCookie(__.loadingOption.key) == null) {
			// イニシャルの処理をカットするために追加
			__.loadingOption.isEady = true;
			// __.setCoockie(__.loadingOption.key, __.loadingOption.val, __.loadingOption.expire, '', '/');
		}else{
			__.loadingOption.isEady = true;
		}
		__.loading = new loading();
		__.parallax = new parallax();
		__.nav();
		__formEventsFunction();
		console.log('画像ロード前');
		$.when(
			__.load.img(),
			__.load.bg()
		).then(function() {
			if(__.loadingOption.isEady) {
				// setTimeout(function() {
					__.loading.done();
				// }, 3000);
			}else{
				__.isImgLoadDone = true;
				if(location.search == '?debug=true' || __.isDebug) __.loading.done();
			}
			console.log('画像ロード後');
			// __.loading.done();
			// if(!__.loading.isDone) {
			// 	__.loading.done();
			// }
			// __.appear();
			// __.bgFix();
			// __.parallax.init();
		});
	};
});


var acordion = (function() {
	$('.trm-Joblist-main_listitem').on('click', function() {
		var $t = $(this)
		if(!$t.hasClass('is-open')) {
			$t.addClass('is-open').find('.trm-Joblist-main_listitem_item').stop(true).slideDown(300);
			__g._a.to($t.find('#js-joblist-plusminus'), .3, { rotation: 45 });
		}else{
			$t.removeClass('is-open').find('.trm-Joblist-main_listitem_item').stop(true).slideUp(300);
			__g._a.to($t.find('#js-joblist-plusminus'), .3, { rotation: 0 });
		}
        var elem1 = document.getElementById('js-whitebg');
        var elem2 = document.getElementById('js-whitebg-heightbase');

        if (elem1 !== null && elem2 !== null) {
            var interval_id = setInterval(function () {
                elem1.style.height = elem2.clientHeight + 'px';
            }, 1);

            setTimeout(function () {
                clearInterval(interval_id);
            }, 300);

        }

    });
});


var adjustheight, _adjustheight = (function() {
	var __ = this;

	function setParam() {

		__.$whitebg = document.getElementById('js-whitebg');
		__.$whitebgHeightbase = document.getElementById('js-whitebg-heightbase');

		// for mid-career
		__.trmlistitem = document.getElementsByClassName("trm-Joblist-main_listitem");
	}

	function bindEvent() {
		if (__.$whitebg !== null && __.$whitebgHeightbase !== null) {
			__.set_whitebg_height();
			__.set_whitebg_width();
		}
	}


	this.set_whitebg_height = function() {
		__.$whitebg.style.height = __.$whitebgHeightbase.clientHeight + 'px';
	}


	this.set_whitebg_width = function() {
		var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		if (width < 1200 && width > 750) {
			__.$whitebg.style.width = '1160px';
			__.$whitebg.style.marginLeft = '20px';
		} else {
			__.$whitebg.style.width = 'calc(100% - 10px)';
			__.$whitebg.style.marginLeft = 'auto';

			if (width > 1200) {
				__.$whitebg.style.width = 'calc(1160px + ((100% - 1200px) / 2))';
			}
		}
	}

	setParam();
	bindEvent();

});


window.addEventListener('DOMContentLoaded', function(){
	__g = new _g();
	__g.init();
	// valueChack();
	acordion();
	adjustheight = new _adjustheight();
}, false);
