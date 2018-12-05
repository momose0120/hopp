/**
 * jQueryオブジェクトの拡張
 *
 * @date 2014-01-22
 */
(function($) {
	/**
	 * userAgent判定フラグ
	 *
	 * @date 2013-02-27
	 */
	var ua = navigator.userAgent.toLowerCase();
	$.ua = {
		// Windows
		isWindows: /windows/.test(ua),
		// Mac
		isMac: /macintosh/.test(ua),
		// IE
		isIE: /msie (\d+)/.test(ua),
		// IE6
		isIE6: /msie (\d+)/.test(ua) && RegExp.$1 == 6,
		// IE7
		isIE7: /msie (\d+)/.test(ua) && RegExp.$1 == 7,
		// IE8未満
		isLtIE8: /msie (\d+)/.test(ua) && RegExp.$1 < 8,
		// IE9未満
		isLtIE9: /msie (\d+)/.test(ua) && RegExp.$1 < 9,
		// Firefox
		isFirefox: /firefox/.test(ua),
		// WebKit
		isWebKit: /applewebkit/.test(ua),
		// Chrome
		isChrome: /chrome/.test(ua),
		// Safari
		isSafari: /safari/.test(ua)&&(!/chrome/.test(ua))&&(!/mobile/.test(ua)),
		// タッチデバイス
		isTouchDevice: 'ontouchstart' in window,
		// iOS
		isIOS: /i(phone|pod|pad)/.test(ua),
		// iPhone、iPod touch
		isIPhone: /i(phone|pod)/.test(ua),
		// iPad
		isIPad: /ipad/.test(ua),
		// iPhone4
		isIPhone4: (/i(phone|pod)/.test(ua)&&window.devicePixelRatio == 2),
		// iPad3
		isIPad3: (/ipad/.test(ua)&&window.devicePixelRatio == 2),
		// Android
		isAndroid: /android/.test(ua),
		// モバイル版Android
		isAndroidMobile: /android(.+)?mobile/.test(ua)
	};



	/**
	 * ロールオーバー
	 *
	 * @date 2012-10-01
	 *
	 * @example $('.rollover').rollover();
	 * @example $('.rollover').rollover({ over: '-ov' });
	 * @example $('.rollover').rollover({ current: '_cr', currentOver: '_cr_ov' });
	 * @example $('.rollover').rollover({ down: '_click' });
	 */
	$.fn.rollover = function(options) {
		var defaults = {
			over: '_ov',
			current: null,
			currentOver: null,
			down: null
		};
		var settings = $.extend({}, defaults, options);
		var over = settings.over;
		var current = settings.current;
		var currentOver = settings.currentOver;
		var down = settings.down;
		return this.each(function() {
			var src = this.src;
			var ext = /\.(gif|jpe?g|png)(\?.*)?/.exec(src)[0];
			var isCurrent = current && new RegExp(current + ext).test(src);
			if (isCurrent && !currentOver) return;
			var search = (isCurrent && currentOver) ? current + ext : ext;
			var replace = (isCurrent && currentOver) ? currentOver + ext : over + ext;
			var overSrc = src.replace(search, replace);
			new Image().src = overSrc;
			$(this).mouseout(function() {
				this.src = src;
			}).mouseover(function() {
				this.src = overSrc;
			});

			if (down) {
				var downSrc = src.replace(search, down + ext);
				new Image().src = downSrc;
				$(this).mousedown(function() {
					this.src = downSrc;
				});
			}
		});
	};



	/**
	 * フェードロールオーバー
	 *
	 * @date 2012-11-21
	 *
	 * @example $('.faderollover').fadeRollover();
	 * @example $('.faderollover').fadeRollover({ over: '-ov' });
	 * @example $('.faderollover').fadeRollover({ current: '_cr', currentOver: '_cr_ov' });
	 */
	$.fn.fadeRollover = function(options) {
		var defaults = {
			over: '_ov',
			current: null,
			currentOver: null
		};
		var settings = $.extend({}, defaults, options);
		var over = settings.over;
		var current = settings.current;
		var currentOver = settings.currentOver;
		return this.each(function() {
			var src = this.src;
			var ext = /\.(gif|jpe?g|png)(\?.*)?/.exec(src)[0];
			var isCurrent = current && new RegExp(current + ext).test(src);
			if (isCurrent && !currentOver) return;
			var search = (isCurrent && currentOver) ? current + ext : ext;
			var replace = (isCurrent && currentOver) ? currentOver + ext : over + ext;
			var overSrc = src.replace(search, replace);
			new Image().src = overSrc;

			$(this).parent()
			.css('display','block')
			.css('width',$(this).attr('width'))
			.css('height',$(this).attr('height'))
			.css('background','url("'+overSrc+'") no-repeat');

			$(this).parent().hover(function() {
				$(this).find('img').stop().animate({opacity: 0}, 200);
			}, function() {
				$(this).find('img').stop().animate({opacity: 1}, 200);
			});
		});
	};



	/**
	 * スムーズスクロール
	 *
	 * @date 2014-01-22
	 *
	 * @example $.scroller();
	 * @example $.scroller({ hashMarkEnabled: true });
	 * @example $.scroller({ noScrollSelector: '.no-scroll' });
	 * @example $.scroller('#content');
	 * @example $.scroller('#content', { pitch: 20, delay: 5, adjustEnd: 200, callback: function(){} });
	 */
	$.scroller = function() {
		var self = arguments.callee.prototype;
		if (!arguments[0] || typeof arguments[0] == 'object') {
			self.init.apply(self, arguments);
		} else {
			self.scroll.apply(self, arguments);
		}
	};

	// プロトタイプにメンバを定義
	$.scroller.prototype = {
		// 初期設定
		defaults: {
			hashMarkEnabled: false,
			noScrollSelector: '.noscroll',
			pitch: 10,
			delay: 10,
			adjustEnd: 0,
			callback: function() {}
		},

		// 初期化
		init: function(options) {
			var self = this;
			var settings = this.settings = $.extend({}, this.defaults, options);
			$('a[href^="#"]').not(settings.noScrollSelector).each(function() {
				var hash = this.hash || '#';
				$(this).click(function(e) {
					e.preventDefault();
					this.blur();
					self.scroll(hash);
				});
			});
		},

		// スクロールを実行
		scroll: function(id, options) {
			if (this.timer) this.clearScroll();
			var settings = (options) ? $.extend({}, this.defaults, options) : (this.settings) ? this.settings : this.defaults;
			if (!settings.hashMarkEnabled && id == '#') return;
			var self = this;
			var win = window;
			var $win = $(win);
			var d = document;
			var pitch = settings.pitch;
			var delay = settings.delay;
			var scrollLeft = $win.scrollLeft();
			if (($.ua.isIPhone || $.ua.isAndroidMobile) && win.pageYOffset === 0) win.scrollTo(scrollLeft, (($.ua.isAndroidMobile) ? 1 : 0));
			var scrollEnd = (id == '#') ? 0 : $(id + ', a[name="' + id.substr(1) + '"]').eq(0).offset().top;
			var windowHeight = ($.ua.isAndroidMobile) ? Math.ceil(win.innerWidth / win.outerWidth * win.outerHeight) : win.innerHeight || d.documentElement.clientHeight;
			var scrollableEnd = $(d).height() - windowHeight;
			if (scrollableEnd < 0) scrollableEnd = 0;
			scrollEnd = scrollEnd - settings.adjustEnd;
			if (scrollEnd > scrollableEnd) scrollEnd = scrollableEnd;
			if (scrollEnd < 0) scrollEnd = 0;
			scrollEnd = Math.floor(scrollEnd);

			if ($.ua.isAndroid && scrollEnd === 0) scrollEnd = 1;
			var dir = (scrollEnd > $win.scrollTop()) ? 1 : -1;
			(function() {
				var callee = arguments.callee;
				var prev = self.prev;
				var current = self.current || $win.scrollTop();
				if (current == scrollEnd || typeof prev == 'number' && (dir > 0 && current < prev || dir < 0 && current > prev)) {
					self.clearScroll();
					settings.callback();
					return;
				}
				var next = current + (scrollEnd - current) / pitch + dir;
				if (dir > 0 && next > scrollEnd || dir < 0 && next < scrollEnd) next = scrollEnd;
				win.scrollTo(scrollLeft, next);
				self.prev = current;
				self.current = next;
				self.timer = setTimeout(function() {
					callee();
				}, delay);
			})();
		},

		// スクロールを解除
		clearScroll: function() {
			clearTimeout(this.timer);
			this.timer = null;
			this.prev = null;
			this.current = null;
		}
	};

	/**
	 * orientationchangeに関するイベントハンドラ登録用メソッド
	 *
	 * @date 2011-05-30
	 *
	 * @example $(window).orientationchange(function() { alert(window.orientation); });
	 * @example $(window).portrait(function() { alert(window.orientation); });
	 * @example $(window).landscape(function() { alert(window.orientation); });
	 */
	var type = ($.ua.isAndroid) ? 'resize' : 'orientationchange';
	$.fn.extend({
		// オリエンテーションチェンジ
		orientationchange: function(fn) {
			return this.bind(type, fn);
		},
		// ポートレイト
		portrait: function(fn) {
			return this.bind(type, function() {
				if (window.orientation === 0) fn();
			});
		},
		// ランドスケープ
		landscape: function(fn) {
			return this.bind(type, function() {
				if (window.orientation !== 0) fn();
			});
		}
	});



	/**
	 * script要素のsrc属性を利用して指定したファイル名のルートにあたるパスを取得
	 *
	 * @date 2011-06-20
	 *
	 * @example $.getScriptRoot('common/js/base.js');
	 */
	$.getScriptRoot = function(filename) {
		var elms = document.getElementsByTagName('script');
		for (var i = elms.length - 1; i >= 0; i--) {
			var src = elms[i].src;
			if (new RegExp('(.*)?' + filename + '([\?].*)?').test(src)) return RegExp.$1;
		}
		return false;
	};



	/**
	 * script要素のsrc属性からオブジェクトに変換したクエリを取得
	 *
	 * @date 2011-06-20
	 *
	 * @example $.getScriptQuery();
	 * @example $.getScriptQuery('common/js/base.js');
	 */
	$.getScriptQuery = function(filename) {
		var elms = document.getElementsByTagName('script');
		if (!filename) {
			return $.getQuery(elms[elms.length - 1].src);
		} else {
			for (var i = elms.length - 1; i >= 0; i--) {
				var src = elms[i].src;
				if (new RegExp(filename).test(src)) return $.getQuery(src);
			}
			return false;
		}
	};



	/**
	 * 文字列からオブジェクトに変換したクエリを取得
	 *
	 * @date 2011-05-30
	 *
	 * @example $.getQuery();
	 * @example $.getQuery('a=foo&b=bar&c=foobar');
	 */
	$.getQuery = function(str) {
		if (!str) str = location.search;
		str = str.replace(/^.*?\?/, '');
		var query = {};
		var temp = str.split(/&/);
		for (var i = 0, l = temp.length; i < l; i++) {
			var param = temp[i].split(/=/);
			query[param[0]] = decodeURIComponent(param[1]);
		}
		return query;
	};



	/**
	 * 画像をプリロード
	 *
	 * @date 2012-09-12
	 *
	 * @example $.preLoadImages('/img/01.jpg');
	 */
	var cache = [];
	$.preLoadImages = function() {
		var args_len = arguments.length;
		for (var i = args_len; i--;) {
			var cacheImage = document.createElement('img');
			cacheImage.src = arguments[i];
			cache.push(cacheImage);
		}
	};



	/**
	 * スクロール時に画像を遅延表示
	 *
	 * @date 2013-08-08
	 *
	 * @example $.scrollDisplay();
	 * @example $.scrollDisplay({duration: 2000, posFix: 200});
	 */
	$.fn.scrollDisplay = function(options) {
		var defaults = {
			duration: 1000,
			easing: 'easeInOutQuart',
			posFix: 100
		};
		options = $.extend(defaults, options);
		return this.each(function() {
			var win = window;
			var obj = $(this);
			var length = obj.length;
			var pos = [];

			var func = {
				init: function() {
					obj.not('.faded').css({opacity: 0});

					for (var i=0; i<length; i++) {
						var posY = obj.eq(i).offset().top;
						pos.push(posY);
					}
					func.scroll();
				},

				scroll: function() {
					var scrollTop  = $(win).scrollTop();
					var windowBottom = $(win).height() + scrollTop - defaults.posFix;

					for (var i=0; i<obj.length; i++) {
						if (pos[i] <= windowBottom) {
							func.fadeIn(i);
						}
					}
				},

				fadeIn: function(i) {
					if ( !obj.eq(i).hasClass('faded') ) {
						obj.eq(i).animate({opacity: 1}, defaults.duration, defaults.easing).addClass('faded');
					}
				}

			};

			func.init();

			$(win).scroll(function() {
				func.scroll();
			});
		});
	};

	/**
	 * 高さ揃え
	 *
	 * @date 2013-08-08
	 *
	 * @example $('#itemList').heightAlign();
	 * @example $('#itemList').heightAlign({ target: 'li' });
	 * @example $('#itemList').heightAlign({ target: 'li', base: 'ul' });　※各 <ul> ごとに <li> の高さを揃える
	 * @example $('#itemList').heightAlign({ target: 'li', col: 5 });　※個数ごとに <li> の高さを揃える（1行分の数など）
	 */
	$.fn.heightAlign = function(options) {
		var _this = this;

		var defaults = {
			target: 'a',
			base: null,
			col: 0
		};

		var settings = $.extend({}, defaults, options);

		// 高さを調べて揃える
		var setHeight = function(elm){
			var maxHeight = 0,
				imgElm = elm.find('img'),
				imgCnt = imgElm.length,
				loadChkSpan = 20,
				loadWait = 1000,
				waiting = 0;

			imgElm.on('load', function(){ imgCnt--; });

			var loadCheckTimer = setInterval(function(){
				if(imgCnt === 0 || waiting > loadWait){
					clearTimeout(loadCheckTimer);

					elm.each(function(){
						if($(this).height() > maxHeight){
							maxHeight = $(this).height();
						}
					});
					elm.css('height', maxHeight);
				} else {
					waiting = waiting + loadChkSpan;
				}
			}, loadChkSpan);
		};

		// 要素を個数ごと（行ごと）に小分け　→ 高さを調べて揃える
		var setHeightByRow = function(elms){
			var rows = [],
				temp = [];

			elms.each(function(i){
				temp.push(this);
				if(i % settings.col == (settings.col - 1)){
					rows.push(temp);
					temp = [];
				}
			});
			if(temp.length) rows.push(temp);

			$.each(rows, function(){
				setHeight($(this));
			});
		};

		// 処理 振り分け
		if(settings.base){
			$(_this).find(settings.base).each(function(){
				if(settings.col > 1){
					setHeightByRow($(this).find(settings.target));
				} else {
					setHeight($(this).find(settings.target));
				}
			});

		} else {
			if(settings.col > 1){
				setHeightByRow($(_this).find(settings.target));
			} else {
				setHeight($(_this).find(settings.target));
			}
		}

		return this;
	};

	/**
	 * スプライトシートアニメーション
	 *
	 * @date 2014-06-13
	 *
	 * @example $('#anime').spriteAnime({frameHeight: 115, maxFrame: 11, speed: 100, repeat: 2, interval:3000 }); //　1フレームの高さ115pxで11コマのスプライトアニメ画像を、「200ミリ秒で2回リピート」を3秒毎に実行
	 * @example $('#anime').spriteAnime({frameHeight: 115, maxFrame: 11}); //　インターバルなしで無限リピート
	 * @example $('#anime').spriteAnime({frameHeight: 115, maxFrame: 11, infinite: false }); //　アニメーションを一回のみ
	 *
	 */
	$.fn.spriteAnime = function(options) {
		var _this = this;

		var defaults = {
			frameHeight: 50, // アニメーション画像 1コマの高さ
			maxFrame: 10, // アニメーション総コマ数
			speed: 100, // 1コマの切り替え速度
			repeat: 0, // アニメーション1セットの繰り返す
			infinite: true, // アニメーション+リピート回数の無限リピート
			interval: 0 // 無限リピートの間隔

		};

		options = $.extend(defaults, options);

		var defPos = 0;
		var frame = 0;
		var repeatCount = options.repeat - 1;

		var spriteAnimePlay = function(){
			// アニメーション　1セット
			if(frame != options.maxFrame) {
				var timerSpriteAnime = setTimeout(function(){
					if(defPos < options.frameHeight*(options.maxFrame-1)) {
						defPos = defPos+options.frameHeight;
					} else {
						if (options.infinite) {
							defPos = 0;
						} else if (repeatCount > 0) {
							defPos = 0;
						}
					}
					_this.css({'background-position': '0 '+'-'+ defPos + 'px'});
					frame++;
					spriteAnimePlay();
				},options.speed);

			// アニメーション　1セットのリピート
			} else if (repeatCount > 0) {
				frame = 0;
				repeatCount--;
				spriteAnimePlay();

			// アニメーション全体のリピート
			} else {
				frame = 0;
				repeatCount = options.repeat - 1;
				if (options.repeat > 0) _this.css({'background-position': '0 0'});
				setTimeout(function(){
					if (options.infinite) {
						spriteAnimePlay();
					}
				},options.interval);

			}
		};

		spriteAnimePlay();

		return this;
	};

})(jQuery);


/**
 * 初期設定
 *
 * @date 2013-11-25
 */
(function($) {
	({
		// 初期化
		init: function() {
			var self = this;

			$.siteRoot = $.getScriptRoot('assets/js/common/base.js');
			$(function() {
				$.scroller();
				self.uiSpnav();
				self.pagetopAnime();
				self.charAnime();
				// if ($.ua.isAndroid || $.ua.isAndroidMobile) {
					// self.trimmingSp();
				// }
			});
			if ($.ua.isIE6) this.pngfix.init();
			if ($.ua.isLtIE9) this.alphaPng();
			if ($.ua.isLtIE9) this.html5shiv();
		},

		// スマホ用グロナビ制御
		uiSpnav: function(){
			var self = this;
			var $body = $('body');
			var $hdr = $('#hdr-sp');
			var $menu = $('.hdr-sp-menu');
			var $btn = $('#hdr-sp-btn');
			var $close = $('#hdr-sp-menu-close');
			var $cnts = $('#sp-cnts');
			var state = 'close';

			$btn.on('click', function() {
				if (state == 'close') {
					state = 'open';
					$body.addClass('hdr-sp-menu_open');
					$cnts.hide();
					$(this).addClass('hdr-sp-menu_open');
					$hdr.addClass('hdr-sp-menu_open');
					$menu.fadeIn(250);
				} else {
					state = 'close';
					$body.removeClass('hdr-sp-menu_open');
					$menu.hide();
					$cnts.fadeIn(250);
					$(this).removeClass('hdr-sp-menu_open');
					$hdr.removeClass('hdr-sp-menu_open');
				}
			});

			$close.on('click', function() {
				$btn.trigger('click');
			});
		},

		// android用サムネイルのトリミング処理
		trimmingSp: function() {
			var self = this;

			var $spNewsImg = $('.article-list').find('figure');
			var $spIndexImg = $('.cnts-index').find('figure');

			$spNewsImg.css('overflow', 'auto');
			$spIndexImg.css('overflow', 'auto');
		},

		// ページトップアニメ
		pagetopAnime: function(){
			var self = this;
			var conf = this.conf;

			var defPos = 0;
			var hitLoopCnt = 0;
			var downLoopCnt = 0;
			var timerDown;
			var timerHover;
			var timerHit;

			var $pagetTop = $('#pagetop');
			var $charJumpFtr = $('#charJumpFtr');


			var autoPlayHit = function(){
				timerHit = setTimeout(function(){
					if(defPos < 57*13) {
						defPos = defPos+57;
					} else {
						defPos = 0;
					}

					$charJumpFtr.css({
						'background-position': '0 '+'-'+ defPos + 'px'
					});

					if (hitLoopCnt != 8) {
						autoPlayHit();
					} else {
						hitLoopCnt = 0;
					}
				},50);

				hitLoopCnt++;
			};

			var autoPlayDown = function(){
				timerDown = setTimeout(function(){
					if(defPos < 57*4) {
						defPos = defPos+57;
					}

					$charJumpFtr.css({
						'background-position': '0 '+'-'+ defPos + 'px'
					});

					if (downLoopCnt != 4) {
						autoPlayDown();
					} else {
						downLoopCnt = 0;
						$charJumpFtr.css({
							'background-position': '0 -171px'
						});
					}
				},50);

				downLoopCnt++;
			};

			$pagetTop.find('a').hover(function() {
				timerHover = setTimeout(function(){
					autoPlayDown();
				},100);
			}, function() {
				clearTimeout(timerDown);
				clearTimeout(timerHover);
				downLoopCnt = 0;
				defPos = 0;
				$charJumpFtr.css({
					'background-position': '0 0'
				});
			});


			$pagetTop.find('a').click(function() {
				defPos = 228;
				autoPlayHit();
				clearTimeout(timerDown);

				setTimeout(function(){
					$pagetTop.addClass('pagetopHit');

					setTimeout(function(){
						$.scroller('#wrap');

						setTimeout(function(){
							$charJumpFtr.css({ 'background-position': '0 0'	});
							$pagetTop.removeClass('pagetopHit');
							defPos = 0;
							clearTimeout(timerHit);
						},300);
					},100);
				},100);

			});

		},

		// キャラクターアニメーション
		charAnime: function(){
			var self = this;

			var $roller = $('.ftr-btm > .char-roller');
			var $hat = $('.ftr-btm > .char-hat');

			// 画像プリロード
			$.preloadImages = function(){
				for(var i = 0; i<arguments.length; i++){
					$("<img>").attr("src", arguments[i]);
				}
			};
			$.preloadImages("/assets/img/character/char-roller_blue2.png");

			var autoPlayRoller = function(){
				setTimeout(function(){
					$roller.spriteAnime({ frameHeight: 41, maxFrame: 10, infinite: false }).animate({ marginLeft: 0 }, 4000, function() {
							$roller.css('background-image','url(/assets/img/character/char-roller_blue2.png)');
						setTimeout(function(){
							$roller.spriteAnime({ frameHeight: 41, maxFrame: 10, infinite: false }).animate({ marginLeft: -311 }, 4000, function(){
								$roller.css('background-image','url(/assets/img/character/char-roller_blue.png)');
							});
						},2000);
					});
				});

				setTimeout(function(){
					autoPlayRoller();
				},14000);
			};

			var autoPlayHat = function(){
				setTimeout(function(){
					$hat.spriteAnime({ frameHeight: 41, maxFrame: 10, repeat: 5, infinite: false })
					.animate({ marginLeft: -418 }, 5100, 'linear',function(){
						setTimeout(function(){
							$hat.spriteAnime({ frameHeight: 41, maxFrame: 10, repeat: 5, infinite: false }).animate({ marginLeft: -518 }, 5200, 'linear', function(){
								setTimeout(function(){
									autoPlayHat();
								},3000);
							});
						},2000);
					});
				});
			};

			autoPlayRoller();
			autoPlayHat();

		},

		// PNG Fix
		pngfix: {
			// 設定
			belatedPNG: 'assets/lib/DD_belatedPNG/DD_belatedPNG.js',
			belatedPNGSelector: '.belatedpng',
			ifixpng: 'assets/lib/ifixpng/jquery.ifixpng2.js',
			ifixpngPixel: 'assets/lib/ifixpng/pixel.gif',
			ifixpngSelector: 'img[src$=".png"], input[src$=".png"]',
			noPNGFixSelector: '.nopngfix',
			rolloverSelector: '.rollover',

			// 初期化
			init: function() {
				var self = this;
				this.load();
				$(function() {
					self.fix();
				});
			},

			// 読み込み
			load: function() {
				var d = document;
				var siteRoot = $.siteRoot;
				var src = [
					'<script type="text/javascript" src="' + siteRoot + this.belatedPNG + '"></script>',
					'<script type="text/javascript" src="' + siteRoot + this.ifixpng + '"></script>'
				].join('');
				d.open();
				d.write(src);
				d.close();
			},

			// 実行
			fix: function() {
				DD_belatedPNG.fix(this.belatedPNGSelector);
				$.ifixpng($.siteRoot + this.ifixpngPixel);
				$(this.ifixpngSelector).not(this.noPNGFixSelector).ifixpng().filter(this.rolloverSelector).mouseout(function() {
					$(this).ifixpng();
				}).mouseover(function() {
					$(this).ifixpng();
				});
			}
		},

		// アルファPNG半透明化
		alphaPng: function(){
			var selector='.alpha';
			var d = document;
			var siteRoot = $.siteRoot;
			var src = '<script type="text/javascript" src="' + siteRoot + 'assets/lib/jquery/jquery.belatedPNG.js' + '"></script>';
			d.open();
			d.write(src);
			d.close();

			$(function() {
				$(selector+'[src$=".png"]').fixPng();
			});
		},

		// html5shiv
		html5shiv: function() {
			var d = document;
			var siteRoot = $.siteRoot;
			d.open();
			d.write('<script type="text/javascript" src="' + siteRoot + 'assets/lib/html5shiv/html5shiv.js' + '"></script>');
			d.close();
		}
	}).init();
})(jQuery);
