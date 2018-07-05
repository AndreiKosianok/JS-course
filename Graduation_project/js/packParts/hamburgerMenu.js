function hamburgerMenu() {
	//Гамбургер-меню 
	//Реализация блока не завершена
	let burgerMenu = document.querySelector(".burger-menu"),
		burgerButton = document.querySelector(".burger");

	function displayCheck() {
		if (screen.width >= 768 && burgerMenu.style.display !== 'none') {
			burgerMenu.style.display = 'none';
			console.log('size>768');
		}
	};
	displayCheck();

	burgerButton.addEventListener('click', function() {
		if (screen.width < 768) {
			burgerMenu.style.display = burgerMenu.style.display === 'block' ? 'none' : 'block';
		}
	});

	burgerButton.addEventListener('touchstart', function() {
		burgerMenu.style.display = burgerMenu.style.display === 'block' ? 'none' : 'block';
	});

}

module.exports = hamburgerMenu;