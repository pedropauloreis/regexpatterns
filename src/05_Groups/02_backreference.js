// () -> back reference \1, \2, \3


const texto = "<b>Destaque</b><strong>Forte</strong><div>Conteúdo</div>";

console.log(texto.match(/<(\w+)>.*<\/\1>/g))

const texto2 = 'Lentamente é mente muito lenta.'

console.log(texto2.match(/(lenta)(mente)/gi)); //[ 'Lentamente' ]
console.log(texto2.match(/(lenta)(mente).*\2/gi)); // [ 'Lentamente é mente' ]
console.log(texto2.match(/(lenta)(mente).*\2.*\1./gi)); // [ 'Lentamente é mente muito lenta.' ]


// with '?:' inside a group, its value is not kept

console.log(texto2.match(/(?:lenta)(mente).*\1/gi)) // [ 'Lentamente é mente' ] 
console.log(texto2.match(/(?:lenta)(mente).*\1.*/gi)) // [ 'Lentamente é mente muito lenta.' ]


console.log(texto2.replace(/(lenta)(mente)/gi, '$1')) // Lenta é mente muito lenta.
console.log(texto2.replace(/(lenta)(mente)/gi, '$2')) // mente é mente muito lenta.
console.log(texto2.replace(/(lenta)(mente)/gi, 'ABCD$2EFG')) // ABCDmenteEFG é mente muito lenta.


//Javascript supports more than 9 groups:

const texto3 = 'abcdefghijkll';
console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g)); //[ 'abcdefghijkll' ]
console.log(texto3.replace(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)(.)/g,'$1$2$3$4$5$6$7$8$9$10$11$12m')); //abcdefghijklm