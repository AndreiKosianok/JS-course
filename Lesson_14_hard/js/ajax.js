function contactForm() {
	let message = new Object();
		message.loading = 'Загрузка...';
		message.success = 'Спасибо! Скоро мы с вами свяжемся';
		message.failure = 'Что-то пошло не так...';

	let form = document.querySelectorAll('form'),
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

		//ожидание события для модального окна
	for (i = 0; i < form.length; i++) {
		form[i].addEventListener('submit', requestResponse);
	};

		function requestResponse(event) {
			event.preventDefault();
			this.appendChild(statusMessage);

			//AJAX
			let request = new XMLHttpRequest();
			//request.open('POST', 'server.php');
			request.open('POST', 'telegram.php');

			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

			let formData = new FormData(this);
				formInput = this.getElementsByTagName('input');
		
			for (let i = 0; i < formInput.length; i++) {
				formData.append([i], formInput[i].value)
				formInput[i].value = '';
				//очищяем поля ввода
			}
			console.log(formData);
			request.send(formData);

			request.onreadystatechange = function() {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;
						//контент
					} else {
						statusMessage.innerHTML = message.failure;
					}
				}
			}

		};
}

module.exports = contactForm;