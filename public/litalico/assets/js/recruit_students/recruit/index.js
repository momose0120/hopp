;(function($){
	({
		init: function() {
			var self = this;

			$(function() {
				self.accordion();
			});
		},

		accordion: function() {
			var self = this;

			var $faq = $('#faq');
			var $dt = $faq.find('.faq_list dt');
			var $dd = $faq.find('.faq_list dd');


			$dt.on('click', function() {
				$(this).parent().toggleClass('is-open');
				$(this).next().slideToggle(300);
			});
		}

	}).init();
})(jQuery);
