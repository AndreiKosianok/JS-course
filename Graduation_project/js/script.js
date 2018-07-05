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
		modalPopupClose = document.querySelectorAll('.popup-close'),
		
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
	let canvasSize = document.getElementById("size"),
		canvasMaterial = document.getElementById("material"),
		canvasOptions = document.getElementById("options"),
		promocodeInput = document.getElementsByClassName("promocode")[0],
		calcPriceField = document.querySelector(".calc-price"),
		total = 0;

	canvasSize.addEventListener('change', priceCount);
	canvasMaterial.addEventListener('change', priceCount);
	canvasOptions.addEventListener('change', priceCount);
	promocodeInput.addEventListener('change', priceCount);

	function priceCount() {
		total = (canvasSize.options.selectedIndex + canvasMaterial.options.selectedIndex) * 1000;
		if (canvasSize.options.selectedIndex !== 0 && canvasMaterial.options.selectedIndex !== 0) {
			let discountPopArt = promocodeInput.value == 'IWANTPOPART' ? 0.7 : 1;
			calcPriceField.innerHTML = (total + (canvasOptions.options.selectedIndex * 500)) * discountPopArt;
		} else {
			calcPriceField.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
		}
	}

	//Фильтрация блоков портфолио
	let portfolioButtons = document.querySelectorAll(".portfolio-menu li"),
		portfolioBlocks = document.querySelectorAll(".portfolio-block"),
		portfolioEmpty = document.querySelector(".portfolio-no");

	for (let i = 0; i < portfolioButtons.length; i++) {
		portfolioButtons[i].addEventListener('click', function() {
			for (let j = 0; j < portfolioButtons.length; j++) {
				portfolioButtons[j].classList.remove('active');
			}

			let currentButtonClass = this.className,
				blocksCount = 0;
			this.classList.add('active');
			portfolioEmpty.style.display = 'none';
			//Сравнивает классы кнопки с классами доступных портретов и делает видимыми совпадающие
			for (let k = 0; k < portfolioBlocks.length; k++) {
				if (portfolioBlocks[k].classList.contains(currentButtonClass)) {
					/*console.log(currentButtonClass)
					console.log(portfolioBlocks[k])*/
					portfolioBlocks[k].style.display = 'block';
				} else {
					portfolioBlocks[k].style.display = 'none';
					blocksCount += 1;
				}
				//Если количество скрытых портретов равно количеству всех доступных портретов проявляем блок portfolio-no
				//console.log(blocksCount)
				if (blocksCount == portfolioBlocks.length) {
					portfolioEmpty.style.display = 'block';
				}
			}
		})
	}

	//Картинки при наведении replace('.png', '-1.png') .getAttribute("src")
	let	sizeBlocks = document.querySelectorAll(".sizes-block"),
		sizeBlocksImages = document.querySelectorAll(".sizes-block img");

	function imageHover(event, i) {
		let imageSource = sizeBlocksImages[i].getAttribute('src');

		if (event.type === 'mouseover' || event.type === 'touchstart' && event.target === sizeBlocksImages[i]) {
			//console.log(sizeBlocks[i])
			imageSource = imageSource.replace('sizes-' + (i + 1) + '.png', 'sizes-' + (i + 1) + '-1.png');
		} else {
			//console.log('-1')
			imageSource = imageSource.replace('sizes-' + (i + 1) + '-1.png', 'sizes-' + (i + 1) + '.png');
		}

		sizeBlocksImages[i].setAttribute('src', imageSource);
	}

	for (let i = 0; i < sizeBlocks.length; i++) {
		sizeBlocks[i].addEventListener('mouseover', function(event) {
			imageHover(event, i);
		});
		sizeBlocks[i].addEventListener('mouseout', function(event) {
			imageHover(event, i);
		});
		sizeBlocks[i].addEventListener('touchstart', function(event) {
			imageHover(event, i);
		});
		sizeBlocks[i].addEventListener('touchcancel', function(event) {
			imageHover(event, i);
		});

	}

	//Нижний слайдер с отзывами //document.querySelectorAll(".feedback-slider-item")
	let feedbackSliderItem = document.getElementsByClassName("feedback-slider-item"),
		feedbackSliderBtnNext = document.querySelector(".main-next-btn"),
		feedbackSliderBtnPrev = document.querySelector(".main-prev-btn"),
		feedbackSliderIndex = 1,
		feedbackSliderTimer = setInterval(function() {
			nextFeedbackSlider(1);
		feedbackSliderItem[feedbackSliderIndex - 1].className = 'feedback-slider-item animated fadeInRight';
			}, 5000);

	showFeedbackSlider(feedbackSliderIndex);

	function showFeedbackSlider(n) {

		if (n > feedbackSliderItem.length) {
			feedbackSliderIndex = 1;
		}

		if (n < 1) {
			feedbackSliderIndex = feedbackSliderItem.length;
		}

		for (let i = 0; i < feedbackSliderItem.length; i++) {
			feedbackSliderItem[i].style.display = 'none';
		}
		feedbackSliderItem[feedbackSliderIndex - 1].style.display = 'block';
	}

	function nextFeedbackSlider(n) {
		showFeedbackSlider(feedbackSliderIndex += n);
	}
	//Кнопка отызв туда
	feedbackSliderBtnNext.addEventListener('click', () => {
		nextFeedbackSlider(1);
		//feedbackSliderItem[feedbackSliderIndex - 1].className = 'feedback-slider-item animated fadeOutRight';
		feedbackSliderItem[feedbackSliderIndex - 1].className = 'feedback-slider-item animated fadeInRight';
	})
	//Кнопка отзыв сюда
	feedbackSliderBtnPrev.addEventListener('click', () => {
		nextFeedbackSlider(-1);
		//feedbackSliderItem[feedbackSliderIndex - 1].classList.remove('animated', 'fadeInRight');
		//feedbackSliderItem[feedbackSliderIndex - 1].classList.add('animated', 'fadeInLeft');
		feedbackSliderItem[feedbackSliderIndex - 1].className = 'feedback-slider-item animated fadeInLeft';
	})

	//Аккордеон //accordionHeading[i].style.display = "none"; "block"
	let accordionHeading = document.querySelectorAll(".accordion-heading"),
		accordionBlock = document.querySelectorAll(".accordion-block");

	accordionHide();
	function accordionHide() {
		for (let j = 0; j< accordionBlock.length; j++) {
				accordionHeading[j].style.color = "#333333"
				accordionBlock[j].style.display = "none";
				accordionBlock[j].classList.add('animated', 'fadeInDown');
			}
	}

	for (let i = 0; i< accordionHeading.length; i++) {
		accordionHeading[i].addEventListener('click', function() {
			if (accordionBlock[i].style.display === "none") {
				accordionHide();
				accordionBlock[i].style.display = 'block';
				accordionHeading[i].style.color = "#c51abb";
			} else {
				accordionBlock[i].style.display = "none";
				accordionHeading[i].style.color = "#333333"
			}
		})
	}

	//Гамбургер-меню 
	//Реализация блока не завершена
	let burgerMenu = document.querySelector(".burger-menu"),
		burgerButton = document.querySelector(".burger");

	displayCheck();
	function displayCheck() {
		if (document.documentElement.clientWidth > 768) {
			burgerMenu.style.display = 'none';
		}
	}

	burgerButton.addEventListener('click', function() {
		burgerMenu.style.display = burgerMenu.style.display === 'block' ? 'none' : 'block';
	})

	burgerButton.addEventListener('touchstart', function() {
		burgerMenu.style.display = burgerMenu.style.display === 'block' ? 'none' : 'block';
	})

	//AJAX
		//phoneInputs = [form[2].querySelectorAll("input")[2], form[1].querySelectorAll("input")[0], form[0].querySelectorAll("input")[1]],
		//nameInputs = [form[2].querySelectorAll("input")[1], form[1].querySelectorAll("input")[1], form[0].querySelectorAll("input")[0]],

	let form = document.querySelectorAll("form"),
		phoneInputs = document.querySelectorAll("[name='phone']"),
		nameInputs = document.querySelectorAll("[name='name']"),
		formTextareas = document.querySelectorAll("[name='message']"),
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

	let message = new Object();
		message.loading = 'Загрузка...';
		message.success = 'Спасибо! Скоро мы с вами свяжемся';
		message.failure = 'Что-то пошло не так...';

		//ожидание события для модального окна
	for (i = 0; i < form.length; i++) {
		form[i].addEventListener('submit', requestResponse);
	};

	for (i = 0; i < phoneInputs.length; i++) {
		phoneInputs[i].addEventListener('input', mask);
	};

	for (i = 0; i < nameInputs.length; i++) {
		nameInputs[i].onBlur = cyrilicOnly;
		nameInputs[i].onkeyup = cyrilicOnly;
	};

	for (i = 0; i < formTextareas.length; i++) {
		formTextareas[i].onBlur = cyrilicOnly;
		formTextareas[i].onkeyup = cyrilicOnly;
	};


	function requestResponse(event) {
		event.preventDefault();
		this.appendChild(statusMessage);

		//AJAX
		let request = new XMLHttpRequest(),
			formData = new FormData(event.target);

		request.open('POST', '../mailer/smart.php');
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		request.send(formData);

		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
				} else {
					statusMessage.innerHTML = message.failure;
				}
			}
		}

	};

	//Маска ввода телефонного номера
	let keyCode;
		
	function mask(event) {
			event.KeyCode && (keyCode = event.keyCode);
			let pos = this.selectionStart;
			if (pos < 3) event.preventDefault();
			let matrix = '(___) ____-___',
				i = 0,
				def = matrix.replace(/\D/g, ''),
				val = this.value.replace(/\D/g, ''),
				new_value = matrix.replace(/[_\d]/g, function(a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a
				});

		i = new_value.indexOf('_');
		if (i != -1) {
			i < 5 && (i = 1);
			new_value = new_value.slice(0, i)
		}

		let reg = matrix.substr(0, this.value.length).replace(/_+/g, function(a) {
				
					return '\\d{1,' + a.length + '}'

				}).replace(/[+()]/g, '\\$&');

		reg = new RegExp('^' + reg +'$');

		if (!reg.test(this.value) || this.value.length < 1 || keyCode > 47 && keyCode < 58) {
			this.value = new_value;
		}

		if (event.type == 'blur' && this.value.length < 1) {
			this.value = '';
		}
	}

	//Фильтр только кирилица
	function cyrilicOnly() {
		this.value = this.value.replace(/[^\йцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ]/ig,"")
	}


})