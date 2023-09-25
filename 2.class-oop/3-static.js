/**
 * static keyword
 */

class Models {
	static name = '';
	static year = 0;
	static group = '그룹이름';

	constructor(name, year) {
		this.name = name;
		this.year = year;
	}

	static returnGroup() {
		return '리턴 value';
	}
}

const models = new Models('이름', '년도');
console.log('🚀 ~ file: 3-static.js:17 ~ models:', models);
console.log(Models.group);
console.log(Models.returnGroup);

/** factory constructor */

class Factory {
	name;
	year;

	constructor(name, year) {
		this.name = name;
		this.year = year;
	}

	static fromObject({ name, year }) {
		return new Factory(name, year);
	}

	static formList(list) {
		return new Factory(list[0], list[1]);
	}
}

const factory = Factory.fromObject({ name: '새로운 이름', year: 2023 });
console.log(factory);

const factory2 = Factory.fromList(['리스트1', 2022]);
