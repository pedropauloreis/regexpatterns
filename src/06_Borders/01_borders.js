const texto1=  'Romário era um excelente jogador\n, mas hoje é um político questionador';

//Select all 'r'
console.log(texto1.match(/r/gi)); //[ 'R', 'r', 'r', 'r', 'r' ]

//Select all 'r' on start of a line
console.log(texto1.match(/^r/gi)); //[ 'R' ]

//Select all 'r' on end of a line
console.log(texto1.match(/r$/gi)); //[ 'r' ]

//Select all that starts and ends with 'r'
console.log(texto1.match(/r$.*r$/gi)); //null --- Problem with \n



