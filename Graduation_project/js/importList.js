window.addEventListener('DOMContentLoaded', function() {
	
	let mainSlider = require('./packParts/mainSlider.js'),
		modalWindows = require('./packParts/modalWindows.js'),
		filterBlocks = require('./packParts/filterBlocks.js'),
		imageHoverReplace = require('./packParts/imageHoverReplace.js'),
		feedbackSlider = require('./packParts/feedbackSlider.js'),
		accordionMenu = require('./packParts/accordionMenu.js'),
		calculator = require('./packParts/calculator.js');
	
	mainSlider();
	modalWindows();
	filterBlocks();
	imageHoverReplace();
	feedbackSlider();
	accordionMenu();
	calculator();
	
});