/**
 * super and override
 */

class Model {
	name;
	year;

	constructor(name, year) {
		this.name = name;
		this.year = year;
	}

	say() {
		return `안녕하세요. ${this.name}`;
	}
}

class ChildModel extends Model {
	part;

	constructor(name, year, part) {
		super(name, year);

		this.part = part;
	}

	say() {
		// return `안녕하세요. ${this.name} / ${this.part}`;
		return `${super.say()} / ${this.part}`;
	}
}

const nameCHheck = new ChildModel('이름', 2003, '분야');
console.log(nameCHheck);
console.log(nameCHheck.say());

const sayModel = new Model('이름', 2003);
console.log(sayModel.say());

export { Model, ChildModel };
