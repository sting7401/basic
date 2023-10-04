/**
import { chalk } from 'chalk';
 * prototype
 */

const textObj = {};
// __proto__ 모든 객체에 존재 하는 프로퍼티
// class 에서 상속에서 부모 클래스에 해당하는 값
console.log('🚀 ~ file: 5.prototype-chain.js:6 ~ textObj:', textObj.__proto__);

function Model(name, year) {
	this.name = name;
	this.year = year;
}

console.dir(Model.prototype, {
	showHidden: true,
});

// circular reference
console.log(Model.prototype.constructor === Model);
console.log(Model.prototype.constructor.prototype === Model.prototype);

const model = new Model('이름', 1900);

console.log(model.__proto__);
console.log(model.__proto__ === Model.prototype);

console.log(textObj.__proto__ === Object.prototype);

console.log(Model.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Model.prototype.__proto__ === Object.prototype);

console.log(model.toString());
console.log(Object.prototype.toString());

function Model2(name, year) {
	this.name = name;
	this.year = year;

	this.say = function () {
		return `${this.name} ${this.year}`;
	};
}

const model2 = new Model2('이름2', 2020);
const model22 = new Model2('이름22', 2022);

console.log(model2.say === model22.say);

console.log(model2.hasOwnProperty('say'));

function Model3(name, year) {
	this.name = name;
	this.year = year;
}

Model3.prototype.say = function () {
	return `${this.name} ${this.year}`;
};

const model3 = new Model3('이름2', 2020);
const model33 = new Model3('이름22', 2022);

console.log(model3.say === model33.say);

console.log(model3.hasOwnProperty('say'));

model3.sayStatic = function () {
	return 'static method';
};

console.log(model3.sayStatic());

/**
 * overriding
 */

function Model4(name, year) {
	this.name = name;
	this.year = year;

	this.say = function () {
		return `${this.name} ${this.year} instance method`;
	};
}

Model4.prototype.say = () => {
	return 'prototype method';
};

const model4 = new Model4('test', 1000);

// 프로퍼티 셰도잉 -- class 에서 override
console.log(model4.say());

/** getPrototypeOf, setPrototypeOf
 *
 * 인스턴스의 __proto__ vs 함수의 prototype 변경
 */

function Model5(name, year) {
	this.name = name;
	this.year = year;

	this.say = function () {
		return `${this.name} ${this.year} instance method`;
	};
}

Model5.prototype.say = function () {
	return 'prototype method';
};

function ChildModel5(name, year) {
	this.name = name;
	this.year = year;

	this.sub = function () {
		return `${this.name} ${this.year} instance method 2`;
	};
}

const model5 = new Model5('모델5', 2001);
const model55 = new ChildModel5('모델55', 2021);

console.log(model5.__proto__);
console.log(model5.__proto__ === Model5.prototype);
console.log(Object.getPrototypeOf(model5) === Model5.prototype);

console.log(model5.say());
console.log(model55.sub());
console.log(Object.getPrototypeOf(model55) === ChildModel5.prototype);

Object.setPrototypeOf(model55, Model5.prototype);
console.log(model55.say());

console.log(model55.constructor === ChildModel5);
console.log(model55.constructor === Model5);
console.log(model5.constructor === Model5);
console.log(Object.getPrototypeOf(model55) === ChildModel5.prototype);
console.log(ChildModel5.prototype === Model5.prototype);

ChildModel5.prototype = Model5.prototype;

const model555 = new ChildModel5('모델555', 2200);
console.log(Object.getPrototypeOf(model555) === ChildModel5.prototype);
console.log(ChildModel5.prototype === Model5.prototype);

console.log(model55.sub());
