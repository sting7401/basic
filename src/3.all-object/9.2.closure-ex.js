function getNumber() {
	var number = 5;

	function innerGetNumber() {
		return number;
	}

	return innerGetNumber;
}

const numbers = getNumber();

console.log(numbers);
console.log(numbers());

/**
 * 1. 데이터 캐싱
 */

function cacheFunction(newNumber) {
	// 아래 계산이 매우 오래걸린 다는 가정
	var number = 10 * 10;

	function innerCacheFunction(newNumber) {
		return number * newNumber;
	}

	return innerCacheFunction;
}

const run2 = cacheFunction();

console.log(run2(20));

/**
 * 2. 반복적으로
 */

function cacheFunction2() {
	// 아래 계산이 매우 오래걸린 다는 가정
	var number = 10 * 10;

	function increment() {
		number += 1;

		return number;
	}

	return increment;
}
const run3 = cacheFunction2();
console.log(run3());
console.log(run3());

/**
 * 3. 정보은닉
 */

function Model(name, year) {
	this.name = name;

	var _year = year;

	this.say = function () {
		return `${_year} / ${this.name}`;
	};
}

const model = new Model('이름', 2000);
console.log(model.say());
