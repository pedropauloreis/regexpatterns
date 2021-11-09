const texto = `
123456
cod3r
QUASE123!
Quase123
QuasePassou
essanaovaipassar
#OpA1
#essaSenhaEGrande1234
#OpA1?
Foi123!`

//Min 6 chars - Max 20 chars
console.log(texto.match(/^.{6,20}$/gm)); //[ '123456', 'QUASE123!', 'Quase123', 'QuasePassou', 'essanaovaipassar', '#OpA1?', 'Foi123!' ]

//Uppercase Letters
console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm)); //[ 'QUASE123!', 'Quase123', 'QuasePassou', '#OpA1?', 'Foi123!' ]

//Lowercase Letters
console.log(texto.match(/^(?=.*[a-z]).{6,20}$/gm)); //[ 'Quase123', 'QuasePassou', 'essanaovaipassar', '#OpA1?', 'Foi123!' ]

//Numbers
console.log(texto.match(/^(?=.*\d).{6,20}$/gm)); //[ '123456', 'QUASE123!', 'Quase123', '#OpA1?', 'Foi123!' ]

//Symbols
console.log(texto.match(/^(?=.*[@#$%!^&*()\[\]\{\}]).{6,20}$/gm)); //[ 'QUASE123!', '#OpA1?', 'Foi123!' ]

//All together
console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*()\[\]\{\}]).{6,20}$/gm)); //[ '#OpA1?', 'Foi123!' ]