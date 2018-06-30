// Верхний Main слайдер
function mainSlider() {
	
	let mainSlideIndex = 1, // 0 - fro v2
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
};
exports default mainSlider;