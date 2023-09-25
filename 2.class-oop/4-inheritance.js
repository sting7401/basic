class Model {
	name;
	year;

	constructor(name, year) {
		this.name = name;
		this.year = year;
	}
}

class ChildModel extends Model {
	check() {
		return ' 자식 클랙스입니다.';
	}
}

class ChildModel2 extends Model {
	event() {
		return '다른 자식 요소입니다.';
	}
}

const childModel = new ChildModel();
console.log(childModel.check());

console.log(childModel instanceof Model);
