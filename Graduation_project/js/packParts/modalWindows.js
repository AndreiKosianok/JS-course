//Модальные окна
function modalWindows() {
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
		modalPopupClose = document.querySelectorAll('.popup-close'),

		//Ивенты с модальными окнами на странице
		modalOpenState = false;

	//Модальные окна открываются по клику на кнопку

		//Модалка заказа дизайна
	for (let i = 0; i < buttonOrderDesign.length; i++) {
		buttonOrderDesign[i].addEventListener('click', () => {
			modalPopupDesign.style.display = 'flex';
			modalOpenState = true;

		});
	}

		//Модалка заказа консультации
	for (let i = 0; i < buttonOrderConsultation.length; i++) {
		buttonOrderConsultation[i].addEventListener('click', () => {
			modalPopupConsultation.style.display = 'flex';
			modalOpenState = true;

		});
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
		});
	}

	//Модальные окна закрываются по клику на подложку
	for (let i = 0; i < modalScope.length; i++) {
		modalScope[i].addEventListener('click', (event) => { 
			if (event.target === modalScope[i]) {
				modalScope[i].style.display = 'none';
				modalOpenState = false;
			}
			
		});
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
		if (modalOpenState === false && (body.scrollHeight - body.scrollTop) == body.clientHeight) {
			giftModalAppear();
			this.removeEventListener('scroll', scrollDown);
		}
	}
	
	//Подгрузка блоков с дополнительными стилями
	let buttonSeeMoreStyles = document.querySelectorAll(".button-styles")[0],
		hiddenStyles = document.getElementsByClassName('hidden-lg');

	buttonSeeMoreStyles.addEventListener('click', () => {
		for (let i = hiddenStyles.length; i--;) {
			hiddenStyles[i].className = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1 animated fadeInUp';
		}
		buttonSeeMoreStyles.style.display = 'none';
	});
}
module.exports = modalWindows;