/**
 * using function to create objects
 */

function Model(name, year) {
	if (!new.target) {
		// new 키워드 없을 때
		// 함수 안에서 함수 재 실행 가능
		return new Model(name, year);
	}

	this.name = name;
	this.year = year;

	this.sub = () => {
		return `${this.name} 서브 확인`;
	};
}

const model = new Model('이름', 2000);
console.log(model.sub());

const model2 = Model('이름', 2000);
console.log(model2.sub());

// console.log(global.name);

// arrow 함수에서는 쓸수 없음
const ArrowModels = (name, year) => {
	this.name = name;
	this.year = year;
};
const arrowModel = new ArrowModels('이름', 0);
