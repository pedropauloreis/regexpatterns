const files = require('./00_file');

const applyColor = (txt, reg, color) => txt.replace(reg, `<span style="color: #${color}"><b>$1</b></span>`);

const originalFile = files.read('01_sourceCodeHTML.html');

const codeRegex = /<code>[\s\S]*<\/code>/i;
let code = originalFile.match(codeRegex)[0];


//string
code = applyColor(code,/(\".*\")/g,'ce9178');


//reserved words
code = applyColor(code,/\b(package|public|class|static|if|else)\b/g,'d857cf');


//types
code = applyColor(code,/\b(void|int|string|bool|double|float)\b/g,'1385e2');

//multiline comment /* */
code = applyColor(code,/(\/\*[\s\S]*\*\/)/g,'267703');

//one line comment /* */
code = applyColor(code,/(\/\/.*)\b/g, '267703');

files.write('01_sourceCodeHTML.html',originalFile.replace(codeRegex,code));