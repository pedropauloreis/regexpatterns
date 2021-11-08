const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!';
const texto2 = 'There is a big fog in NYC';


// ? -> null or one (optional)

const regex = /fogo?/gi //Optional leter 'o'
console.log(texto1.match(regex)); //[ 'fogo', 'FOGO' ]
console.log(texto2.match(regex)); // [ 'fog']