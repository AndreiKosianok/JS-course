function feedbackSlider() {
	//Нижний слайдер с отзывами
	let feedbackSliderItem = document.getElementsByClassName("feedback-slider-item"),
		feedbackSliderBtnNext = document.querySelector(".main-next-btn"),
		feedbackSliderBtnPrev = document.querySelector(".main-prev-btn"),
		feedbackSliderIndex = 1,
		feedbackSliderTimer = setInterval(function() {
			nextFeedbackSlider(1);
		feedbackSliderItem[feedbackSliderIndex - 1].className = 'feedback-slider-item animated fadeInRight';
			}, 8000);

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
	//Кнопка отзыв туда
	feedbackSliderBtnNext.addEventListener('click', () => {
		nextFeedbackSlider(1);
		feedbackSliderItem[feedbackSliderIndex - 1].className = 'feedback-slider-item animated fadeInRight';
	});
	//Кнопка отзыв сюда
	feedbackSliderBtnPrev.addEventListener('click', () => {
		nextFeedbackSlider(-1);
		feedbackSliderItem[feedbackSliderIndex - 1].className = 'feedback-slider-item animated fadeInLeft';
	});

}

module.exports = feedbackSlider;