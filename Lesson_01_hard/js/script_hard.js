var num = 33721;
	multipl = eval(num.toString().split('').join('*'));
console.log(multipl);
var powResult = (Math.pow(multipl, 3));
alert(powResult.toString().substring(0,2));