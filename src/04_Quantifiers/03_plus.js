const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!';
const texto2 = 'There is a big fog in NYC';


// + -> one or more (plus)

const regex = /fogo+/gi 
console.log(texto1.match(regex)); // [ 'fogo', 'FOGOOOOOO' ]
console.log(texto2.match(regex)); // null

const texto3 = 'The numbers 0123456789.';
console.log(texto3.match(/[0-9]/g)); //['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
console.log(texto3.match(/[0-9]+/g)); //[ '0123456789' ]
console.log(texto3.match(/\d+/g)); //[ '0123456789' ]