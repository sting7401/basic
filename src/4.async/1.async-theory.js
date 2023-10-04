/**
 * Async theory
 */

// function longWork() {
// 	const now = new Date();

// 	const milliseconds = now.getTime();
// 	const afterTwoSeconds = milliseconds + 2 * 1000;

// 	//while (milliseconds < afterTwoSeconds) {}

// 	console.log('완료');
// }

// console.log('start');
// longWork();
// console.log('end');

// ---------------------

function longWork() {
	setTimeout(() => {
		console.log('완료');
	}, 2000);
}
console.log('start');
longWork();
console.log('end');
