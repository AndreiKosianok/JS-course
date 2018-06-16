window.addEventListener('DOMContentLoaded', function() {
	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for (let i = a; i <tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
			console.log('hide done');
		}
	}

	hideTabContent(1)

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event){
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		};
	})
});

let timerUpdate = setInterval(function() {
let date = new Date(),
	currentDay = date.getDay(),
	currentHour = (addZero(date.getHours()));
	currentMinutes = (addZero(date.getMinutes()));
	currentSeconds = (addZero(date.getSeconds()));

function addZero(dateNumber){
	if (dateNumber > 0 && dateNumber < 10) { 
		return '0' + dateNumber;
	} else {
		return dateNumber;
	}
}
let timerD = document.getElementById('timer');

document.querySelector('.hours').innerText = currentHour; // Текущее время : часы
document.querySelector('.minutes').innerText = currentMinutes; // Текущее время : минуты
document.querySelector('.seconds').innerText = currentSeconds; // Текущее время : секунды
}, 1000);