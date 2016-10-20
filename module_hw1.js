var clc = require('cli-color');
var ansi = require('ansi');
var cursor = ansi(process.stdout);

function beep_color(){

	console.log(clc.red('Text in red'));
	cursor.beep();
}
module.exports.beep_color = beep_color;