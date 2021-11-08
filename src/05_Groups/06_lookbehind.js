const texto = 'supermercado superação minimercado hiperMERCADO';

console.log(texto.match(/(super)[\wÀ-ú]+/gi)); //[ 'supermercado', 'superação' ]

//Positive lookbehind (?<=)
console.log(texto.match(/(?<=super)[\wÀ-ú]+/gi)) //[ 'mercado', 'ação' ]

//Negative lookbehind (?<!)
console.log(texto.match(/(?<!super)mercado+/gi)) //[ 'mercado', 'MERCADO' ]

