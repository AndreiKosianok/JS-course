function imageHoverReplace() {
	//Картинки при наведении
	let	sizeBlocksWrapper = document.querySelector(".sizes-wrapper"),
		sizeBlocks = document.querySelectorAll(".sizes-block"),
		sizeBlocksImages = document.querySelectorAll(".sizes-block img");

	for (let i = 0; i < sizeBlocks.length; i++) {
		sizeBlocks[i].addEventListener('mouseover', function(event) {
			imageHover(event, i);
		});
		sizeBlocks[i].addEventListener('mouseout', function(event) {
			imageHover(event, i);
		});
		sizeBlocks[i].addEventListener('touchstart', function(event) {
			imageHover(event, i);
		});
		sizeBlocks[i].addEventListener('touchcancel', function(event) {
			imageHover(event, i);
		});

		function imageHover(event, i) {
			let imageSource = sizeBlocksImages[i].getAttribute('src');

			if (event.type === 'mouseover' || event.type === 'touchstart' && event.target === sizeBlocksImages[i]) {
				imageSource = imageSource.replace('sizes-' + (i + 1) + '.png', 'sizes-' + (i + 1) + '-1.png');
			} else {
				imageSource = imageSource.replace('sizes-' + (i + 1) + '-1.png', 'sizes-' + (i + 1) + '.png');
			}

			sizeBlocksImages[i].setAttribute('src', imageSource);
		}
	}
}
exports default imageHoverReplace;