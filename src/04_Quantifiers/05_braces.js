const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!';
const texto2 = 'There is a big fog in NYC';


// {n,m} -> from "n" to "m" (braces)

const regex = /fogo{2,4}/gi
console.log(texto1.match(regex)); // ['FOGOOOOOO' ]
console.log(texto2.match(regex)); // null

const texto3 = "O Fulano recebeu 120 milhões apostando 6 9 21 23 45 e 46.";
console.log(texto3.match(/\d{1,2}/g)); // ['12', '0', '6', '9',  '21', '23', '45', '46']
console.log(texto3.match(/\d{2}/g)); // [ '12', '21', '23', '45', '46' ]
console.log(texto3.match(/\d{1,}/g)); // ['120', '6', '9',   '21', '23',  '45', '46']
console.log(texto3.match(/\w{7}/g)); // [ 'recebeu', 'apostan' ]
console.log(texto3.match(/[\wõ]{7}/g)); // [ 'recebeu', 'milhões', 'apostan' ]

// to learn in future
console.log(texto3.match(/\b\d{1,2}\b/gi)); //[ '6', '9', '21', '23', '45', '46' ]
console.log(texto3.match(/\b[\wõ]{7}\b/gi)); //[ 'recebeu', 'milhões' ]