/**
 * closure
 *
 * 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합
 *
 * 상위 함수보다 하위함수가 오래 유지 될 경우 closure
 */

// function getNumber() {
// 	var number = 5;

// 	function innerGetNumber() {
// 		return number;
// 	}

// 	return innerGetNumber();
// }

// console.log(getNumber());

function getNumber() {
	var number = 5;

	function innerGetNumber() {
		return number;
	}

	return innerGetNumber;
}

const numbers = getNumber();

console.log(numbers);
