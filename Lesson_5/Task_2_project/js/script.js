let openButton = document.getElementById('open-btn');
	mainLeftField = document.getElementsByClassName('main-info')[0]; //Это вывод их в консоль раскрывающимся списком, но я понятия не имею как с ним дальше работать
	leftFieldsDiv = mainLeftField.getElementsByTagName('div'), //А этим костылём они 'по отдельности' в консоль вываливаются в виде массива
	shopName = mainLeftField.getElementsByClassName('name');
console.log(mainLeftField);
console.log(leftFieldsDiv);

let goodsItem = document.getElementsByClassName('goods-item');
	for(let i = 0; i < goodsItem.length; i++) {
		console.log(goodsItem[i]);
		};

let buttons = document.getElementsByTagName('button'); //На странице 4 кнопки
console.log(buttons);

let chooseItems = document.querySelector('.choose-item'),
	currentTime = document.querySelector('.time-value'),
	budgetCount = document.querySelector('.count-budget-value'),
	hireEmployers = document.querySelectorAll('.hire-employers-item');
console.log(chooseItems);
console.log(currentTime);
console.log(budgetCount);
console.log(hireEmployers);