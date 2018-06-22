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
		overlay.animate({
			opacity: 'toggle',
			height: 'toggle'
			}, {
			duration: 500, 
			specialEasing: {
				opacity: 'linear',
				height: 'swing'
			}
		});
		modal.animate(
			{
				opacity: 'linear',
				top: '50px'

			}, 100, () => modal.animate(
			{
				opacity: 'show',
				top: '100px'

			}, 300));
	}

	close.on('click', popupIsClose);

	function popupIsClose() {
		overlay.fadeOut();
		modal.slideUp();
	}

})