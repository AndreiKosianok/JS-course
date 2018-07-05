function formsAjax() {
	//AJAX

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
	for (let i = 0; i < form.length; i++) {
		form[i].addEventListener('submit', requestResponse);
	}

	for (let i = 0; i < phoneInputs.length; i++) {
		phoneInputs[i].addEventListener('input', mask);
	}

	for (let i = 0; i < nameInputs.length; i++) {
		nameInputs[i].onBlur = cyrilicOnly;
		nameInputs[i].onkeyup = cyrilicOnly;
	}

	for (let i = 0; i < formTextareas.length; i++) {
		formTextareas[i].onBlur = cyrilicOnly;
		formTextareas[i].onkeyup = cyrilicOnly;
	}

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
		};

	}

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
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
				});

		i = new_value.indexOf('_');
		if (i != -1) {
			i < 5 && (i = 1);
			new_value = new_value.slice(0, i);
		}

		let reg = matrix.substr(0, this.value.length).replace(/_+/g, function(a) {
				
					return '\\d{1,' + a.length + '}';

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
		this.value = this.value.replace(/[^\йцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ]/ig,"");
	}

}

module.exports = formsAjax;