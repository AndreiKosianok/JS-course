function calculator() {

	//Калькулятор стоимости
	let canvasSize = document.getElementById("size"),
		canvasMaterial = document.getElementById("material"),
		canvasOptions = document.getElementById("options"),
		promocodeInput = document.getElementsByClassName("promocode")[0],
		calcPriceField = document.querySelector(".calc-price"),
		total = 0;

	canvasSize.addEventListener('change', priceCount);
	canvasMaterial.addEventListener('change', priceCount);
	canvasOptions.addEventListener('change', priceCount);
	promocodeInput.addEventListener('change', priceCount);

	function priceCount() {
		total = (canvasSize.options.selectedIndex + canvasMaterial.options.selectedIndex) * 1000;
		if (canvasSize.options.selectedIndex !== 0 && canvasMaterial.options.selectedIndex !== 0) {
			let discountPopArt = promocodeInput.value == 'IWANTPOPART' ? 0.7 : 1;
			calcPriceField.innerHTML = (total + (canvasOptions.options.selectedIndex * 500)) * discountPopArt;
		} else {
			calcPriceField.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
		}
	}

}
module.exports = calculator;