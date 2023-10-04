/**
 * callback
 */

function waitAndRun() {
	setTimeout(() => {
		console.log('2');
	}, 2000);
}

// waitAndRun();

function waitAndRun2() {
	setTimeout(() => {
		console.log('1');

		setTimeout(() => {
			console.log('2');

			setTimeout(() => {
				console.log('3');
			}, 2000);
		}, 2000);
	}, 2000);
}

// waitAndRun2();

/**
 *  Promise
 */

// const timeoutPromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('완료');
// 	}, 2000);
// });

// timeoutPromise.then(res => {
// 	console.log(res);
// });

const getPromise = (seconds = 1) => {
	const newPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('완료');

			if (!resolve) {
				reject('에러');
			}
		}, seconds * 1000);
	});

	return newPromise;
};

// getPromise(3)
// 	.then(response => {
// 		console.log(response);

// 		return getPromise(3);
// 	})
// 	.then(response => {
// 		console.log(response);
// 		return getPromise(6);
// 	})
// 	.catch(err => {
// 		console.error(err);
// 	})
// 	.finally(() => {
// 		console.log('마지막');
// 	});

// 가장 느린 함수 기준으로
Promise.all([getPromise(1), getPromise(4), getPromise(1), getPromise(1)]).then(
	res => {
		console.log(res);
	},
);
