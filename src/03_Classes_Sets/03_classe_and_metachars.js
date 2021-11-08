const texto = ".$+-*?";

//Dentro de um conjunto não precisa do \ para especificar um meta caractere, dentro do conjunto ele não se comporta como meta caractere

console.log(texto.match(/[+.?*$]/g)); //[ '.', '$', '+', '*', '?' ]
console.log(texto.match(/[.]/g)); //[ '.' ]
console.log(texto.match(/[+.?*$]./g)); //[ '.$', '+-', '*?' ]

//EXCEÇÃO: 
// - que expecifica um intervalo
// [ ] que especifica um intervalo
// ^ que especifica negação de intervalo

console.log(texto.match(/[$-?]/g)); //[ '.', '$', '+', '-', '*', '?' ] INTERVALO
console.log(texto.match(/[$\-?]/g)); //[ '$', '-', '?' ] NÃO É INTERVALO
console.log(texto.match(/[\-?]/g)); //[ '-', '?' ] NÃO É INTERVALO