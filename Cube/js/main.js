(function($) {
		$(function() {

			$('ul.items-count, .items-bullet').on('click', 'li:not(.active)', function() {
			$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('div.products__carousel').find('div.products__img').fadeOut(500).removeClass('active').eq($(this).index()).addClass('active').fadeIn(500);

		var num = $('.products__img.active').index('div.products__img');
		var numNext = num + 1;

		$('.pr-count__number i').text(numNext);
	});
});
})(jQuery);
$(document).ready(function() {
			$('.touch-menu').click(function(event) {
				$('.touch-menu, .menu').toggleClass('active');
			});
			$('.car-touch-menu').click(function(event) {
				$('.car-view__menu, .car-touch-menu').toggleClass('active');
			});
			$('.sub').hover(function(event) {
				$('.sub-nav').toggleClass('active');
			});
		});