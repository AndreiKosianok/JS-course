function mainSlider() {
	
// Верхний Main слайдер
	let mainSlideIndex = 1,
		mainSlides = document.getElementsByClassName('main-slider-item');

	showMainSlides(mainSlideIndex);
 	
	function showMainSlides(n) {

		if (n > mainSlides.length) {
			mainSlideIndex = 1;
		}
		if (n < 1 ) {
			mainSlideIndex = mainSlides.length;
		}

		for (let i = 0; i < mainSlides.length; i++) {
			mainSlides[i].style.display = 'none';
			mainSlides[i].classList.remove('animated', 'fadeInDown');
		}

		mainSlides[mainSlideIndex - 1].style.display = 'block';
		mainSlides[mainSlideIndex - 1].classList.add('animated', 'fadeInDown');
	}

	let setSlideInterval = setInterval(
		function() {
			changeMainSlides(1);
		}, 5000);

	function changeMainSlides (n) {
		showMainSlides(mainSlideIndex += n);
	}
};

module.exports = mainSlider;