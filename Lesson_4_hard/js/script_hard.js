/*
let startNumber = 220,
	endNumber = 284;
*/

//switchNumbers();
getFriendlyNumbers();

function getRigthNumber() {	//Функция проверяет передачу правильных аргументов для диапазона
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

function compareInitNumbers(getnumbInit) {
	let firstCompareNumber = getRigthNumber(getnumbInit),
		secondCompareNumber = getRigthNumber(getnumbInit);
	if (firstCompareNumber < secondCompareNumber) {
		console.log(firstCompareNumber, secondCompareNumber)
	} else {
		alert('Введите аргументы верно! Первый аргумент не должен быть больше второго');
		console.log('Число 1 больше числа 2');
		return false;
	}
return [firstCompareNumber, secondCompareNumber];
};

function switchNumbers(compareNumber) {
	let getCompareInit = compareInitNumbers();
		i = getCompareInit[0],
		j = getCompareInit[1];
		console.log(i,j);
	for (; i < j; i++) { //Определяем диапазон соответственно введенным числам
		let switchNumberOne = i,
			switchNumberTwo = j;
		return [switchNumberOne, switchNumberTwo];
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

//Эта функция принимает число и отдает сумму его делителей
function findDivSum(num) {
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
	console.log(divisorsArray);
	return divisorsArray;
};

//Эта функция собирает сумму делителей для числа из массива
function sumDivisors(divisorsArray) {
	let sumDivArr = 0;
	for (let i = 0; i < divisorsArray.length; i++) {
		sumDivArr += divisorsArray[i];
	};
	console.log(sumDivArr);
	return sumDivArr;
};