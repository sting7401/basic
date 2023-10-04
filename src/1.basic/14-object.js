/** Object
 *
 */

// key: value
let objectList = {
	name: '홍길동',
	group: '그룹',
	this: function () {
		return `this: ${this.name} , this:${this.group}`;
	},
	init: (name = objectList.name, group = objectList.group) => {
		return `${name} = ${this.group}`;
	},
	event: ({ name, group } = objectList) => {
		return `${name} : ${group}`;
	},
};

console.log(objectList.name);
console.log(objectList['group']);
console.log(objectList.this());
console.log(objectList.init());
console.log(objectList.event());

const nameKey = 'name';
const nameValue = '김종수';

const groupKey = 'group';
const groupValue = 'group';

const objectListChange = {
	[nameKey]: nameValue,
	[groupKey]: groupValue,
};

console.log(objectListChange);

objectListChange[groupKey] = 'groupChange';
console.log(objectListChange);

objectListChange['add'] = '추가';
console.log(objectListChange);

delete objectListChange['add'];
console.log(objectListChange);

/**
 * 객체의 특징
 *
 * 1.  const 로 선언할 경우 객체 작체는 변경 할수 없다.
 * 2. 객체 안의 프로퍼티나 메서는 변경 할수 있다.
 */

const newObject = {
	name: '새',
	group: '몰라',
};
console.log(newObject);

// 모든 키 값 가져오기

console.log(Object.keys(newObject));
console.log(Object.values(newObject));

const name = 'newObject';

const newObject2 = {
	name,
	group: null,
};
console.log(newObject2);
