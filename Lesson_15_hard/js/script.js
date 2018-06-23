window.addEventListener('DOMContentLoaded', function() {
	
	let tab = require('../js/tabs.js');
	let modalWindow = require('../js/modalWindow.js');
	let ajax = require('../js/ajax.js');
	let slider = require('../js/slider.js');
	let calc = require('../js/calculator.js');
	let smScroll = require('../js/smScroll.js');
	let timer = require('../js/timer.js');

	tab();
	modalWindow();
	ajax();
	slider();
	calc();
	smScroll();
	timer();

});