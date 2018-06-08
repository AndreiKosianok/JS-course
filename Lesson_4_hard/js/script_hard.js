/*
let startNumber = 220,
	endNumber = 284;
*/

getFriendlyNumbers();

//Функция проверяет передачу правильных аргументов для диапазона: число, не дробное. не отрицательное

function getRigthNumber() {
	let numbInit = prompt('Введите число диапазона', '');
	//Этот блок будет проверять аргументы на условия: только числа, не отрицательный диапазон, не дробные числа
		if ((isNaN(numbInit)) != 'true' && (Number.isInteger(+numbInit)) && numbInit > 0) {
				console.log('Число верно!');
		} else {
				alert('Введите аргумент верно');
				return false;
		}
return numbInit;
};

//Функция проверяет передачу правильных аргументов для диапазона: что первое число меньше второго

function compareInitNumbers(getnumbInit) {
	let firstCompareNumber = getRigthNumber(getnumbInit),
		secondCompareNumber = getRigthNumber(getnumbInit);
	if (firstCompareNumber < secondCompareNumber) {
		return [firstCompareNumber, secondCompareNumber];
	} else {
		alert('Введите аргументы верно! Первый аргумент не должен быть больше второго');
		console.log('Число 1 больше числа 2');
		return false;
	}
};

//эта функция сравнивает два числа с суммами их делителей
function getFriendlyNumbers(switchNumber) {
	let getCompareInit = compareInitNumbers(), //присваиваем функцию в переменную для более удобного доступа к возвращаемым данным
		i = +getCompareInit[0], //присваиваем первой переменной значение начала интервала
		z = +getCompareInit[1]; //присваиваем второй переменной значение конца интервала 
	console.log(i,z + ' функция перебора диапазона');
	for (; i <= z; i++) {
		for (j = i; j <= z; j++) { 
			let firstSumNumber = findDivSum(i); 			//Заносим в переменую сумму делителей первого числа
			let secondSumNumber = findDivSum(j);			//Заносим в переменую сумму делителей второго числа
			//Сравниваем первое число с суммой делителей второго и второе число с суммой делителей первого
			if (i == secondSumNumber && firstSumNumber == j && i != j) {
				console.log(firstSumNumber, secondSumNumber);
				console.log(i,j); 			//если сравнение верное - возвращаем два числа
			} else {
				console.log(firstSumNumber);
				console.log([]);
			} 
		}
	}
}

//Эта функция сначала принимает число, а потом отдает сумму его делителей
function findDivSum(num) {
	console.log(sumDivisors(findDivisors(num)) + ' функция-посредник');
	return sumDivisors(findDivisors(num));
};

//Эта функция находит целочисленные делители для числа и вносит их в массив
function findDivisors(num) {
	let divisorsArray = [];
	for (let q = 1; q < num; q++) {
		if (num % q == 0) {
			divisorsArray.push(q);
		};
	};
	console.log(divisorsArray + ' функция нахождения целочисленных делителей');
	return divisorsArray;
};

//Эта функция собирает сумму делителей для числа из массива
function sumDivisors(divisorsArray) {
	let sumDivArr = 0;
	for (let w = 0; w < divisorsArray.length; w++) {
		sumDivArr += divisorsArray[w];
	};
	console.log(sumDivArr + ' функция суммирования делителей');
	return sumDivArr;
};