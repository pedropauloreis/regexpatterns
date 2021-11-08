const text = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f';

console.log('Regex methods:');
const regexNine = RegExp('9');
const regexG = RegExp('G');
console.log(regexNine.test(text)); //true
console.log(regexG.test(text)); //false
console.log(regexNine.exec(text)); //['9', index: 18, input: '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f', groups: undefined]
console.log(regexG.exec(text)); //null


console.log('String methods:');
const regexLetters = /[a-f]/g;
console.log(text.match(regexLetters)); //[ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(text.search(regexLetters)); //20
console.log(text.replace(regexLetters,'Found'));//0,1,2,3,4,5,6,7,8,9,Found,Found,Found,Found,Found,Found
console.log(text.split(regexLetters))//[ '0,1,2,3,4,5,6,7,8,9,', ',', ',', ',', ',', ',', '' ]