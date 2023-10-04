/**
 * property attribute
 *
 * 1. 데이터 프로퍼티 - 키 & 값
 * 2. 엑세서 프로퍼티 - 다른 값을 가져오거나 설정할떄  getter, setter
 */

const title = {
	name: '이름',
	year: 2000,
};

console.log(Object.getOwnPropertyDescriptor(title, 'name'));
console.log(Object.getOwnPropertyDescriptor(title, 'year'));

/**
 * 1. value - 실제 프로퍼티의 값
 * 2. writable = 수정할수 있는지 여부, false 시 수정 불가
 * 3. enumerable = 열거가 가능한지 여부, for in , for of true 반환
 * 4. configurable = property attribute 의 재정의, false 일 경우 삭제나 변경 금지, 단 writable이 true 인 경우 값 변경과 writable의 변경은 가능
 */

console.log(Object.getOwnPropertyDescriptors(title));

const title2 = {
	name: '이름',
	year: 2000,

	get age() {
		return new Date().getFullYear() - this.year;
	},

	set age(age) {
		this.year = new Date().getFullYear() - age;
	},
};

console.log(title2);
console.log(title2.age);
title2.age = '30';
console.log(title2.age);

console.log(Object.getOwnPropertyDescriptor(title2, 'age'));

Object.defineProperty(title2, 'height', {
	value: 170,
	writable: true,
	enumerable: true,
	configurable: true,
});

Object.defineProperty(title2, 'width', {
	writable: false,
});
title2.height = 180;
console.log(title2);
