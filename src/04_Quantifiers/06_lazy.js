const texto = '<div>Conteúdo 1</div><div>Conteúdo 2</div><div>Conteúdo muito mas muito muito longo para o exercício</div>';

//By default all quantifiers are greedy
console.log(texto.match(/<div>.+<\/div>/g));  // ['<div>Conteúdo 1</div><div>Conteúdo 2</div><div>Conteúdo muito mas muito muito longo para o exercício</div>']
console.log(texto.match(/<div>.*<\/div>/g));  // ['<div>Conteúdo 1</div><div>Conteúdo 2</div><div>Conteúdo muito mas muito muito longo para o exercício</div>' ]
console.log(texto.match(/<div>.{0,50}<\/div>/g)); // [ '<div>Conteúdo 1</div><div>Conteúdo 2</div>' ]

// ?  Lazy

console.log(texto.match(/<div>.+?<\/div>/g)); // ['<div>Conteúdo 1</div>', '<div>Conteúdo 2</div>', '<div>Conteúdo muito mas muito muito longo para o exercício</div>']
console.log(texto.match(/<div>.*?<\/div>/g)); // ['<div>Conteúdo 1</div>', '<div>Conteúdo 2</div>', '<div>Conteúdo muito mas muito muito longo para o exercício</div>']
console.log(texto.match(/<div>.{0,50}?<\/div>/g)); // ['<div>Conteúdo 1</div>', '<div>Conteúdo 2</div>']

  