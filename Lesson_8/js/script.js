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

/*
let timerUpdate = setInterval(function() {
let date = new Date(),
	currentDay = date.getDay(),
	currentHour = (addZero(date.getHours()));
	currentMinutes = (addZero(date.getMinutes()));
	currentSeconds = (addZero(date.getSeconds()));

function addZero(dateNumber){
	if (dateNumber >= 0 && dateNumber < 10) { 
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
*/

let deadline = '2018-06-14';

function getTimeRemaining(endtime){

	let t = Date.parse(endtime) - Date.parse(new Date()),
		offset = -(new Date().getTimezoneOffset() / 60),
			seconds = (addZero(Math.floor((t/1000) % 60))), 
			minutes = (addZero(Math.floor((t/1000/60) % 60))),
			hours = (addZero(Math.floor((t/(1000*60*60)) - offset)));
console.log(offset);
			function addZero(dateNumber){
				if (dateNumber >= 0 && dateNumber < 10) { 
					return '0' + dateNumber;
				} else {
					return dateNumber;
				}
			}
			
			return {
				'total': t,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
};

function setClock(id, endtime){

	let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');
				
			function updateClock(){
				let t = getTimeRemaining(endtime);
				hours.innerHTML = t.hours;
				minutes.innerHTML = t.minutes;
				seconds.innerHTML = t.seconds;

				if(t.total <= 0){
					clearInterval(timeInterval);
					timer.querySelector('.seconds').textContent = '00',
					timer.querySelector('.hours').textContent = '00',
					timer.querySelector('.minutes').textContent = '00';
				}
				
			};
			let timeInterval = setInterval(updateClock, 1000);
			updateClock();
				
	};
	setClock('timer', deadline);

});