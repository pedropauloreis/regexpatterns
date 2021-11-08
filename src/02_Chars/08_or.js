const texto = 'Você precisa responder sim, não ou não sei!';

console.log(texto.match(/sim|não|sei/gi)); // [ 'sim', 'não', 'não', 'sei' ]

console.log(texto.match(/sim|não sei|não/gi)); // [ 'sim', 'não', 'não sei' ]

