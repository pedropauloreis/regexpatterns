const texto = "ABC [abc] a-c 1234";

//Dentro de um conjunto não precisa do \ para especificar um meta caractere, dentro do conjunto ele não se comporta como meta caractere

console.log(texto.match(/[a-c]/g)); //[ 'a', 'b', 'c', 'a', 'c' ]

console.log(texto.match(/a-c/g)); //[ 'a-c' ]

console.log(texto.match(/[A-z]/g)); //[ 'A', 'B', 'C', '[', 'a', 'b', 'c', ']', 'a', 'c' ] O intervalo usa a tabela ASCII Unicode, entre Z e a existe: [ \ ] ^_ `
  
// Deve ser respeitada a ordem da tabela unicode
//console.log(texto.match(/[z-A]/g)); //SyntaxError: Invalid regular expression: /[z-A]/: Range out of order in character class
console.log(texto.match(/[9-0]/g)); //SyntaxError: Invalid regular expression: /[9-0]/: Range out of order in character class