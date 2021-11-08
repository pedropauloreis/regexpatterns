const texto = "Bom\ndia"; // /n IS NOT captured by metachar .

console.log(texto.match(/./gi));//[ 'B', 'o', 'm', 'd', 'i', 'a' ]
console.log(texto.match(/.../gi));//[ 'Bom', 'dia' ]
console.log(texto.match(/..../gi));//null


const texto2 = "Bom\tdia"; // /t is captured by metachar .
console.log(texto2.match(/./gi));//[ 'B',  'o', 'm', '\t', 'd', 'i', 'a' ]
console.log(texto2.match(/.../gi));//[ 'Bom', '\tdi' ]
console.log(texto2.match(/..../gi));//[ 'Bom\t']

  