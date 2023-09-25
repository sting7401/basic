import chalk from 'chalk';
const colors = require('colors');

import {fetchUserDate} from './src/user/user';
const userName = await fetchUserDate();


// console.log(chalk.yellow("import chalk from "));
// console.log(chalk.cyan("require chalk require "));


// const fs = Bun.require('fs/promise');
// const fileContents  = await fs.readFile('package.json','utf-8');
// console.log(fileContents.toString());
// await fs.writeFile('index.html', '안녕?');

const file = Bun.file('package.json');
const fileContents = await file.text();
// console.log(fileContents.toString());
await Bun.write('index.html',`이름 체크 : ${JSON.stringify(userName.name)}`);
console.log("🚀 ~ file: index.ts:23 ~ userName123:", userName);

