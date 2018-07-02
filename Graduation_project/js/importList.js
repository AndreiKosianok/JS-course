window.addEventListener('DOMContentLoaded', function() {
	
	let mainSlider = require('./packParts/mainSlider.js'),
		modalWindows = require('./packParts/modalWindows.js'),
		calculator = require('./packParts/calculator.js');
	
	mainSlider();
	modalWindows();
	calculator();
	
});