$(document).ready(function() {
	$('.lt, .lb, .rt, .rb, .game-block').addClass('active');

/// Поле чудес
	let wf = function() {
		var words = [
				"программа",
				"макака",
				"велосипед",
				"горчица",
				"пуговица",
				"динозавр",
				"стрекоза"
			];

			var word = words[Math.floor(Math.random() * words.length)];
			var answerArray = [];
				for (i = 0; i < word.length; i++) {
					answerArray[i] = "_";
				}
			var remainingLetters = word.length;
			var times = 20;
			while (remainingLetters > 0&&times > 0) {
				alert(answerArray.join(" "));
				var guess = prompt("Введите букву или нажмите Отмена для выхода");
				if (guess === null) {
					break
				} else if (guess.length !== 1&&guess.length !== 0) {
					alert("Пожалуйста, введите одну букву");
				} else {
					times--;
					guess = guess.toLowerCase();
					for (j = 0; j < word.length; j++) {
						if (word[j] === guess) {
							answerArray[j] = guess;
							remainingLetters--;
						}
					}
				}
			}
			if (times === 0) {
				alert("Хаха, вы не успели отгадать!");
			} else {
			alert(answerArray.join(" "));
			alert("Вы - молодец! Было загадано слово " + word);
			}
		}
	$('.wonder-field').click(function() {
		wf();
	});

/// Найди клад
	var trss = function() {
	var getRandomNumber = function(size) {
	return Math.floor(Math.random() * size);
	};

	var width = $('.treassure-map').width();
	var height = 480;
	if ($(window).width() < 420) {
		var height = 204;
	}
	var clicks = 0;

	var target = {
		x: getRandomNumber(width),
		y: getRandomNumber(height)
	};
console.log(target);
	var getDistance = function(event, target) {
		var diffX = event.offsetX - target.x;
		var diffY = event.offsetY - target.y;
		return Math.sqrt((diffX * diffX) + (diffY * diffY))
	};
	var getDistanceText = function (distance) {
		if (distance < 10) {
			return "Просто огонь!";
		} else if (distance < 20) {
			return " Очень горячо";
		} else if (distance < 40) {
			return "Горячо";
		} else if (distance < 80) {
			return "Тепло";
		} else if (distance < 160) {
			return "Холодно";
		} else if (distance < 320) {
			return "Холодно";
		} else {
			return "Просто лед!";
		}
	};

	$('.treassure-map').click(function(event) {
		clicks++

		var distance = getDistance(event, target);
		var distanceText = getDistanceText(distance);
		$('p').text(distanceText);

		if (distance < 8) {
			alert("Поздравляю, вы нашли клад за " + clicks + " кликов!")
		}
	});
	};
///Click
	$('.treassures').click(function() {
		$('.pop-up-trss').fadeIn();
				trss();
			});
	$('.pop-up-trss__close').click(function() {
				$('.pop-up-trss').fadeOut();
			});
	$(document).mouseup(function(e) {
				var popup = $('.pop-up-trss__content');

				if (e.target!=popup&&popup.has(e.target).length === 0) {
					$('.pop-up-trss').fadeOut();
				}

	});

});