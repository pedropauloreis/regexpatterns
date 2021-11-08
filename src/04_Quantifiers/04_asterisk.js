const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!';
const texto2 = 'There is a big fog in NYC';


// * -> null or more (asterisk)

const regex = /fogo*/gi 
console.log(texto1.match(regex)); // [ 'fogo', 'FOGOOOOOO' ]
console.log(texto2.match(regex)); // [ 'fog' ]
