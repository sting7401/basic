/** scope */

var number1 = 20;

function level1() {
	console.log(number1);
}

// level1();

function level2() {
	var number1 = 40;

	console.log(number1);
}

//level1();

console.log(number1);

function level3() {
	var number1 = 40;

	function level2() {
		var number2 = 440;

		console.log(number1, number2);
	}

	level2();

	console.log(number1);
}

console.log(number1);

/**
 * js- lexical scope
 * 선언된 위치가 상위 스코프
 *
 * dynamic scope
 * 실행한 위치가 상위 스코프를 정한다
 */

var number4 = 3;

function level4() {
	var number4 = 430;

	level42();

	console.log(number4);
}

function level42() {
	var number2 = 4340;

	console.log(number4, number2);
}

console.log(level4());

var i = 0;
for (var i = 0; i < 10; i++) {
	console.log(i);
}
console.log(i);

i = 999;
// block level scope
for (let i = 0; i < 10; i++) {
	console.log(i);
}
console.log(i);

/** var는 함수 레벨 스코파만
 *
 * let, const 는 함수레벨, 블록레벨 스코프
 */
