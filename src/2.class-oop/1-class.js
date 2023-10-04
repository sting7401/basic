/** class keyword */

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
}

const models = new Models('이름', '년도');

console.log(models.sayName());

console.log(typeof Models);
console.log(typeof models);
