// Функция sum должна возвращать тип данных true. Проверить её на это.

function sum(a, b) {
	return a + b > 10;
}
sum(2,2)

// Переменная num должна быть равна 5. Проверить на соответствие.

let arrA = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arrA[1][1];

// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

var each = function(startArr, f){return f(startArr)};
var arr = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arr, myFunc));
console.log(typeof each(arr, myFunc));

let assert = require('chai').assert;

describe('myTests', function() {

	it ('mytests', function() {
		assert.equal(sum(6,6), true);
		assert.equal(num, 5);
		assert.typeOf(each(arr,myFunc), 'array');
		assert.equal(Array.isArray(each(arr, myFunc)), Array.isArray([8, 7, 6, 5, 4]));
		assert.property(each(arr,myFunc), 'length');

	})
})
