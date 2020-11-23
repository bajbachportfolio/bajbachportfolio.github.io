$(document).ready(function() {
///Выбор отделения 
			$('.select-list__header').click(function(event) {
				$(' .select-list, .select-list__body').toggleClass('active');
		});
			$('.select-list__item').click(function(event) {
				var currentElem = $(this).html();
				$('.select-list__current').html(currentElem);
				$('.select-list__body').removeClass('active');
		});
			$(document).click(function(e) {

			if (!$(e.target).hasClass('active')&&
				$(e.target).parents(".select-list__header").length === 0) {
				$('.select-list, .select-list__body').removeClass('active')
			}
			});

////Хедер выбор города
			$('.city-select__header').click(function(event) {
				$('.city-select, .city-select__body').toggleClass('active');
		});
			$('.city-select__item').click(function(event) {
				var currentElem = $(this).html();
				$('.city-select__current').html(currentElem);
				$('.city-select__body').removeClass('active');
		});
			$(document).click(function(e) {

			if (!$(e.target).hasClass('active')&&
				$(e.target).parents(".city-select__header").length === 0) {
				$('.city-select, .city-select__body').removeClass('active')
			}
		});
////Попап карта
			$('.zoom, .show_js').click(function() {
				$('.popup-map').fadeIn();
			});
			$('.popup-close').click(function() {
				$('.popup-map').fadeOut();
			});
			$(document).mouseup(function(e) {
				var popup = $('.popup-map__content');

				if (e.target!=popup[0]&&popup.has(e.target).length === 0) {
					$('.popup-map').fadeOut();
				}
			});
////Попап cообщение
			$('.message-btn').click(function() {
				$('.popup-message').fadeIn();
			});
			$('.popup-close').click(function() {
				$('.popup-message').fadeOut();
			});
			$(document).mouseup(function(e) {
				var popup = $('.popup-message__content');

				if (e.target!=popup[0]&&popup.has(e.target).length === 0) {
					$('.popup-message').fadeOut();
				}
			});
////Попап cообщение отправленно
			$('.send-msg').click(function() {
				$('.popup-send-done').fadeIn();
			});
			$('.popup-close').click(function() {
				$('.popup-send-done').fadeOut();
			});
			$(document).mouseup(function(e) {
				var popup = $('.popup-send-done__content');

				if (e.target!=popup[0]&&popup.has(e.target).length === 0) {
					$('.popup-send-done').fadeOut();
				}
			});
///
			$('.touch-menu').click(function(event) {
				$('.touch-menu, .header__menu, .menu-holder').toggleClass('active');
			});

/// Добавление болоков в меню
				if ($(window).width() < 664) {
					$('i').fadeOut();
					$('.logo').html('<a href="#"><img src="img/logo_mobile.png" alt="logo"></a>');
					
					var down = $('.download').html();
					$('.down').html(down);
			}
			$(window).resize(function() {
				if ($(window).width() > 664) {
					$('.logo').html('<a href="#"><img src="img/logo.png" alt="logo"></a>');
					$('.down').remove();
				}
			});

			$('.options li').click(function(event) {
				$(this).addClass('options__active').siblings().removeClass('options__active');
			});
});