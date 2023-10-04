/** getter ans setter */

class Models {
	static #name = '';
	static #year = 0;

	constructor(name, year) {
		Models.#name = name;
		Models.#year = year;
	}

	sayName() {
		return `이름 : ${Models.#name} / 년도 : ${Models.#year}`;
	}

	/**
	 * 1. 데이터를 가공해서 새로운 데이터를 반활 할떄
	 * 2. primitive한 값을 반환 할때
	 */
	get nameAndYear() {
		return `이름 : ${Models.#name} / 년도 : ${Models.#year}`;
	}

	/**
	 * 1. 데이터를 가공해서 새로운 데이터를 저장 할떄
	 * 2. primitive한 값을 저장 할때
	 */
	set setName(name) {
		Models.#name = name;
	}
}

const models1 = new Models('이름', 2023);
console.log(models1);
console.log(models1.nameAndYear);

models1.setName = '세팅값';
console.log(models1.sayName);

class Models2 {
	#name;
	year;

	constructor(name, year) {
		this.#name = name;
		this.year = year;
	}

	get name() {
		return this.#name;
	}

	set name(name) {
		return (this.#name = name);
	}

	static get year() {
		return this.year;
	}

	static set year(year) {
		return (this.year = year);
	}
}

const model2 = new Models2('static', 2024);
console.log(model2);
console.log(model2.name);
console.log(model2.year);
