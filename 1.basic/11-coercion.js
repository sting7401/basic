/** 타입 변환
 *
 * 1) 명시적
 * 2) 암묵적
 */

let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge);

let test = age + '';
console.log(typeof test, test);

/** 명시적 변환 */

console.log(typeof (99).toString());
console.log(typeof true.toString());
console.log(typeof Infinity.toString());

// 숫자 타입 변환
console.log(typeof parseInt('0'));
console.log(typeof parseFloat('0.9'));
console.log(typeof +'1');

/** Boolean */
console.log(!'x'); // false
console.log(!!'x'); // true
console.log(!!''); // true

console.log(!!0); // false
console.log(!!'0'); // true

console.log(!!'false'); // true
console.log(!!false); // false
console.log(!!undefined); // false
console.log(!!null); // false

console.log(!!{}); // true
console.log(!![]); // true

/**
 * 1. 아무 글자 없는 경우 String
 * 2. 값이 없는 경우 false
 * 3. 0 false
 */
