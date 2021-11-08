// para definir uma classe (ou conjunto) de caracteres usa-se []

const texto = "1,2,3,4,5,6,a.b c!d?e[f";

const regexPares = /[02468]/g;
console.log(texto.match(regexPares)); //[ '2', '4', '6' ]

const regexPares2 = /[8642]/g;
console.log(texto.match(regexPares2)); //[ '2', '4', '6' ]

const texto2 = "João não vai passear na moto.";
const regexComeSemAcento = /n[aã]/gi;
console.log(texto2.match(regexComeSemAcento)); //[ 'nã', 'na' ]
console.log(texto2.match(/n[aã]./gi)); //[ 'não', 'na ' ]

