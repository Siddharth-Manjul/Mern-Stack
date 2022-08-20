// CommonJS, every file in node is a module (by default).
// Modules - Encapsulated code (only sharing minimum or 'what we want').

const names = require('./names');
const sayHi = require('./utils');

sayHi('susan'); 
sayHi(names.john);
sayHi(names.peter);


