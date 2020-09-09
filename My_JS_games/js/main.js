$(document).ready(function() {
	$('.lt, .lb, .rt, .rb, .game-block').addClass('active');
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
});