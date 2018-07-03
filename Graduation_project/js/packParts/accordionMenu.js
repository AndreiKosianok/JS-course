function accordionMenu() {
	//Аккордеон
	let accordionHeading = document.querySelectorAll(".accordion-heading"),
		accordionBlock = document.querySelectorAll(".accordion-block");

	accordionHide();
	function accordionHide() {
		for (let j = 0; j< accordionBlock.length; j++) {
				accordionBlock[j].style.display = "none";
				accordionBlock[j].classList.add('animated', 'fadeInDown');
			}
	}

	for (let i = 0; i< accordionHeading.length; i++) {
		accordionHeading[i].addEventListener('click', function() {
			if (accordionBlock[i].style.display === "none") {
				accordionHide();
				accordionBlock[i].style.display = "block";
				accordionHeading[i].style.color = "rgb(197, 26, 187)";
			} else {
				accordionBlock[i].style.display = "none";
				accordionHeading[i].style.color = "rgb(51, 51, 51)";
			}
		})
	}
}

exports default accordionMenu;