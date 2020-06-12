$(document).ready(function() {
	$('.touch-menu').click(function(event) {
		$('.touch-menu, .menu').toggleClass('active');
	});
	
	//убираем аниамцию с мобильного меню
	var wid = $(window).width();

	$(document).ready(function() {
		if (wid < 688) {
			$('.animated').ready(function() {
				event.preventDefault();
			});
			$('ul').removeClass('animated');
		};
	});

	//плавная прокрутка до блоков страницы
	$('a[data-target^="anchor"]').click(function() {
		var target = $(this).attr('href'),
			off_top = $(target).offset().top;
		$('html,body').animate({scrollTop: off_top + 100}, 1000);
		return false;
	});

	//кнопка "наверх"
	$('.scroll-up').click(function(event) {
		$('html').animate({scrollTop:0}, 1000);
	});
});

$(document).scroll( function() {
	if ($(document).scrollTop() > 600) {
		$('.scroll-up').fadeIn();
		$('.scroll-up').text('Up');
	} else {
		$('.scroll-up').fadeOut();
	}	
});
$('.scroll-up').ready(function() {
if ($(window).width() < 684) {
		$('.scroll-up').fadeOut();
	}
});