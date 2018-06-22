function modalWindow() {

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		descrBtn = document.querySelectorAll('.description-btn'),
		uA = window.navigator.userAgent,
		isIE = /msie\s|trident\/|edge\//i.test(uA) && !!(document.uniqueID || document.documentMode || window.ActiveXObject || window.MSInputMethodContext || window.StyleMedia),
		mobileBrowser = function detectmob() { 
							if( navigator.userAgent.match(/Android/i)
								|| navigator.userAgent.match(/webOS/i)
								|| navigator.userAgent.match(/iPhone/i)
								|| navigator.userAgent.match(/iPad/i)
								|| navigator.userAgent.match(/iPod/i)
								|| navigator.userAgent.match(/BlackBerry/i)
								|| navigator.userAgent.match(/Windows Phone/i)
							) {
								return true;
								} else {
								return false;
							  }
						};


	for(let i = 0; i < 4; i++){
		descrBtn[i].addEventListener('click', function() {
			this.classList.add('more-splash');
			detect();
		});
	};

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		detect();
	});

	close.addEventListener('click', function() {
		overlay.style.display = "none";
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	function detect() {
		//this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
		if (mobileBrowser() === false && !isIE) {
				overlay.classList.remove('fade');
				overlay.classList.add('some-animation');
			} else if (mobileBrowser() === false) {
				animate(function(timePassed) {
					overlay.classList.remove('fade');
					overlay.style.transform = 'rotate(' + timePassed + 'deg)'
				}, 360);
			} else {
				overlay.classList.remove('fade');
			}
	}

	function animate(draw, duration) {
		let start = performance.now();

		requestAnimationFrame(function animate(time) {
			let timePassed = time - start;

			if (timePassed > duration) {
				timePassed = duration;
			}
			draw(timePassed);

			if (timePassed < duration) {
			requestAnimationFrame(animate);
			}

		});
	}
}

module.exports = modalWindow;