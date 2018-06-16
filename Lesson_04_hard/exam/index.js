
/*
function getRigthNumber() {
	let numbInit = prompt('Введите число диапазона', '');
	//Этот блок будет проверять аргументы на условия: только числа, не отрицательный диапазон, не дробные числа
		if ((isNaN(numbInit)) != 'true' && (numbInit ^ 0) === numbInit && numbInit > 0) {
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
	if (firstCompareNumber <= secondCompareNumber) {
		return (firstCompareNumber, secondCompareNumber);
	} else {
		alert('Введите аргументы верно! Первый аргумент не должен быть больше второго');
		console.log('Число 1 больше числа 2');
		return false;
	}
};
*/

function getFriendlyNumbers(start, end) {
	let friendlyArray = [];
		if ((isNaN(start)) != 'true' && (isNaN(end)) != 'true' && Number.isInteger(start) && Number.isInteger(end) && start > 0 && end > 0 && start <= end) {
			for (let i = start; i <= end; i++) {
				for (let j = start; j <= end; j++) {
					//let firstSumNumber = findDivSum(i); 			//Заносим в переменую сумму делителей первого числа
					//let secondSumNumber = findDivSum(j);			//Заносим в переменую сумму делителей второго числа
					//Сравниваем первое число с суммой делителей второго и второе число с суммой делителей первого
					if (findDivSum(i) == j && findDivSum(j) == i && i > j && i !== j) {
						friendlyArray.push(([i, j]).sort());
					}
				}
			}
		} else {
			//alert('Введите аргумент верно');
			return false;
			}
    return friendlyArray;
}

//Эта функция сначала принимает число, а потом отдает сумму его делителей
function findDivSum(num) {
	return sumDivisors(findDivisors(num));
};

//Эта функция находит целочисленные делители для числа и вносит их в массив
function findDivisors(num) {
	let divisorsArray = [];
	for (let q = 1; q < num; q++) {
		if (num % q == 0) {
			divisorsArray.push(q);
		}
	}
	return (divisorsArray);
};

//Эта функция собирает сумму делителей для числа из массива
function sumDivisors(divisorsArray) {
	let sumDivArr = 0;
	for (let w = 0; w < divisorsArray.length; w++) {
		sumDivArr += divisorsArray[w];
	}
	return sumDivArr;
};

module.exports = {
    firstName: 'Andrei',
    secondName: 'Kosianok',
    task: getFriendlyNumbers
}