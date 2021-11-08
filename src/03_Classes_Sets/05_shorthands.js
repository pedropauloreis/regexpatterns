const texto = "1,2,3,4,5,6,a.b c!d?e[f	- f_g";


//NUMBERS : \d [0-9]
console.log(texto.match(/\d/g)); //[ '1', '2', '3', '4', '5', '6' ]

//NOT NUMBERS : \D [^0-9]
console.log(texto.match(/\D/g)); //[',', ',', ',',  ',', ',', ',', 'a', '.', 'b', ' ', 'c', '!', 'd',  '?', 'e', '[', 'f', '\t', '-', ' ', 'f', '_', 'g' ]

//LETTERS NUMBERS AND _ : \w [A-Za-z0-9_]
console.log(texto.match(/\w/g)); //[ '1', '2', '3', '4', '5', '6', 'a', 'b', 'c', 'd', 'e', 'f', 'f', '_', 'g']

//NOT LETTERS NUMBERS AND _ : \W [^A-Za-z0-9_]
console.log(texto.match(/\W/g)); //[',', ',', ',', ',', ',', ',', '.', ' ', '!', '?', '[', '\t', '-', ' ' ]

//SPACES: /s [\t\n\r\f]
console.log(texto.match(/\s/g)); //[ ' ', '\t', ' ' ]

//NOT SPACES: /S [^\t\n\r\f]
console.log(texto.match(/\S/g)); //['1', ',', '2', ',', '3', ',','4', ',', '5', ',', '6', ',', 'a', '.', 'b', 'c', '!', 'd', '?', 'e', '[', 'f', '-', 'f', '_', 'g' ]

