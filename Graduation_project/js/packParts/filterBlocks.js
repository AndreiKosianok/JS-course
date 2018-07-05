function filterBlocks() {
	//Фильтрация блоков портфолио
	let portfolioButtons = document.querySelectorAll(".portfolio-menu li"),
		portfolioBlocks = document.querySelectorAll(".portfolio-block"),
		portfolioEmpty = document.querySelector(".portfolio-no");

	for (let i = 0; i < portfolioButtons.length; i++) {
		portfolioButtons[i].addEventListener('click', function() {
			for (let j = 0; j < portfolioButtons.length; j++) {
				portfolioButtons[j].classList.remove('active');
			}

			let currentButtonClass = this.className,
				blocksCount = 0;
			this.classList.add('active');
			portfolioEmpty.style.display = 'none';
			//Сравнивает классы кнопки с классами доступных портретов и делает видимыми совпадающие
			for (let k = 0; k < portfolioBlocks.length; k++) {
				if (portfolioBlocks[k].classList.contains(currentButtonClass)) {
					portfolioBlocks[k].style.display = 'block';
				} else {
					portfolioBlocks[k].style.display = 'none';
					blocksCount += 1;
				}
				//Если количество скрытых портретов равно количеству всех доступных портретов проявляем блок portfolio-no
				if (blocksCount == portfolioBlocks.length) {
					portfolioEmpty.style.display = 'block';
				}
			}
		});
	}
}
module.exports = filterBlocks;