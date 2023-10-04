/**
 *
 * function
 */

function numbering(start = 1, end = 1) {
	return (((start * 10) / 2) % end).toString();
}
numbering(2, 3);
console.log(numbering(3, 4));

function numberingMulti(x = 1, y = 1) {
	console.log(x * y);
}

numberingMulti();

// 반환 return

const returnNumbers = (x, y) => {
	console.log(x, y);

	return x * y;
};

const resultNumber = returnNumbers(1, 20);
console.log(resultNumber);

/** arrow */
const multiArrow = (x, y) => x * y;
console.log(multiArrow(1, 4));

const multiArrowAdd = x => y => z => `${x} + ${y} + ${z}`;

console.log(multiArrowAdd(1)(4)(5));

const multiThree = function (x, y, z) {
	console.log(arguments);
	return x * y * z;
};
console.log(multiThree(1, 3, 2));

const multiAll = (...props) => {
	return Object.values(props).reduce((a, b) => a + b);
};
console.log(multiAll(1, 2, 4, 5, 3));

// 즉시 실행 함수
(function (x, y) {})();

console.log(typeof multiArrow);
console.log(multiArrow instanceof Object);
