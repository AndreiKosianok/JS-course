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

	let deadline = '2018-06-15';

	function getTimeRemaining(endtime){

		let t = Date.parse(endtime) - Date.parse(new Date()),
			offset = new Date().getTimezoneOffset() / 60,
				seconds = (addZero(Math.floor((t/1000) % 60))), 
				minutes = (addZero(Math.floor((t/1000/60) % 60))),
				hours = (addZero(Math.floor((t/(1000*60*60)) + offset)));

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
					hours.innerHTML = '00',
					minutes.innerHTML = '00',
					seconds.innerHTML = '00';
				}
					
			};

		let timeInterval = setInterval(updateClock, 1000);
		updateClock();
					
	};

	setClock('timer', deadline);

// Плавная прокрутка
//document.querySelectorAll('[href^="#"]')
let menu = document.getElementsByTagName('ul')[0], //получаем родителя?
	menuLink = menu.getElementsByTagName('a');	//псевдомассив элементов меню навигации

	Array.prototype.forEach.call(menuLink, function(trigger) { //добавляем псевдо элементу свойства массива, что бы использовать forEach. Можно было и через .length перебрать, но так компактнее получается
		trigger.addEventListener('click', function(event) {	//обработчик событий должен срабатывать на клик по элементу
			event.preventDefault(); //отменяем стандартного действия браузера
			let hrefCheck = trigger.getAttribute('href'), //достаем текст ссылки на которую кликнули
				targetAnchor = document.querySelector(hrefCheck); //подставляем текст и находим элемент
			smoothScroll(targetAnchor);
			//вызываем функцию плавной прокрутки
		}, false);
	});

	function smoothScroll(toAnchor) {
		let positionStart = window.pageYOffset, //текущая позиция на странице
			positionStop = toAnchor.offsetTop, //позиция якоря
			//дистанция между текущей позицией и требуемым якорем
			distance = positionStop > positionStart ? positionStop - positionStart : positionStart - positionStop;

		requestAnimationFrame(scrollAnimation);
		function scrollAnimation() { //функция перехода
				if (positionStart < positionStop && distance > 5) {
					positionStart = positionStart + (distance / 30),
					distance -= (distance / 30),
					console.log(distance)
					scrollTo(0, positionStart);
				} else if (positionStart > positionStop && distance > 5) {
					positionStart = positionStart - (distance / 30),
					distance -= (distance / 30),
					console.log(distance)
					scrollTo(0, positionStart);
				} else return;
			requestAnimationFrame(scrollAnimation);
		}
	};

 });
