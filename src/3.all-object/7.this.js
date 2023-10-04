/**
 * this
 *
 * js는 lexical scope이기 때문에 함수에 상위 스코프가 정의시점에 따라 바뀜,
 * this 키워드는 바인딩이 객체가 생성되는 시점에서 결정된다.
 */

const testFunction = function () {
	return this;
};
console.log(testFunction());
console.log(testFunction() === global);

const vars = {
	name: '이름',
	year: 2000,

	sub: () => {
		return `${this.name} 서브 확인`;
	},
};

function Person(name, age) {
	this.name = name;
	this.age = age;

	this.say = () => {
		return ` ${this.name}`;
	};
}

const person = new Person('John', 20);
console.log('🚀 ~ file: 7.this.js:33 ~ person:', person);

Person.prototype.sub = function () {
	const { name } = this;

	function sub2(text = '') {
		return `${text}!!`;
	}

	return sub2(name);
};
console.log(person.sub());

/**
 * this 키워드가 가리키는 3가지
 *
 * 1. 일반 함수 호출할 때 this가 최상위 객체 (global, window)
 * 2. 메서드로 호출 할 때 호출된 객체
 * 3. new 키워드 사용 해서 객체를 생성했을 땐 객체를 가리킴
 */

/**
 * 1. apply()
 * 2. call()
 * 3. bind()
 */

function returnName() {
	if (this === undefined) return;
	return this.name;
}

console.log(returnName());

const vars2 = {
	name: '이름',
};
console.log(returnName.call(vars2));
console.log(returnName.apply(vars2));
console.dir(returnName.bind(vars2));

/** 1. call() - 컴마를 기본으로 argument를 순서대로
 *  2. apply() - argument를 리스트로 입력해야함
 */

function multiply(x, y, z) {
	if (this === undefined) return;
	return `${this.name} / 결과값 :${x * y * z}`;
}

console.log(multiply.call(vars2, 3, 4, 5)); // 순서대로
console.log(multiply.apply(vars2, [3, 4, 5])); // 배열로

/**
 * bind()
 * 나중에 실행 해야 함
 */
const laterFunction = multiply.bind(vars2, 3, 4, 5);
console.dir(laterFunction);
console.log(laterFunction, laterFunction());
