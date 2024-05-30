$(document).ready(function() {
	$('.testimonials-slider_video, .testimonials-slider_text').slick({
        arrows:true,
        dots:true,
        slidesToShow:1,
        autoplay:false,
        speed:200,
        centerMode: true,
     	variableWidth: true,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:3,
                    arrows:false
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow:1,
                     arrows:false
                }
            }
        ]
    });
	$('.doctor-slider, .equipment-slider').slick({
		arrows:true,
        dots:true,
        slidesToShow:1,
        autoplay:false,
        speed:200
	});
	$('.fancybox').fancybox();

    $('.deprt-select').niceSelect();
    $('.deprt-select-modal').niceSelect();
  

    $('.touch-menu').click(function(event) {
		$('.touch-menu, .menu').toggleClass('active');
	});

	$('.menu.active a').click(function() {

	});

    if ($(window).width() <= 1024) {
			$('.hero .btn-green').clone().appendTo('.menu');
			$('footer .social').clone().appendTo('.menu');
			$('.menu .social').css("margin", "0");
		}

	$(window).resize(function() {
		if ($(window).width() > 1024) {
			$('.menu .btn-green').remove();
			$('.menu .social').remove();
		}
	});
    
/// анимация блока how-it-works
    $(document).scroll (function() {
    	let line = $('.line');
    	let lineHeight = $('.line-wrap').height();
    	let scroll = $(document).scrollTop();
    	let offset = ($('.stages').offset().top - ($(window).height()));
    	let offsetOrig = $('.stages').offset().top;
    	let qwer = scroll - offsetOrig+($(window).height());

    	if (scroll === offset||scroll < offsetOrig - ($(window).height()-lineHeight)) {
    		line.css({ "height": qwer + "px"});
    	}   else {
    		line.css({ "height": lineHeight + "px"});
    	};
    	if (line.height() === lineHeight) {
    		line.css({ "height": lineHeight + "px"});
    	}

    	let lineHrz = $('.stage-line_hrz__body_fill');
    	for (var i = 0; i < lineHrz.length; i++) {
    		let itemHrz = lineHrz[i];
    		let scroll = $(document).scrollTop();
    		let itemHrzOffset = $(itemHrz).offset().top;

    		if (scroll > itemHrzOffset - ($(window).height()-120)) {
    			$(itemHrz).css({ "width": "100%"});
    		}
    	}

/// фиксация хедера при скроле
    	if ($(document).scrollTop() > 128) {
			$('.header').addClass('fixed');
			$('.wrapper').css("padding-top", "128px");
			$('.touch-menu').css("top", "24px");
		} else {
			$('.header').removeClass('fixed')
			$('.wrapper').css("padding-top", "0");
			$('.touch-menu').css("top", "48px");
		}
		if ($(window).width() < 575) {
			$('.touch-menu').css("top", "33px");
				if ($(document).scrollTop() > 128) {
					$('.touch-menu').css("top", "24px");
				}
		}
    });

 //плавная прокрутка до блоков страницы
	$('a[data-target^="anchor"]').click(function() {
		var target = $(this).attr('href'),
			off_top = $(target).offset().top;
		$('html,body').animate({scrollTop: off_top}, 1000);
		if ($('.menu').hasClass('active')) {
		$('.menu').removeClass('active');
		$('.touch-menu').removeClass('active');
		}
		return false;
	});

/// выбор телефона
		$('.tel__icon').click(function() {
			$('.tel-select__body').toggleClass('active')
		});

		$(document).click(function(e) {

			if (!$(e.target).hasClass('active')&&
				$(e.target).parents(".tel-select__header").length === 0) {
				$('.tel-select__body').removeClass('active')
			}
		});

/// табы слайдера
	$('.js-view').click(function() {
		$(this).addClass('active');

		if ($(this).has('.active')) {
			$('.js-read').removeClass('active');
			$('.testimonials-slider_video').addClass('active');
			$('.testimonials-slider_text').removeClass('active')
		}
	});
	$('.js-read').click(function() {
		$(this).addClass('active');

		if ($(this).has('.active')) {
			$('.js-view').removeClass('active');
			$('.testimonials-slider_text').addClass('active');
			$('.testimonials-slider_video').removeClass('active')
		}
	});

///фокус инпутов формы
	$('.name input').focus(function() {
		$('.name label span').css("display", "block");
	});
	$('.name input').focusout(function() {
		$('.name label span').css("display", "none");
	});
	$('.phone input').focus(function() {
		$('.phone label span').css("display", "block");
	});
	$('.phone input').focusout(function() {
		$('.phone label span').css("display", "none");
	});
	$('.email input').focus(function() {
		$('.email label span').css("display", "block");
	});
	$('.email input').focusout(function() {
		$('.email label span').css("display", "none");
	});
	$('.comment textarea').focus(function() {
		$('.comment label span').css("display", "block");
	});
	$('.comment textarea').focusout(function() {
		$('.comment label span').css("display", "none");
	});
////Попап cообщение
			$('.js-message').click(function() {
				$('.modal').addClass('show');
			});
			$('.close').click(function() {
				$('.modal').removeClass('show');
			});
			$(document).mouseup(function(e) {
				var popup = $('.modal-dialog');

				if (e.target!=popup[0]&&popup.has(e.target).length === 0) {
					$('.modal').removeClass('show');
				}
			});
/// подробнее о процедуре
			$('.btn-transparent').click(function() {
				var target = $('.how-it-work'),
					off_top = $(target).offset().top;
				$('html,body').animate({scrollTop: off_top}, 1000);
				return false;
			});
});
