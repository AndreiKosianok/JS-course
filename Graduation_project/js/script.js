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
		total = (canvasSize.options.selectedIndex + canvasMaterial.options.selectedIndex) * 1000
		if (canvasSize.options.selectedIndex !== 0 && canvasMaterial.options.selectedIndex !== 0) {
			discountPopArt = promocodeInput.value == 'IWANTPOPART' ? 0.7 : 1
			calcPriceField.innerHTML = (total + (canvasOptions.options.selectedIndex * 500)) * discountPopArt;
		} else {
			calcPriceField.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
		}
	}

	//Фильтрация блоков портфолио
	let portfolioButtons = document.querySelectorAll(".portfolio-menu li"),
		portfolioBlocks = document.querySelectorAll(".portfolio-block"),
		portfolioEmpty = document.querySelector(".portfolio-no");

	for (i = 0; i < portfolioButtons.length; i++) {
		portfolioButtons[i].addEventListener('click', function() {
			for (j = 0; j < portfolioButtons.length; j++) {
				portfolioButtons[j].classList.remove('active');
			}

			let currentButtonClass = this.className,
				blocksCount = 0;
			this.classList.add('active');
			portfolioEmpty.style.display = 'none';
			//Сравнивает классы кнопки с классами доступных портретов и делает видимыми совпадающие
			for (k = 0; k < portfolioBlocks.length; k++) {
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
	let	sizeBlocksWrapper = document.querySelector(".sizes-wrapper"),
		sizeBlocks = document.querySelectorAll(".sizes-block"),
		sizeBlocksImages = document.querySelectorAll(".sizes-block img");

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

		function imageHover(event, i) {
			let imageSource = sizeBlocksImages[i].getAttribute('src');

			if (this.event.type === 'mouseover' || this.event.type === 'touchstart' && this.event.target === sizeBlocksImages[i]) {
				//console.log(sizeBlocks[i])
				imageSource = imageSource.replace((i + 1) + '.png', (i + 1) + '-1.png');
			} else {
				//console.log('-1')
				imageSource = imageSource.replace((i + 1) + '-1.png', (i + 1) + '.png');
			}

			sizeBlocksImages[i].setAttribute('src', imageSource);
		}
	}


})