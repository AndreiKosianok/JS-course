str = 'урок-3-был слишком легким';

let upLetter = str.slice(0, 1).toUpperCase() + str.slice(1),
	spaceReplace = upLetter.replace(/-/g, ' '),
	cutReplace = spaceReplace.replace(/легким/, ''),
	lastReplace = cutReplace.substr(0, cutReplace.length - 3) + 'оо';
console.log(lastReplace);

arr = [20, 33, 1, 'Человек', 2, 3];
let total = 0;

for (let i = 0; i<= arr.length; i++) {
	total += Math.pow(arr[i], 3);
};
console.log(Math.sqrt(total));

let word = '   Введите какое-нибудь слово  ';

function seleteSpaces (text) {
	if ((typeof(text)) === 'string') {
		console.log(text.trim());
	} else if ((typeof(text)) === 'string' && text.length > 50) {
		let textresult = text.trim().substr(0, 50) + '...';
		console.log(textresult)
		} else {
			alert('Повторите ввод');
	};
};

seleteSpaces(prompt('Введите текст с пробелами в начале и конце'));


