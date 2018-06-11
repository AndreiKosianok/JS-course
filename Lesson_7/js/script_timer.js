document.body.style.backgroundImage = 'url(./img/timer_img.jpg)';
document.body.style.backgroundPosition = 'center center';
document.body.style.backgroundSize = 'cover';

let timerUpdate = setInterval(function() {
let date = new Date(),
	currentDay = date.getDay(),
	currentTime = (addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds()) + ' ' + addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + '.' + date.getFullYear());

function addZero(dateNumber){
	if (dateNumber >= 0 && dateNumber < 10) { 
		return '0' + dateNumber;
	} else {
		return dateNumber;
	}
}

function showCurrentDay(dayNumber) {
	let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
	return days[currentDay];
}

document.getElementById('currentTime').innerHTML = currentTime; // Текущее время : дата
document.getElementById('currentDay').innerHTML = (showCurrentDay(currentDay)); // Текущий день недели
}, 1000);