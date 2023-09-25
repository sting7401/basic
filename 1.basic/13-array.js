/** function array
 *
 */

let isArray = ['1', '2', '3', '4', '5'];

// push() 마지막 배열 추가
isArray.push('마지막 배열');
console.log('🚀 ~ file: 13-array.js:6 ~ isArray:', isArray);

// pop() 마지막 배열 삭제
console.log(isArray.pop());
console.log('🚀 ~ file: 13-array.js:6 ~ isArray:', isArray);

// shift()
console.log(isArray.shift());
console.log('🚀 ~ file: 13-array.js:6 ~ isArray:', isArray);

// unshift()
console.log(isArray.unshift('이름'));
console.log('🚀 ~ file: 13-array.js:6 ~ isArray:', isArray);

console.log(isArray.splice(0, 3));
console.log(isArray);

// 상단 기존 변수를 건드리게 됨

isArray = ['가', '차', '하', '나', '6'];

// concat
console.log(isArray.concat('concat'));
console.log(isArray);

// slice()
console.log(isArray.slice(0, 3));
console.log(isArray);

// toSliced()
console.log(isArray.toSliced(0, 2));

// spread operator
let isArray2 = [...isArray];

console.log(isArray2 === isArray);

// join()
console.log(isArray2.join('/', ''));
console.log(isArray2.join(',', ''));

// sort(), reverse()
const isArrayReverse = [...isArray].reverse();
console.log(isArrayReverse, isArrayReverse.sort());

let members = [1, 9, 3, 4, 6];

/**
 * a,b를 비교 했을 때
 * 1. a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
 * 2. a를 b 보다 먼저 정렬하려면 (앞에 두려면) 0 보다 작은 숫자를 반환
 * 3. 원래 순서를 그대로 두려면 0을 반환
 */
members.sort((a, b) => {
	return a > b ? 1 : -1;
});
console.log(members);

members.sort((a, b) => {
	return a > b ? -1 : 1;
});
console.log(members);
members.toSorted((a, b) => {
	return a > b ? 1 : -1;
});
console.log('toSorted' + members);
members.toReversed((a, b) => {
	return a > b ? 1 : -1;
});
console.log('toReversed' + members);

// map()
console.log(isArray.map(item => `배열: ${item}`));
console.log(
	isArray.map(item => {
		if (item === '가') {
			return `${item}`;
		} else {
			return `배열: ${item}`;
		}
	}),
);

// filter()
members = [1, 9, 3, 4, 2];
console.log(members.filter(item => item % 2 === 0));

// find()
console.log(members.find(item => item % 2 === 0));

// findIndex()
console.log(members.findIndex(item => item % 2 === 0));

// findLastIndex()
console.log(members.findLastIndex(item => item % 2 === 0));
// findLast()
console.log(members.findLast(item => item % 2 === 0));

// reduce()
console.log(members.reduce((prev, next) => prev + next, 0));
