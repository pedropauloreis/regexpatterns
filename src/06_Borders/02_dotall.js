const texto1=  'Romário era um excelente jogador\n, mas hoje é um político questionador';


//Select all that starts and ends with 'r'
console.log(texto1.match(/^r.*r$/gi)); //null --- Problem with \n

//Space or not space [\s\S]*
console.log(texto1.match(/^r[\s\S]*r$/gi)); //[ 'Romário era um excelente jogador\n, mas hoje é um político questionador' ]


//Solution with flag 's'
console.log(texto1.match(/^r.*r$/gis)); //[ 'Romário era um excelente jogador\n, mas hoje é um político questionador' ]