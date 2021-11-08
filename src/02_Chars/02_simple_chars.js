const texto = '1,2,3,4,5,6,a.b c!d?e';

const regexComma = /,/;
console.log(texto.split(regexComma)); //[ '1', '2', '3', '4', '5', '6', 'a.b c!d?e' ]
console.log(texto.match(regexComma)); //[ ',', index: 1, input: '1,2,3,4,5,6,a.b c!d?e', groups: undefined ]


console.log(texto.match(/,/g)); //[ ',', ',', ',', ',', ',', ',' ]
console.log(texto.match(/A/g)); //null
console.log(texto.match(/A/i)); //[ 'a', index: 12, input: '1,2,3,4,5,6,a.b c!d?e', groups: undefined ]
console.log(texto.match(/A/gi)); //[ 'a' ]
console.log(texto.match(/2/g)); //[ '2' ]
console.log(texto.match(/b c!d/)); //['b c!d', index: 14, input: '1,2,3,4,5,6,a.b c!d?e', groups: undefined ]