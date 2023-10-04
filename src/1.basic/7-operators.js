/**
 * 연산자
 */

/**
 * 산술 연산자
 * 1. 덧센
 * 2. 뺄셈
 * 3. 곱셈
 * 4. 나누기
 * 5. 나머지
 */

console.log(1 + 1);
console.log(1 - 1);
console.log(1 * 1);
console.log(1 / 1);
console.log(1 % 1);

console.log(10 * (1 + 1));

let number = 1;
number += 1;

number -= 1;

/** 연산자의 위치 */
let result = 1;

result = number += 1;
result = number -= 1;

result -= number;
result += number;

console.log(result);

/**
 * 숫자 타입이 아닌 경구
 */

let sample = '99';
console.log(typeof +sample);

sample = true;
console.log(typeof +sample);

/** 할당 연산자 assignment operator */
number = 100;
console.log(number);

number += 10;
console.log(number);
number -= 10;
console.log(number);
number *= 10;
console.log(number);
number /= 10;
console.log(number);
number %= 10;
console.log(number);

/** 비교 연산자
 *
 * 1. 값의 비교
 * 2. 값과 타입의 비교
 */

console.log(5 === 5);
console.log(5 !== 5);
console.log(5 > 5);
console.log(5 < 5);
console.log(5 >= 5);
console.log(5 <= 5);

/**
 * 삼항 조건 연산자
 */
const number3 = 10 > 0 ? '10보다 크다' : ' 10보다 작다';

/** 논리 연산자
 *
 * 1. && 모든 조건 true
 * 2. || 하나라도 true
 */

console.log(true && true);
console.log(true || false);

/** 단축 평가 (short circuit evaluation)
 *
 * &&를 사용 했을 때 좌측이 true 면 우측 값 반환
 * &&를 사용 했을 때 좌측이 false 면 좌측값 반환
 *
 * ||를 사용 했을 때 좌측이 true 면 좌측 값 반환
 * ||를 사용 했을 때 좌측이 false 면 우측 값 반환
 */

console.log(true || 'true');
console.log(false || 'false');
console.log(false && 'false');
console.log(true && 'true');

/** 지수 연산자 */
console.log(2 ** 2);

/** null 연산자 */
let name;
name = name ?? '네임';
console.log(name); // '네임'
name = name ?? '네임';
console.log(name); // '네임'

let name2;
name2 ??= ' 네임2';
console.log('🚀 ~ file: 7-operators.js:116 ~ name2:', name2);
