const texto = "A Casa bonita é a casa amarela na esquina com a rua ACASALAR";

const regex = /casa/gi;
console.log(texto.match(regex)); //[ 'Casa', 'casa', 'CASA' ]

console.log(texto.match(/casa/i)); //['Casa', index: 2, input: 'A Casa bonita é a casa amarela na esquina com a rua ACASALAR', groups: undefined ]

console.log(texto.match(/casa/g)); //[ 'casa' ]

console.log(texto.match(/a casa/gi)); //[ 'A Casa', 'a casa' ]