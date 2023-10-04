/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 *
 * 1. 기본적으로 모든 primitive 값은 copy by value
 * 2. 객체는 copy by reference
 */

let original = 'ji';
let clone = original;

console.log(clone);

clone += 'hi의 오타';
console.log(clone);

let oriObject = {
	name: '새',
	group: '몰라',
};
let cloneObject = oriObject;
console.log(oriObject);
console.log(cloneObject);

oriObject['group'] = '바꾸기';
console.log(oriObject);
console.log(cloneObject);

oriObject = {
	name: '새',
	group: '몰라',
};
cloneObject = {
	name: '새',
	group: '몰라',
};

console.log(oriObject === cloneObject);

const check = {
	name: '이름',
	group: '그룹',
};
const check2 = check;
const check3 = {
	name: '이름',
	group: '그룹',
};

console.log(check === check2, check === check3, check2 === check3);

/**
 *
 * spread operator
 */

const check4 = {
	...check3,
};
console.log(check4 === check3);

const check5 = {
	year: 2000,
	...check3,
};

console.log(check5);

const check6 = {
	...check3,
	name: 2000,
};

console.log(check6);

const numbers = [1, 2, 3];
const nembers2 = [10, ...numbers, 8];
console.log(nembers2);
