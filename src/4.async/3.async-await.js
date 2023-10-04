/**
 * Async / Await
 */

const getPromise = sec => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject('완료');
		}, sec * 1000);
	});
};

const run = async () => {
	try {
		const result = await getPromise(2);
		console.log('🚀 ~ file: 3.async-await.js:15 ~ run ~ result:', result);
		const result2 = await getPromise(3);
		console.log('🚀 ~ file: 3.async-await.js:17 ~ run ~ result2:', result2);
	} catch (error) {
		console.log(error);
	} finally {
		console.log('끝');
	}
};

run();
