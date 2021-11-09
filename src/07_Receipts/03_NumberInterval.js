const texto = '0 1 10 85 192 200 245 255 256 500 985';

//match number between 0 and 255

console.log(texto.match(/\b\b/g))
console.log(texto.match(/\b([0-1]|[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b/g))
console.log(texto.match(/\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g))