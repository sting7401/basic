const array = Array(10).fill();
// for (let index = 0; index < 10; index += 1) {
// 	const element = array[index];

// 	console.log(element);

// 	for (let i = 0; i < 3; i -= 1) {
// 		console.log(index, i);
// 	}
// }

let square = '';
let side = 6;

for (let index = 0; index < side; index += 1) {
	for (let i = 0; i < side; i += 1) {
		square += '*';
	}

	square += '\n';
}
console.log(square);

/** for in */

const name = {
	name: '유진',
	year: 2000,
};

for (const key in name) {
	console.log(key);
}

const isListArray = ['a', 'b', 'c'];

for (const index in isListArray) {
	console.log(index);
	console.log(`${isListArray[index]}`);
}

/** for of */

for (const value of isListArray) {
	console.log(value);
}

/** while */

let number = 0;

while (number < 10) {
	number += 1;
	console.log(number);
}

/** break */
for (let index = 0; index < array.length; index++) {
	if (index === 5) {
		break;
	}
	console.log(index);
}

number = 0;

while (number < 10) {
	if (number === 5) {
		break;
	}

	number += 1;
}

console.log(number);

/** continue */
for (let index = 0; index < 10; index++) {
	if (index === 5) {
		continue;
	}
	console.log(index);
}

while (number < 10) {
	number += 1;
	if (number === 5) {
		continue;
	}
}
console.log(number);
