var shopBudget = prompt("Ваш бюджет на месяц?"),
	shopName = prompt("Введите название вашего магазина"),
	mainList = {
		shopBudget,
		shopName,
		shopGoods: [],
		employers: {},
		open: true
	};
for (var i = 0; i <= 2; i++) {
	mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?")
	};

var dayBudget = mainList.shopBudget / 30;
alert('Бюджет на 1 день: ' + dayBudget);
console.log(mainList);