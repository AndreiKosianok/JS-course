var shopBudget = prompt("Ваш бюджет на месяц?"),
	shopName = prompt("Введите название вашего магазина"),
	shopTime = 15,
	mainList = {
		shopBudget,
		shopName,
		shopGoods: [],
		employers: {},
		open: true
	};

for (let i = 0; i <= 2; i++) {
	let a = prompt("Какой тип товаров будем продавать?");
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a!= '' && a.length < 50) {
			console.log('Всё верно!');
			mainList.shopGoods[i] = a;
		} else {
			i--;
		};
	};
					// Способ 1
/*
let i = 0;
do {
	mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?");
	i++;
}
while (i < 2);
*/

					// Способ 2
/*
let i = 0;
while (i < 2) {
	mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?");
	i++;
};
*/

if (shopTime < 0) {
	console.log('Такого не может быть!');
} else if (shopTime > 8 && shopTime < 20) {
	console.log('Время работать!')
	} else if (shopTime < 24) {
		console.log('Уже слишком поздно!');
		} else {
			console.log('В сутках только 24 часа!')
		};


var dayBudget = mainList.shopBudget / 30;
alert('Бюджет на 1 день: ' + dayBudget);
console.log(mainList);