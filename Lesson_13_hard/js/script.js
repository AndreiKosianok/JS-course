jQuery(document).ready(function() {
	let choseTour = $('.main_btna'),
		takeConsult = $('.main_btn'),
		scheduleBtn = $('a:eq(8)'),
		overlay = $('.overlay'),
		modal = $('.modal'),
		close = $('.close');

	choseTour.on('click', popupIsDisplay);
	takeConsult.on('click', popupIsDisplay);
	scheduleBtn.on('click', popupIsDisplay);

	function popupIsDisplay() {
		overlay.fadeIn();
		modal.slideDown();
	}

	close.on('click', popupIsClose);

	function popupIsClose() {
		overlay.fadeOut();
		modal.slideUp();
	}

})