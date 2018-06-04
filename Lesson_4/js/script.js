let money,
	name,
	shopTime,
	price,
	discPrice,
	dayBudget;
	
function shopStart() {
	money = prompt("Ваш бюджет на месяц?", '');

	while (isNaN(money) || money == '' || money == null) {
		money = prompt("Ваш бюджет на месяц?", '');
	};

	name = prompt("Введите название вашего магазина", '').toUpperCase();
	shopTime = 15;
};

shopStart();

let mainList = {
		shopBudget: money,
		shopName: name,
		shopGoods: [],
		employers: {},
		shopOpen: true,
		discount: false,
		shopItems: [],
		chooseGoods: function chooseGoods() {
			for (let i = 0; i < 3; i++) {
				let a = prompt("Какой тип товаров будем продавать?", '');
					if ((typeof(a)) === 'string' && (typeof(a)) != null && a!= '' && a.length < 50) {
						console.log('Всё верно!');
						mainList.shopGoods[i] = a;
					} else {
						alert('Введите название верно');
						i--;
					}
			}
		},
		chooseShopItems: function chooseShopItems() {
			while (true) {
				let items = prompt('Перечислите через запятую ваши товары', '');
					if ((typeof(items)) === 'string' && (typeof(items)) != null && items != '') {			
						mainList.shopItems = items. split(',');
						mainList.shopItems.push(prompt('Подождите ещё ', ''));
						mainList.shopItems.sort();
						mainList.shopItems.forEach(function(item, i) {
						outTotalG.innerHTML += ('У нас вы можете купить: ' + (i+1) + ' ' + item + '<br>');
						});
						break;
					}
			}
		},
		employeeHire: function employeeHire () {
			for (let i = 1; i < 5; i++) {
				let employeeName = prompt("Введите имя " + [i] + "-го сотрудника", '');
					if ((typeof(employeeName)) === 'string' && (typeof(employeeName)) != null && employeeName!= '') {
						console.log('Всё верно!');				
						mainList.employers[i] = employeeName;
					} else {
						alert('Введите имя верно');
						i--;
					};
			};
		},
		workTime: function workTime(shopTime) {
			if (shopTime < 0) {
				console.log('Такого не может быть!');
			} else if (shopTime > 8 && shopTime < 20) {
				console.log('Время работать!');
				mainList.shopOpen = true;
				} else if (shopTime < 24) {
					console.log('Уже слишком поздно!');
					} else {
						console.log('В сутках только 24 часа!')
					};
		},
		budgetPerDay: function budgetPerDay() {
		    alert('Бюджет на 1 день: ' + mainList.shopBudget / 30);
		    console.log('Бюджет на 1 день: ' + mainList.shopBudget / 30);
		},
		discountPrice: function discountPrice() {
			if (mainList.discount == true) {
				alert('Вы получили скидку');
				price = prompt('Введите цену товара: ', '')
				discPrice = price*0.8;
				alert(discPrice);
			};
		}
	};
/*
employeeHire ();
discountPrice();
budgetPerDay();
workTime(18);
console.log(mainList);
*/

let totalMain = function totalMain() {
				for (var key in mainList) {
					console.log('Наш магазин включает в себя: ' + mainList[key]);
		}
	},
	outTotalG = document.getElementById('outToalG');
	
document.getElementById('budgetPD').onclick = mainList.budgetPerDay;
document.getElementById('employeeH').onclick = mainList.employeeHire;
document.getElementById('chooseG').onclick = mainList.chooseGoods;
document.getElementById('chooseSI').onclick = mainList.chooseShopItems;
//document.getElementById('outTotalG').onclick = outTotalG;
document.getElementById('total').onclick = totalMain;


