const members1 = [
	{ name: '이름1', year: 2000 },
	{ name: '이름2', year: 2001 },
	{ name: '이름3', year: 2002 },
	{ name: '이름4', year: 2003 },
];

const members2 = [
	{ name: '이름1', year: 2000 },
	{ name: '이름2', year: 2001 },
	{ name: '이름3', year: 2002 },
	{ name: '이름4', year: 2003 },
];

class Country {
	name;
	groups;

	constructor(name, groups) {
		this.name = name;
		this.groups = groups;
	}
}

class Group {
	name;
	members;

	constructor(name, members) {
		this.name = name;
		this.members = members;
	}
}

class Model {
	name;
	year;

	constructor(name, year) {
		this.name = name;
		this.year = year;
	}
}

class Child1 extends Model {
	constructor(name, year) {
		super(name, year);
	}

	sing() {
		return `${this.name}`;
	}
}

class Child2 extends Model {
	constructor(name, year) {
		super(name, year);
	}

	sing() {
		return `${this.name}`;
	}
}

const membersCheck = array => {
	const newArray = [...array];

	return newArray.map(item => {
		const { name, year } = item;

		return new Child1(name, year);
	});
};
console.log(membersCheck(members1));

const membersGroup = new Group('그룹', membersCheck(members1));
console.log(membersGroup);

const memeCountry = new Country('나라', membersGroup);
console.log(memeCountry);
