function calculator() {
	let persons = document.getElementsByClassName('counter-block-input')[0],
		restDays = document.getElementsByClassName('counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personSum = 0,
		daysSum = 0,
		total = 0;

	totalValue.innerHTML = 0;

	persons.addEventListener('change', function() {

		personSum = +this.value
		total = (daysSum + personSum)* 4000;
		if (restDays.value == '' || restDays.value == 0 || persons.value == '' || persons.value == 0) {
			totalValue.innerHTML = 0;
		} else {
			animateValue(+totalValue.innerText, total * place.value, 1000);
		}
	});

	restDays.addEventListener('change', function() {
		daysSum = +this.value
		total = (daysSum + personSum)* 4000;
		if (restDays.value == '' || restDays.value == 0 || persons.value == '' || persons.value == 0) {
			totalValue.innerHTML = 0;
		} else {
			animateValue(+totalValue.innerText, total * place.value, 1000);
		}
	});

	place.addEventListener('change', function() {
		if (restDays.value == '' || restDays.value == 0 || persons.value == '' || persons.value == 0) {
			totalValue.innerHTML = 0;
		} else {
			let a = total;
			animateValue(+totalValue.innerText, a * this.options[this.selectedIndex].value, 1000);
		}
	});

	persons.onkeyup = numberDetect;
	restDays.onkeyup = numberDetect;


	function numberDetect () {
		this.value = this.value.replace(/[^\d]/g, '')
	}

	function animateValue(start, end, duration) {
		let range = end - start,
			current = start,
			increment = end > start? 100 : -100,
			stepTime = Math.abs(Math.floor(duration / range)),
			timer = setInterval(function() {
			current += increment;
			totalValue.innerHTML = current;
			if (current == end) {
				clearInterval(timer);
			}
	    }, stepTime);
	}
}

module.exports = calculator;