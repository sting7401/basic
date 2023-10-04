/**
 * immutable Object
 */

const vars = {
	name: '이름',
	year: 2000,

	get age() {
		return new Date().getFullYear() - this.year;
	},

	set age(age) {
		this.year = new Date().getFullYear() - age;
	},
};

console.log(vars);

/**
 * Extensible
 */
console.log(Object.isExtensible(vars));

vars['title'] = 'title';
console.log(vars);

// Object.preventExtensions(vars);
console.log(Object.preventExtensions(vars));

//vars['group'] = '그룹';
console.log(vars);

delete vars['title'];
console.log(vars);

/**
 * Seal
 */

const vars2 = {
	name: '이름',
	year: 2000,

	get age() {
		return new Date().getFullYear() - this.year;
	},

	set age(age) {
		this.year = new Date().getFullYear() - age;
	},
};

console.log(vars2);
console.log(Object.isSealed(vars2));

Object.seal(vars2);
console.log(Object.isSealed(vars2));

// vars2['group'] = '1';
// delete vars['group'];

Object.defineProperty(vars2, 'name', {
	value: '씰',
});

/**
 * Freezed
 *
 * 읽기 외에 모든 기능 불가능
 */

const vars3 = {
	name: '이름',
	year: 2000,

	get age() {
		return new Date().getFullYear() - this.year;
	},

	set age(age) {
		this.year = new Date().getFullYear() - age;
	},
};

console.log(Object.isFrozen(vars3));
Object.freeze(vars3);
console.log(Object.isFrozen(vars3));

// vars3['group'] = '1';
// delete vars3['group'];

console.log(Object.getOwnPropertyDescriptors(vars3));

const vars4 = {
	name: '이름',
	year: 2000,

	sub: {
		name: '이름',
		year: 2000,
	},

	get age() {
		return new Date().getFullYear() - this.year;
	},

	set age(age) {
		this.year = new Date().getFullYear() - age;
	},
};

Object.freeze(vars4);
console.log(Object.isFrozen(vars4));
console.log(Object.isFrozen(vars4.sub));
