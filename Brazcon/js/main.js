$(function($) {
		$(function() {
  
  		$('div.tabs__title').on('click', 'span:not(.active)', function() {
    		$(this)
      	.addClass('active').siblings().removeClass('active')
      	.closest('div.tabs').find('div.tabs__text').removeClass('active').eq($(this).index()).addClass('active');
  });
  
});
});
$(document).ready(function ($) {
			$('.lang-current').click(function(event) {
				$('.lang-list').toggleClass('active');
			});
		});
$(document).ready(function ($) {
			$('.touch-menu').click(function(event) {
				$('.menu').toggleClass('active');
			});
		});