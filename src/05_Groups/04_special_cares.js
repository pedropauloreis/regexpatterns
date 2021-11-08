const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!';

//Inside a Set () doesn't represent a group
console.log(texto.match(/[(abc)]/gi)); //[ '(', 'a', ')', 'A', 'B', 'C' ]


//Outside a Set () represents a group
console.log(texto.match(/([abc])/gi)); //[ 'a', 'A', 'B', 'C' ]


//Only use () when it is needed
console.log(texto.match(/(abc)/gi)); //[ 'ABC' ]
console.log(texto.match(/abc/gi)); //[ 'ABC' ]