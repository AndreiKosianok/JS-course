/*
let startNumber = 220,
	endNumber = 284;
*/

//switchNumbers();
getFriendlyNumbers();

//Функция проверяет передачу правильных аргументов для диапазона: число, не дробное. не отрицательное

function getRigthNumber() {
	let numbInit = prompt('Введите число диапазона', '');
	console.log(typeof(numbInit));
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
		console.log(firstCompareNumber, secondCompareNumber + 'функция a<b')
	} else {
		alert('Введите аргументы верно! Первый аргумент не должен быть больше второго');
		console.log('Число 1 больше числа 2');
		return false;
	}
return [firstCompareNumber, secondCompareNumber];
};
/*
//Предполагается, что эта функция бедет заполнять массив парами чисел из заданного диапазона
function switchNumbers(compareNumber) {
	let getCompareInit = compareInitNumbers(), //присваиваем функцию в переменную для более удобного доступа к возвращаемым данным
		switchNumberOne = +getCompareInit[0], //присваиваем первой переменной значение начала интервала
		j = +getCompareInit[1], //присваиваем второй переменной значение конца интервала 
		switchNumberTwo = +switchNumberOne + 1;
	for (; switchNumberOne < j;switchNumberOne++) { //Определяем диапазон соответственно введенным числам
		switchNumberOne;
		console.log(switchNumberOne, j);
		for (;switchNumberTwo < j;switchNumberTwo++) {
			switchNumberTwo;
			console.log(switchNumberOne, switchNumberTwo);
			return [switchNumberOne, switchNumberTwo];
		}
	}
};


//эта функция сравнивает два числа с суммами их делителей
function getFriendlyNumbers(switchNumber) {
	let getSwitchNumber = switchNumbers(),
		startNumber = getSwitchNumber[0],
		endNumber = getSwitchNumber[1];
	console.log(startNumber, endNumber);
	let firstSumNumber = findDivSum(startNumber); 			//Заносим в переменую сумму делителей первого числа
	let secondSumNumber = findDivSum(endNumber);			//Заносим в переменую сумму делителей второго числа
	//Сравниваем первое число с суммой делителей второго и второе число с суммой делителей первого
	if (startNumber == secondSumNumber && firstSumNumber == endNumber) {
		console.log(firstSumNumber, secondSumNumber); 			//если сравнение верное - возвращаем два числа
	} else {
		console.log(firstSumNumber);
		console.log([]);
	} 
}
*/

//эта функция сравнивает два числа с суммами их делителей
function getFriendlyNumbers(switchNumber) {
	let getCompareInit = compareInitNumbers(), //присваиваем функцию в переменную для более удобного доступа к возвращаемым данным
		i = +getCompareInit[0], //присваиваем первой переменной значение начала интервала
		z = +getCompareInit[1]; //присваиваем второй переменной значение конца интервала 
	console.log(i, z + 'функция перебора диапазона');
	for (; i <= z; i++) {
		for (j = i; j <= z; j++) {
			let firstSumNumber = findDivSum(i); 			//Заносим в переменую сумму делителей первого числа
			let secondSumNumber = findDivSum(j);			//Заносим в переменую сумму делителей второго числа
			//Сравниваем первое число с суммой делителей второго и второе число с суммой делителей первого
			if (i == secondSumNumber && firstSumNumber == j) {
				console.log(firstSumNumber, secondSumNumber); 			//если сравнение верное - возвращаем два числа
			} else {
				console.log(firstSumNumber);
				console.log([]);
			} 
		}
	}
}

//Эта функция сначала принимает число, а потом отдает сумму его делителей
function findDivSum(num) {
	console.log(sumDivisors(findDivisors(num)) + 'функция-посредник');
	return sumDivisors(findDivisors(num));
};

//Эта функция находит целочисленные делители для числа и вносит их в массив
function findDivisors(num) {
	let divisorsArray = [];
	for (let i = 1; i < num; i++) {
		if (num % i == 0) {
			divisorsArray.push(i);
		};
	};
	console.log(divisorsArray + 'функция нахождения целочисленных делителей');
	return divisorsArray;
};

//Эта функция собирает сумму делителей для числа из массива
function sumDivisors(divisorsArray) {
	let sumDivArr = 0;
	for (let i = 0; i < divisorsArray.length; i++) {
		sumDivArr += divisorsArray[i];
	};
	console.log(sumDivArr + 'функция суммирования делителей');
	return sumDivArr;
};