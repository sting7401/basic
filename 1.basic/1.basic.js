console.log('hello');

const name = 'name';
// const age = 32;

let type = {
	name: 'name',
	age: 30,
};

/**
 *  선언과 할당
 * 1. 변수를 선언
 * 2. 할당
 */

let friend; // undefined
console.log(friend);

/**
 * naming conventions
 *
 * 1. 일반적으로 영어로 사용, 문자+숫자
 * 2. 특수기호 _ , $ 사용
 * 3. 숫자로 이름 시작 X
 * 4. 키워든느 변수명 사용 X
 * 5. camelCase - 대부분
 * 6. snake_case - 파이썬
 * 7. PascalCase - c#, typescript
 *
 */

let codeFactory = '코드 팩토리';
const $load = 'load';
const _load = 'load';

/**
 * data
 *
 * 여섯개의 primitive type
 * 1. String
 * 2. Number
 * 3. Boolean
 * 4. undefined
 * 5. null
 * 6. Symbol
 *
 * 7. Object : Function, Array, Object
 */

const age = 30; // Number
const text = 'Age: '; // String
const checked = false;
const infinity = Infinity;

console.log(typeof text);
console.log(typeof infinity);

/** Template Literal
 *
 * escaping character
 * 1. newlint \n
 * 2. tab \t
 * 3. 백슬래시를 스트링으로 표현하고 싶다면 두번 입력하면 된다.
 */
const nameTemplate = `템플릿 리터럴`;
const nameTemplate2 = `이름\n 줄내림`;
const nameTemplate3 = `이름\t 탭`;
const nameTemplate4 = `이름\\ 탭`;

const nameTemplate5 = `이름 
줄내림`; // string 타입으로 선언 됨

console.log('🚀 ~ file: 1-hello-wrold.js:79 ~ nameTemplate4:', nameTemplate5);

/**
 * Boolean
 */
const isTrue = true;
const isFalse = false;

/**
 * undefined
 *
 * 사용자가 직접 값을 초기화하지 않았을때
 * 지정되는 값
 *
 * 직접 지정하는 건 하면 안됨
 */
let isUndefined = undefined;

/**
 * null
 *
 * undefined와 마찬가지로 값이 없는 뜻
 * js에서 개발자가 명시적으로 없는 값으로 초기화 할때 사용
 *
 */
let isNull = null;

/**
 * Symbol
 *
 * 유일무이한 값 생성할때 사용
 * 다른 프리미티브 값들과 다르게 Symbol 호출해서 사용해야함
 */
const test1 = '1';
const test2 = '2';
console.log(test1 === test2);
const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2, '1');

/**
 * Object
 *
 * Map
 * key, value의 쌍으로 이루어짐
 */
const dictionary = {
	red: '빨간색',
	orange: '주황색',
	yellow: '노란색',
};
console.log(dictionary['red']);

/**
 * Array
 *
 * 값을 리스트로 나열할수 있는 타입
 */

const isMemberArray = ['1', '2', '3', '4', '5', '6', '7'];

/**
 * index
 *
 * 0부터 시작
 * 1씩 증가
 */
isMemberArray[0] = '배열 내용 바꾸기';
console.log(isMemberArray);

/** static typing - 변수를 선언 할 때 어떤 타입의 변수를 선언할지 명시
 *
 * dynamic typing - 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론한다.
 * js = dynamic typing
 */
