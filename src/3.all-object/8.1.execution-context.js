function one() {
	console.log('run one');
	console.log('run one finished');
}

function two() {
	console.log('run two');
	one();
	console.log('run two finished');
}

function three() {
	console.log('run three');
	two();
	console.log('run three finished');
}

three();
