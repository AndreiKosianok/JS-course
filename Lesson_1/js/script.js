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

console.log('Бюджет на один день:',shopBudget/30);
