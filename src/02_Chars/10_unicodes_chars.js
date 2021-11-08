//NO ÍNICIO
//1 bite (8 bits): 256 caracteres
//Símbolos, Pontuação: A-Z, a-z, 0-9

//ENTÃO: 
//2 Bytes (16 bits): ~65500+ caracteres
//+Símbolos, +Pontuação: A-Z, a-z, 0-9

//UNICODE
// Quantidade variável de Bytes - Expansível
// Suporta mais de 1 milhão de caracteres
// https://unicode-table.com/pt/

const texto = "aʬc௵d";
console.log(texto.match(/\u02AC|\u0BF5/g)); //[ 'ʬ', '௵' ];