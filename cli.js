const { soma } = require('./index.js');
const chalk = require('chalk');

const resultado = soma(1, 3);

console.log(chalk.blue(resultado));