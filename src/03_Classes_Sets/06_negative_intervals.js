const texto = "1,2,3,4,5,6,a.b c!d?e[f	- f_g";



//NOT NUMBERS : \D [^0-9]
console.log(texto.match(/\D/g)); //[',', ',', ',',  ',', ',', ',', 'a', '.', 'b', ' ', 'c', '!', 'd',  '?', 'e', '[', 'f', '\t', '-', ' ', 'f', '_', 'g' ]
console.log(texto.match(/[^0-9]/g)); //[',', ',', ',',  ',', ',', ',', 'a', '.', 'b', ' ', 'c', '!', 'd',  '?', 'e', '[', 'f', '\t', '-', ' ', 'f', '_', 'g' ]


//NOT LETTERS NUMBERS AND _ : \W [^A-Za-z0-9_]
console.log(texto.match(/\W/g)); //[',', ',', ',', ',', ',', ',', '.', ' ', '!', '?', '[', '\t', '-', ' ' ]
console.log(texto.match(/[^A-Za-z0-9_]/g)); //[',', ',', ',', ',', ',', ',', '.', ' ', '!', '?', '[', '\t', '-', ' ' ]


//NOT SPACES: /S [^\t\n\r\f]
console.log(texto.match(/\S/g)); //['1', ',', '2', ',', '3', ',','4', ',', '5', ',', '6', ',', 'a', '.', 'b', 'c', '!', 'd', '?', 'e', '[', 'f', '-', 'f', '_', 'g' ]
console.log(texto.match(/[^\s\t\n\r\f]/g)); //['1', ',', '2', ',', '3', ',','4', ',', '5', ',', '6', ',', 'a', '.', 'b', 'c', '!', 'd', '?', 'e', '[', 'f', '-', 'f', '_', 'g' ]

//NOT VARIOUS
console.log(texto.match(/[^\d!\?\[\s,\.\-_]/g)); //['a', 'b', 'c','d', 'e', 'f','f', 'g']

//NOT VARIOUS
const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@';
console.log(texto2.match(/[^!-/:-@\s]/g)); //[ '1', '2' ]
