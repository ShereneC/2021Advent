var fs = require('fs');
var text = fs.readFileSync("./input1.txt", 'utf-8');
var textByLine = text.split('\n')
console.log('The Length of the array is,' + textByLine.length)