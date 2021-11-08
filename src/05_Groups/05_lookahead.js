const texto = 'João é calmo, mas no transito fica nervoso.';

console.log(texto.match(/[\wÀ-ú]+/gi)) // ['João', 'é', 'calmo', 'mas', 'no', 'transito', 'fica',  'nervoso']

//Positive lookahead (?=)
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi)) // [ 'calmo' ] //(?=,) Looks words followed by comma 
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi)) // [ 'nervoso' ] //(?=.) Looks words followed by point 
console.log(texto.match(/[\wÀ-ú]+(?=\sfica)/gi)) // [ 'transito' ] //(?=\sfica) Looks for words followed by ' fica'

//Negative lookahead (?=)
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi)) // [ 'João', 'mas', 'no', 'transito', 'fica', 'nervoso' ] Looks words that are not followed by comma 
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi)) // [ 'João ', 'é ', 'mas ', 'no ', 'transito ', 'fica ', 'nervoso.' ] Looks words that are not followed by comma 
