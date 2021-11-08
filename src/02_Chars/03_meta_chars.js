// REPRESENTANTES
// . -> (ponto) Qualquer Caractere
// [] -> (conjunto) Conjunto de caracteres permitidos
// [^] -> (conjunto negado) Conjunto de caracteres proibidos

// QUANTIFICADORES
// ? -> (opcional) Zero ou um
// * -> (asterisco) Zero ou mais
// + -> (mais) Um ou mais
// {n,m} -> (chaves) De n até m

//ÂNCORAS
// ^ -> (circunflexo) Início de linha
// $ -> (cifrão) Fim de linha
// \b -> (borda) Início ou fim de palavra

//OUTROS
// \ -> (escape) Uso de metacaracteres como literal
// | -> (pipe) Operação de Ou
// ( ) -> (grupo) Define um grupo
// \1...\9 -> (retrovisor) Resgata grupos já definidos

//ALL
// . ? * + - ^$ | [] {} () \ :

const texto = '1,2,3,4,5,6,a.b c!d?e';

const regexPoint = /\./;
console.log(texto.match(regexPoint)); //[ '.', index: 13, input: '1,2,3,4,5,6,a.b c!d?e', groups: undefined ]

const regeSimbols = /,|\.|\?|!| /g;
console.log(texto.split(regeSimbols)); //[ '1', '2', '3', '4', '5', '6', 'a', 'b', 'c', 'd', 'e']
  
