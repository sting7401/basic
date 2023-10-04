/**
 *
 * All about objects
 *
 * 객체를 선언 할때
 *
 * 1. object = {}
 * 2. class {}
 * 3. function
 */

const title = {
	name: '이름',
	year: 2000,
};

class Model {
	name;
	year;

	constructor(name, year) {
		this.name = name;
		this.year = year;
	}
}

function ModelFunction(name, year) {
	this.name = name;
	this.year = year;
}

const modelFunction = new ModelFunction('이름', 2023);

console.log(modelFunction);
