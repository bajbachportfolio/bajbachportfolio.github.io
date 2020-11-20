$(document).ready(function() {
/// Touch menu
			$('.touch-menu').click(function(event) {
				$('.touch-menu, .menu').toggleClass('active');
			});

			$(document).click(function(e) {

				if (!$(e.target).hasClass('active')&&
					$(e.target).parents(".header__content").length === 0) {
					$('.menu, .touch-menu').removeClass('active')
				}
			});

			$('.menu li').click(function() {
				$('.menu, .touch-menu').removeClass('active')
			});

/// search input
			if ($(window).width()<534) {
				$('.search-btn').click(function() {
					$('.search-btn, .search-input').toggleClass('active');
				});
			}
///Products item hover
			$('.products-item').mouseenter(function () {
				$(this).addClass('active').siblings().removeClass('active');

				var itemActive = $('.products-item.active');
				
				if ($(itemActive).hasClass('active')) {
					$(this).find('.options_hover').addClass('active');
				}
			});
			$('.products-item').mouseleave(function() {
					$('.options_hover').removeClass('active');
				});
///Categories filter
			$('.categories > li').click(function() {
				$(this).toggleClass('categories_current');
			});
///Color filter
			$('.color > li').click(function() {
				$(this).toggleClass('current-color');
			});
///Size filter
			$('.size .checkbox-custom').click(function() {
				$(this).closest('li').toggleClass('size-current');
			});
			$('.size .label').click(function() {
				$(this).closest('li').toggleClass('size-current');
			});
		
///Tag filter
			$('.tag-list > div').click(function() {
				$(this).toggleClass('tag-current');
			});
///Featured products hover
			$('.featured-product__item').hover(function () {
				$(this).addClass('feat-current').siblings().removeClass('feat-current').mouseleave(function() {
					$(this).removeClass('feat-current');
				});
			});
///Popup-product window
			$('.quick-view, .img-wrapp a, .products-item__name').click(function() {
				$('.popup-product').fadeIn();
			});
			$('.popup-close').click(function() {
				$('.popup-product').fadeOut();
			});
			$(document).mouseup(function(e) {
				var popup = $('.popup-product__content');

				if (e.target!=popup&&popup.has(e.target).length === 0) {
					$('.popup-product').fadeOut();
				}
			});
///Quantity product manage
			$('.up').click(function() {
					var count = Number($('.product-quantity__number input').val());
					$('.product-quantity__number input').val(count+1);
			});
			$('.down').click(function() {
				var quantityInp = $('.product-quantity__number input').val();
				if (quantityInp > 1) {
					var count = Number($('.product-quantity__number input').val());
					$('.product-quantity__number input').val(count-1);
			} else {
					return false;
				}
			});
///Mobile sidebar
			$('.touch-sidebar').click(function() {
				$('.sidebar').toggleClass('active');
			});

			$('.fancybox').fancybox();
			$('.money, .lang, .categories-select').niceSelect();
});
///Fixed header on scroll
$(document).scroll(function() {
	if ($(document).scrollTop() > 165) {
		$('.header__menu').addClass('fixed');
		$('.main').css("padding-top", "128px");
	} else {
		$('.header__menu').removeClass('fixed')
		$('.main').css("padding-top", "52px");
	}
});