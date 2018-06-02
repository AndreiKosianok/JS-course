let money,
	name,
	shopTime,
	price,
	dayBudget;
	
function shopStart() {
	money = prompt("Ваш бюджет на месяц?");

	while (isNaN(money) || money == '' || money == null) {
		money = prompt("Ваш бюджет на месяц?");
	};

	name = prompt("Введите название вашего магазина").toUpperCase();
	shopTime = 15;
};

shopStart();

let mainList = {
		shopBudget: money,
		shopName: name,
		shopGoods: [],
		employers: {},
		shopOpen: true,
		discount: false
	};

function discountPrice () {
	if ((typeof(mainList.discount)) === 'true') {
		price*0.8
	};
};

for (let i = 0; i <= 2; i++) {
	let a = prompt("Какой тип товаров будем продавать?");
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a!= '' && a.length < 50) {
			console.log('Всё верно!');
			mainList.shopGoods[i] = a;
		} else {
			alert('Введите название верно');
			i--;
		};
	};

function employeeHire () {
	for (let i = 0; i < 4; i++) {
		let employeeName = prompt("Введите имя " + [i+1] + "-го сотрудника");
			if ((typeof(employeeName)) === 'string' && (typeof(employeeName)) != null && employeeName!= '') {
				console.log('Всё верно!');				
				mainList.employers[i] = employeeName;
			} else {
				alert('Введите имя верно');
				i--;
			};
	};
};

employeeHire ();

function workTime(shopTime) {
	if (shopTime < 0) {
		console.log('Такого не может быть!');
	} else if (shopTime > 8 && shopTime < 20) {
		console.log('Время работать!')
		} else if (shopTime < 24) {
			console.log('Уже слишком поздно!');
			} else {
				console.log('В сутках только 24 часа!')
			};
};

workTime(18);

function budgetPerDay() {
    alert('Бюджет на 1 день: ' + mainList.shopBudget / 30);
};

budgetPerDay();

console.log(mainList);
console.log(mainList.employers);