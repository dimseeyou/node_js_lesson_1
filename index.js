console.log("hello");
console.log("bye");

var ansi = require('ansi'); 
var cursor = ansi(process.stdout);

console.log('We are ready to beep!');

cursor.beep();

var test = require('./module.js');
test.sayYes();