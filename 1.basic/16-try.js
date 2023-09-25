/**
 * try ... catch
 *
 * 1. 발생시킬때 -> 던진다고한다.(throw)
 * 2. 명시적으로 인지 할 때 -> 잡는다고 한다.(catch)
 */

const runner = () => {
	try {
		console.log('Starting');

		throw new Error('에러');

		// 에러 이후 return 됨.

		console.log('code');
	} catch (e) {
		console.log(e);
	} finally {
		// try에서 에러 유무 상관없이 실행

		console.log('finally');
	}
};

runner();
