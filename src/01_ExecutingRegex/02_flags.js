//g - global
//i - ignore case

const texto = `Many physicists would agree that, had it not been for congestion control,\n the evaluation of web browsers might never have occurred.`;


console.log(texto.match(/M|br/));
console.log(texto.match(/m|br/i));
console.log(texto.match(/m|br/gi));


