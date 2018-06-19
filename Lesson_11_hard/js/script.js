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

	info.addEventListener('click', (event) => {
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

		let offset = new Date().getTimezoneOffset() * 60000,
			t = Date.parse(endtime) - Date.parse(new Date()) + offset,
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

	let navigation = document.getElementsByTagName('nav')[0];

	navigation.addEventListener('click', function(event) {
		event.preventDefault();

		animate(function (timePassed) {
			let target = event.target,
				section = document.getElementById( target.getAttribute('href').slice(1) );

			window.scrollBy( 0, section.getBoundingClientRect().top / 20 - 3 );
		}, 1500)
	});

	//модальное окно

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		descrBtn = document.querySelectorAll('.description-btn'),
		uA = window.navigator.userAgent,
		isIE = /msie\s|trident\/|edge\//i.test(uA) && !!(document.uniqueID || document.documentMode || window.ActiveXObject || window.MSInputMethodContext || window.StyleMedia),
		mobileBrowser = function detectmob() { 
							if( navigator.userAgent.match(/Android/i)
								|| navigator.userAgent.match(/webOS/i)
								|| navigator.userAgent.match(/iPhone/i)
								|| navigator.userAgent.match(/iPad/i)
								|| navigator.userAgent.match(/iPod/i)
								|| navigator.userAgent.match(/BlackBerry/i)
								|| navigator.userAgent.match(/Windows Phone/i)
							) {
								return true;
								} else {
								return false;
							  }
						};


	for(let i = 0; i < 4; i++){
		descrBtn[i].addEventListener('click', function() {
			this.classList.add('more-splash');
			detect();
		});
	};

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		detect();
	});

	close.addEventListener('click', function() {
		overlay.style.display = "none";
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	function detect() {
		//this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
		if (mobileBrowser() === false && !isIE) {
				overlay.classList.remove('fade');
				overlay.classList.add('some-animation');
			} else if (mobileBrowser() === false) {
				animate(function(timePassed) {
					overlay.classList.remove('fade');
					overlay.style.transform = 'rotate(' + timePassed + 'deg)'
				}, 360);
			} else {
				overlay.classList.remove('fade');
			}
	}

	function animate(draw, duration) {
		let start = performance.now();

		requestAnimationFrame(function animate(time) {
			let timePassed = time - start;

			if (timePassed > duration) {
				timePassed = duration;
			}
			draw(timePassed);

			if (timePassed < duration) {
			requestAnimationFrame(animate);
			}

		});
	}

	//Form

	let message = new Object();
		message.loading = 'Загрузка...';
		message.success = 'Спасибо! Скоро мы с вами свяжемся';
		message.failure = 'Что-то пошло не так...';

	let form = document.querySelectorAll('form'),
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

		//ожидание события для модального окна
			for (i = 0; i < form.length; i++) {
				form[i].addEventListener('submit', requestResponse);
			};

				function requestResponse(event) {
					event.preventDefault();
					this.appendChild(statusMessage);

					//AJAX
					let request = new XMLHttpRequest();
					//request.open('POST', 'server.php');
					request.open('POST', 'telegram.php');

					request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

					let formData = new FormData(this);

					request.send(formData);

					request.onreadystatechange = function() {
						if (request.readyState < 4) {
							statusMessage.innerHTML = message.loading;
						} else if (request.readyState === 4) {
							if (request.status == 200 && request.status < 300) {
								statusMessage.innerHTML = message.success;
								//контент
							} else {
								statusMessage.innerHTML = message.failure;
							}
						}
					}

					let formInput = this.getElementsByTagName('input');
					for (let i = 0; i < formInput.length; i++) {
						formInput[i].value = '';
						//очищяем поля ввода
					}
				};
			
});