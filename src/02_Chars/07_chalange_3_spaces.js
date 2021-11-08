const texto = 'a   b';


console.log(texto.match(/a   b/)); //[ 'a   b', index: 0, input: 'a   b', groups: undefined ]
console.log(texto.match(/a\s\s\sb/)); //[ 'a   b', index: 0, input: 'a   b', groups: undefined ]
console.log(texto.match(/.   ./)); //[ 'a   b', index: 0, input: 'a   b', groups: undefined ]
console.log(texto.match(/.\s\s\s./)); //[ 'a   b', index: 0, input: 'a   b', groups: undefined ]

//to learn in future
console.log(texto.match(/a\s+b/)); //[ 'a   b', index: 0, input: 'a   b', groups: undefined ]
console.log(texto.match(/.\s+./)); //[ 'a   b', index: 0, input: 'a   b', groups: undefined ]

console.log(texto.match(/a {3}b/)); //[ 'a   b', index: 0, input: 'a   b', groups: undefined ]
console.log(texto.match(/. {3}./)); //[ 'a   b', index: 0, input: 'a   b', groups: undefined ]

console.log(texto.match(/a\s{3}b/)); //[ 'a   b', index: 0, input: 'a   b', groups: undefined ]
console.log(texto.match(/.\s{3}./)); //[ 'a   b', index: 0, input: 'a   b', groups: undefined ]