let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
	day = new Date(),
	today = day.getDay() - 1; //сделал так, т.к. у меня неделя начинается с понедельника [1]

for (i = 0; i < week.length; i++) {
	if (i <= 4 && i != today) {
		document.write(week[i] + '<br>');
	} else if (i > 4 && i != today) {
		document.write('<b>' + week[i] + '</b>' + '<br>');
	  } else {
	  	document.write('<em>' + week[i] + '</em>' + '<br>');
	  };
};

/*
//Рандомно генерируют многозначные числа, пока не получилося вывод, доделаю
let arr[i] = Math.floor(Math.random() * 1000);
let arr = Array.from({length: 7}, () => Math.floor(Math.random() * 1000));
*/

let arr = ['321', '456', '5469', '789', '546', '126'];
for (var i = 0; i < arr.length; i++) {
	if (arr[i][0] == '3' || arr[i][0] == '7') {
		console.log(arr[i]);
	};
};