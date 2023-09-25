/** if */

let number = 5;

if (number % 2 === 0) {
	console.log(`${nunber} is 짝수`);
} else {
	console.log('홀수');
}

const enDay = 'monday';

let korDay;

switch (enDay) {
	case 'monday':
		korDay = '월요일';
		break;
	case 'tuesday':
		korDay = '화요일';
		break;
	default:
		korDay = '';
		break;
}
