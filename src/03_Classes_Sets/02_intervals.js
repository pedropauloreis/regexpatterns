const texto = "1,2,3,4,5,6,a.b c!d?e[f";

const regexInterval = /[a-z]/g;

console.log(texto.match(regexInterval)); //[ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(texto.match(/[b-d]/g)); //[ 'b', 'c', 'd' ]
console.log(texto.match(/[2-5]/g)); //[ '2', '3', '4', '5' ]

console.log(texto.match(/[a-z0-9]/g)); //[ '1', '2', '3', '4', '5', '6', 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(texto.match(/[b-e2-5]/g)); //[ '2', '3', '4', '5', 'b', 'c', 'd', 'e' ]

console.log(texto.match(/[A-Z0-9]/gi)); //[ '1', '2', '3', '4', '5', '6', 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(texto.match(/[B-E2-5]/gi)); //[ '2', '3', '4', '5', 'b', 'c', 'd', 'e' ]

