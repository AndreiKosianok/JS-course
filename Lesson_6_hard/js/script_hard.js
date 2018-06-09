let openButton = document.getElementById('open-btn'),
	shopName_value = document.getElementsByClassName('name-value')[0],
	budget_value = document.getElementsByClassName('budget-value')[0],
	goods_value = document.getElementsByClassName('goods-value')[0],
	goods_value_input = document.getElementsByTagName('input')[0],
	items_value = document.getElementsByClassName('items-value')[0],
	employers_value = document.getElementsByClassName('employers-value')[0],
	discount_value = document.getElementsByClassName('discount-value')[0],
	isOpen_value = document.getElementsByClassName('isopen-value')[0],
	goods_item = document.getElementsByClassName('goods-item'),
	goods_item_button = document.getElementsByTagName('button')[1],
	count_budget_button = document.getElementsByTagName('button')[2],
	hire_employers_button = document.getElementsByTagName('button')[3],
	choose_item = document.querySelector('.choose-item'),
	time_value = document.querySelector('.time-value'),
	count_budget_value = document.querySelector('.count-budget-value'),
	hire_employers_item = document.querySelectorAll('.hire-employers-item'),
	hire_employers_input = document.getElementsByTagName('input')[7];

let money,
	name,
	price,
	discPrice;

const mainList = {
		shopBudget: money,
		shopName: name,
		shopGoods: [],
		employers: {},
		shopOpen: true,
		discount: false,
		shopItems: []
	};

// Кнопка "Открыть магазин"
count_budget_button.disabled = true;
openButton.addEventListener('click', () => {
		money = prompt("Ваш бюджет на месяц?", '');

		while (isNaN(money) || money === '' || money === null) {
			money = prompt("Ваш бюджет на месяц?", '');
		};
		mainList.shopBudget = money;
		budget_value.textContent = mainList.shopBudget;
		count_budget_button.disabled = false;

		name = prompt("Введите название вашего магазина", '');
		while (name == '' || name == null) {
			name = prompt("Введите название вашего магазина", '');
		};
		
		mainList.shopName = name.trim().toUpperCase();
		shopName_value.textContent = mainList.shopName;
});

// Категории товаров
goods_item_button.disabled = true;
goods_value_input.onchange = emptyGoodsValue;

function emptyGoodsValue() {
	if (goods_item[0].value != '') {
		goods_item_button.disabled = false;
	}

};

goods_item_button.addEventListener('click', () => {
	emptyGoodsValue();
	for (let i = 0; i < goods_item.length; i++) {
				let a = goods_item[i].value;
					if ((typeof(a)) == 'string' && (typeof(a)) != null && a.length < 50) {
						console.log('Всё верно!');
						mainList.shopGoods[i] = a;
						goods_value.textContent = mainList.shopGoods;
					} else {
						i--;
					}
			}

});

// Наименования товаров
choose_item.addEventListener('change', () => {
	let items = choose_item.value;
	if (isNaN(items) && items != '') {
		mainList.shopItems = items.split(',');
		mainList.shopItems.sort();
		items_value.textContent = mainList.shopItems;
	} else {
		console.log('error')
	}
});

// Открыто/закрыто
time_value.addEventListener('change', () => {
		if (time_value.value < 8) {
			console.log('Магазин ещё закрыт!');
			console.log(time_value.value);
			mainList.shopOpen = false;
			mainList.discount = false;
		} else if (time_value.value >= 8 && parseInt(time_value.value) <= 18) {
				console.log('Время работать!');
				mainList.shopOpen = true;
				isOpen_value.style.backgroundColor = 'green';
				mainList.discount = false;
				discount_value.style.backgroundColor = 'red';
			} else if (time_value.value > 18 && parseInt(time_value.value) < 24) {
					console.log('Время скидок');
					mainList.shopOpen = true;
					isOpen_value.style.backgroundColor = 'green';
					mainList.discount = true;
					discount_value.style.backgroundColor = 'green';
					discountPrice();
					} else {
						mainList.shopOpen = false;
						mainList.discount = false;
						console.log('В сутках только 24 часа!');
						}
});

// Расчет дневного бюджета
count_budget_value.readOnly = true;
count_budget_button.addEventListener('click', () => {
	count_budget_value.value = money / 30;
});

// Имена сотрудников
hire_employers_button.disable = true;
hire_employers_input.onchange = emptyEmployersItem;

function emptyEmployersItem () {
	if (hire_employers_item[0].value !='') {
		hire_employers_button.disable = false;
	}
};

hire_employers_button.addEventListener('click', () => {
	for (let i = 0; i < hire_employers_item.length; i++) {
				let employeeName = hire_employers_item[i].value;
					if ((typeof(employeeName)) === 'string' && (typeof(employeeName)) != null && employeeName!= '') {
						console.log('Всё верно!');				
						mainList.employers[i] = employeeName;
						employers_value.textContent += mainList.employers[i] + ", ";
					}
	};
});

// Скидки действуют с 18 до 24 часов
function discountPrice() {
	if (mainList.discount == true) {
		alert('Действуют скидки');
		price = prompt('Введите цену товара: ', '')
		discPrice = price*0.8;
		alert(discPrice);
	}
};

