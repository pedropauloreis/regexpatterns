const texto = `
ca	r
r	o s!
`;

console.log(texto.match(/ca/)); //[ 'ca', index: 1, input: '\nca\tr\nr\to s!\n', groups: undefined ]

//looking for tab
console.log(texto.match(/ca\t/)); //[ 'ca\t', index: 1, input: '\nca\tr\nr\to s!\n', groups: undefined ]

//looking for tab,breakline
console.log(texto.match(/ca\tr\nr/)); //[ 'ca\tr\nr', index: 1, input: '\nca\tr\nr\to s!\n', groups: undefined ]

//replacing tabs and spaces
console.log(texto.replace(/\t|\n| /g,'')); //carros!