str = 'урок-3-был слишком легким';

/*let upLetter = str.slice(0, 1).toUpperCase() + str.slice(1), //первый пункт задания
	spaceReplace = upLetter.replace(/-/g, ' '), 			 //второй пункт задания
	cutReplace = spaceReplace.replace(/легким/, ''),
	lastReplace = cutReplace.slice(0, -3) + 'оо'; //третий пункт задания*/

let finalReplace = str.slice(0, 1).toUpperCase() + str.slice(1).replace(/-/g, ' ').replace(/легким/, '').slice(0, -3) + 'оо';
console.log(finalReplace);

//четвёртый пункт задания

arr = [20, 33, 1, 'Человек', 2, 3];
let total = 0;

for (let i = 0; i < arr.length; i++) {
	if (typeof(arr[i]) != 'string') {
	total += Math.pow(arr[i], 3);
	} else {
		arr.splice([i],1);
	}
};
console.log(Math.sqrt(total));

//пятый пункт задания

function seleteSpaces (text) {
	if ((typeof(text)) === 'string' && text.length > 50) {
		let textresult = text.trim().substr(0, 50) + '...';
		console.log(textresult);
	} else if ((typeof(text)) === 'string') {
		let textresult = text.trim();
		console.log(textresult);
		} else {
		alert('Повторите ввод');
			}
};

seleteSpaces(prompt('Введите текст с пробелами в начале и конце'));