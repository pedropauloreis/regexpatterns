const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casa com Habib
`;

console.log(texto.match(/\n/g)); //[ '\n', '\n', '\n', '\n' ]
console.log(texto.match(/^(\w).+\1$/gi)); //null

//Flag m solves multiline issues, it considers each line idenpendly
console.log(texto.match(/^(\w).+\1$/gim)); //[ 'Leo é muito legal', 'Emanuel foi jogar em Sergipe', 'Bianca é casa com Habib' ]