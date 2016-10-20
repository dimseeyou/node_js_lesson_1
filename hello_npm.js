var ansi = require('ansi'); 
var cursor = ansi(process.stdout);

console.log('We are ready to beep!');

cursor.beep();