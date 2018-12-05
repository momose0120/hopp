;(function($){

	var $win = $(window);
	var scrollTop = $win.scrollTop();

	({
		init: function() {
			var self = this;
			var conf = this.conf;

			$(function(){
				self.ipadCssHack();
				self.menuUi.init();
				self.controlCookie();
			});

			$win.setBreakpoints({
				distinct: true,
				breakpoints: [
				320,
				768
				]
			});

			$win.on('enterBreakpoint320',function() {

			});

			$win.on('enterBreakpoint768',function() {
				self.parallaxBg.init();
			});
		},
		
		controlCookie: function() {
			var parameter = $(location).attr('search') === "" ? null : $(location).attr('search').match(/(general|professional|corporate)/g)[0];
			var cookie = Cookies.get('filter');
			var pathname = window.location.pathname;

			if (!pathname.match('people')) {
				Cookies.remove('filter');
			}
			else if (pathname.match('people') && !cookie) {
				if (parameter === 'general') {
					Cookies.set('filter', 'general');
				}
				else if (parameter === 'professional') {
					Cookies.set('filter', 'professional');
				}
				else if (parameter === 'corporate') {
					Cookies.set('filter', 'corporate');
				}
			}
		},

		ipadCssHack: function() {
			var self = this;

			if ($.ua.isIPad) $('body').addClass('is-ipad');
		},

		menuUi: {
			init: function() {
				var self = this;

				self.$btn = $('#hamburgerBtn');
				self.$drawer = $('#drawer');
				self.$gnav = self.$drawer.find('.gnav');

				self.btnHandle();
			},

			btnHandle: function() {
				var self = this;

				self.$btn.on('click', function() {
					$('body').toggleClass('is-opened');
					if ($('body').hasClass('is-opened')) {
						TweenMax.from(self.$gnav, 0.24, { y: 10, delay: 0.1, alpha: 0});
					}
				});
			}
		},

		parallaxBg: {
			init: function() {
				var self = this;

				if (!$('#parallaxGeometrys').html()) self.prependStr();
				self.setting();
				self.handler();
				self.geoFadeIn();
			},

			prependStr: function() {
				var self = this;
				var topStr = '<div class="parallaxGeometrys" id="parallaxGeometrys"><div class="_inner"><div class="parallaxGeometry parallaxGeometry-01" id="parallaxGeometry-01"><div class="_inner"><div class="parallaxGeometry_geo parallaxGeometry_geo-01"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-02"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-03"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-04"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-05"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-06"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-07"></div></div></div><div class="parallaxGeometry parallaxGeometry-02" id="parallaxGeometry-02"><div class="_inner"><div class="parallaxGeometry_geo parallaxGeometry_geo-01"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-02"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-03"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-04"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-05"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-06"></div></div></div><div class="parallaxGeometry parallaxGeometry-03" id="parallaxGeometry-03"><div class="_inner"><div class="parallaxGeometry_geo parallaxGeometry_geo-02"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-04"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-05"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-06"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-07"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-08"></div></div></div><div class="parallaxGeometry parallaxGeometry-04" id="parallaxGeometry-04"><div class="_inner"><div class="parallaxGeometry_geo parallaxGeometry_geo-01"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-03"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-04"></div></div></div><div class="parallaxGeometry parallaxGeometry-05" id="parallaxGeometry-05"><div class="_inner"><div class="parallaxGeometry_geo parallaxGeometry_geo-01"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-02"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-03"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-04"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-05"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-06"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-07"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-08"></div></div></div><div class="parallaxGeometry parallaxGeometry-06" id="parallaxGeometry-06"></div><div class="parallaxGeometry parallaxGeometry-left" id="parallaxGeometry-left"><div class="_inner"><div class="_group _group-01"><div class="parallaxGeometry_geo parallaxGeometry_geo-01"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-02"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-03"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-04"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-05"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-06"></div></div></div></div><div class="parallaxGeometry parallaxGeometry-right" id="parallaxGeometry-right"><div class="_inner"><div class="_group _group-01"><div class="parallaxGeometry_geo parallaxGeometry_geo-01"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-02"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-03"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-04"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-05"></div></div></div></div></div></div>';
				var secondStr = '<div class="parallaxGeometrys" id="parallaxGeometrys"><div class="_inner"><div class="parallaxGeometry parallaxGeometry-01" id="parallaxGeometry-01"></div><div class="parallaxGeometry parallaxGeometry-02" id="parallaxGeometry-02"></div><div class="parallaxGeometry parallaxGeometry-03" id="parallaxGeometry-03"></div><div class="parallaxGeometry parallaxGeometry-04" id="parallaxGeometry-04"></div><div class="parallaxGeometry parallaxGeometry-05" id="parallaxGeometry-05"></div><div class="parallaxGeometry parallaxGeometry-06" id="parallaxGeometry-06"></div><div class="parallaxGeometry parallaxGeometry-07" id="parallaxGeometry-07"></div><div class="parallaxGeometry parallaxGeometry-left" id="parallaxGeometry-left"><div class="_inner"><div class="_group _group-01"><div class="parallaxGeometry_geo parallaxGeometry_geo-01"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-02"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-03"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-04"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-05"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-06"></div></div></div></div><div class="parallaxGeometry parallaxGeometry-right" id="parallaxGeometry-right"><div class="_inner"><div class="_group _group-01"><div class="parallaxGeometry_geo parallaxGeometry_geo-01"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-02"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-03"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-04"></div><div class="parallaxGeometry_geo parallaxGeometry_geo-05"></div></div></div></div></div></div>';

				if ($('body').attr('id') !== 'top') {
					$('#wrap').prepend(secondStr);
				} else {
					$('#wrap').prepend(topStr);
				}
			},

			setting: function() {
				var self = this;

				self.$geos = $('#parallaxGeometrys');
				self.$geosAll = self.$geos.find('.parallaxGeometry');
				self.$geos01 = $('#parallaxGeometry-01');
				self.$geos02 = $('#parallaxGeometry-02');
				self.$geos03 = $('#parallaxGeometry-03');
				self.$geos04 = $('#parallaxGeometry-04');
				self.$geos05 = $('#parallaxGeometry-05');
				self.$geos06 = $('#parallaxGeometry-06');
				self.$geosLefts = $('#parallaxGeometry-left').find('._inner');
				self.$geosLeft01 = self.$geosLefts.find('._group-01');
				self.$geosRights = $('#parallaxGeometry-right').find('._inner');
				self.$geosRight01 = self.$geosRights.find('._group-01');

				self.$geo = self.$geos.find('.parallaxGeometry_geo');

				self.geosTop01 = self.$geos01.offset().top;
				self.geosTop02 = self.$geos02.offset().top;
				self.geosTop03 = self.$geos03.offset().top;
				self.geosTop04 = self.$geos04.offset().top;
				self.geosTop05 = self.$geos05.offset().top;
				self.geosTop06 = self.$geos06.offset().top;

				TweenMax.set([
					self.$geos01,
					self.$geos02,
					self.$geos03,
					self.$geos04,
					self.$geos05,
					self.$geos06,
					self.$geosLeft01,
					self.$geosRight01
					], { z: 1});
			},

			handler: function() {
				var self = this;

				$win.on('scroll load resize', function() {
					scrollTop = $win.scrollTop();

					self.geoTop01 = -(scrollTop/2);
					self.geoTop02 = -(scrollTop/2);
					self.geoTop03 = -(scrollTop/2);
					self.geoTop04 = -(scrollTop/2);
					self.geoTop05 = -(scrollTop/6);
					self.geoTop06 = -(scrollTop/8);

					TweenMax.set(self.$geos01, { y: self.geoTop01 });
					TweenMax.set(self.$geos02, { y: self.geoTop02 });
					TweenMax.set(self.$geos03, { y: self.geoTop03 });
					TweenMax.set(self.$geos04, { y: self.geoTop04 });
					TweenMax.set(self.$geos05, { y: self.geoTop05 });
					TweenMax.set(self.$geos06, { y: self.geoTop06 });

					TweenMax.to([
						self.$geosLeft01,
						self.$geosRight01
						], 1.5,{ y: -(scrollTop/6), ease:Power1.easeOut });
				});

			},

			geoFadeIn: function() {
				var self = this;

				TweenMax.from(self.$geosAll, 0.8, { y: 5, ease:Cubic.easeInOut});
				TweenMax.to(self.$geosAll, 0.8, {autoAlpha: 1, ease:Cubic.easeInOut});
			}
		}

	}).init();
})(jQuery);
