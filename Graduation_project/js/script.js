window.addEventListener('DOMContentLoaded', function() {

	//Слайдер

	
	let mainSlideIndex = 1, // 0 - for v2
		mainSlides = document.getElementsByClassName('main-slider-item');

	// Вариант 1

	showMainSlides(mainSlideIndex);
 	
	function showMainSlides(n) {

		if (n > mainSlides.length) {
			mainSlideIndex = 1
		}
		if (n < 1 ) {
			mainSlideIndex = mainSlides.length
		}

		for (let i = 0; i < mainSlides.length; i++) {
			mainSlides[i].style.display = 'none';
			mainSlides[i].classList.remove('animated', 'fadeInDown')
		}

		mainSlides[mainSlideIndex - 1].style.display = 'block';
		mainSlides[mainSlideIndex - 1].classList.add('animated', 'fadeInDown')
	};

	let setSlideInterval = setInterval(
		function() {
			changeMainSlides(1)}
			, 5000);

	function changeMainSlides (n) {
		showMainSlides(mainSlideIndex += n)
	}
	

	// Вариант 2	
	/*
	function showMainSlides() {
		setSlideInterval = setTimeout(function() {
			mainSlides[mainSlideIndex].style.display = 'block';
			mainSlides[mainSlideIndex].classList.add('animated', 'fadeInDown');
			mainSlideIndex = (mainSlideIndex + 1) % mainSlides.length;
			mainSlides[mainSlideIndex].style.display = 'none';
			mainSlides[mainSlideIndex].classList.remove('animated', 'fadeInDown');
			showMainSlides();
		}, 5000);
	}
	*/

	//Модальные окна

		//Кнопки
	let buttonOrderDesign = document.querySelectorAll(".button-design"),
		buttonOrderConsultation = document.querySelectorAll(".button-consultation"),
		giftButton = document.querySelectorAll(".fixed-gift")[0],
		
		//Модальные окна на эти кнопки
		modalPopupDesign = document.querySelector('.popup-design'),
		modalPopupConsultation = document.querySelector('.popup-consultation'),
		modalPopupGift = document.querySelector('.popup-gift'),
		modalScope = [modalPopupConsultation, modalPopupGift, modalPopupDesign],

		//Крестик
		modalPopupClose = document.querySelectorAll('.popup-close');
		console.log(modalScope);
		console.log(modalPopupClose);

		//Ивенты с модальными окнами на странице
		modalOpenState = false;

	//Модальные окна открываются по клику на кнопку

		//Модалка заказа дизайна
	for (let i = 0; i < buttonOrderDesign.length; i++) {
		buttonOrderDesign[i].addEventListener('click', () => {
			modalPopupDesign.style.display = 'flex';
			modalOpenState = true;

		})
	}

		//Модалка заказа консультации
	for (let i = 0; i < buttonOrderConsultation.length; i++) {
		buttonOrderConsultation[i].addEventListener('click', () => {
			modalPopupConsultation.style.display = 'flex';
			modalOpenState = true;

		})
	}
		//Модалка подарка
	giftButton.addEventListener('click', giftModalAppear);

	function giftModalAppear() {
		modalPopupGift.style.display = 'flex';
		giftButton.style.display = 'none';
		modalOpenState = true;
	}
	
	//Модальные окна закрываются по клику на крестик
	for (let i = 0; i < modalPopupClose.length; i++) {
		modalPopupClose[i].addEventListener('click', () => { 
			modalScope[i].style.display = 'none';
			modalOpenState = false;
			/*//надо подумать над менее громоздким способом закрытия модалок
			modalPopupDesign.style.display = 'none';
			modalPopupConsultation.style.display = 'none';
			modalPopupGift.style.display = 'none';*/

		})
	}

	//Модальные окна закрываются по клику на подложку
	for (let i = 0; i < modalScope.length; i++) {
		modalScope[i].addEventListener('click', (event) => { 
			if (event.target === modalScope[i]) {
				modalScope[i].style.display = 'none';
				modalOpenState = false;
			}
			
		})
	}
	
	//Появление модального окна через минуту
	let modalMinuteAppear = setTimeout(consultationModalAppear, 60000);

	function consultationModalAppear() {
		if (modalOpenState === false) {
			modalPopupConsultation.style.display = 'flex';
		}
	}

	//Модальное окно подарка при пролистывании страницы до конца
	let body = document.documentElement;

	window.addEventListener('scroll', scrollDown);

	function scrollDown() {
		if (modalOpenState == false && (body.scrollHeight - body.scrollTop) == body.clientHeight) {
			giftModalAppear();
			this.removeEventListener('scroll', scrollDown)
		}
	}
	
	//Подгрузка блоков с дополнительными стилями
	let buttonSeeMoreStyles = document.querySelectorAll(".button-styles")[0],
		hiddenStyles = document.getElementsByClassName('hidden-lg');

	buttonSeeMoreStyles.addEventListener('click', () => {
		for (let i = hiddenStyles.length; i--;) {
			hiddenStyles[i].className = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1 animated fadeInUp';
			//console.log(hiddenStyles[i]) //wtf???
		}
		buttonSeeMoreStyles.style.display = 'none';
	})

	//Калькулятор стоимости

	
})