function modalWindow() {

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		descrBtn = document.querySelectorAll('.description-btn');
		

	function describeListen() {
		for(let i = 0; i < 4; i++){
			descrBtn[i].addEventListener('click', function() {
				this.classList.add('more-splash');
				overlay.style.display = 'block';
				document.body.style.overflow = 'hidden';
			});
		};
	};

	setInterval(describeListen, 100);

		more.addEventListener('click', function() {
			this.classList.add('more-splash');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});

		close.addEventListener('click', function() {
			overlay.style.display = "none";
			more.classList.remove('more-splash');
			document.body.style.overflow = '';
		});

}

module.exports = modalWindow;