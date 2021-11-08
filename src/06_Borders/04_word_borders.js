const texto1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial';

//Everey word that starts with 'dia'
console.log(texto1.match(/\bdia\w+/gi)) //[ 'diatonico', 'diafragma' ]

//Everey word that ends with 'dia'
console.log(texto1.match(/\w+dia\b/gi)) //[ 'media', 'wikipedia', 'bom_dia', 'melodia' ]

//Everey word that contains 'dia' in the middle
console.log(texto1.match(/\w+dia\w+/gi)) //[ 'radial' ]

//Everey word that contains 'dia' in any part
console.log(texto1.match(/\w*dia\w*/gi)) //['dia', 'diatonico', 'diafragma', 'media', 'wikipedia', 'bom_dia', 'melodia',   'radial' ]

//Everey word that only contains 'dia'
console.log(texto1.match(/\bdia\b/gi)) //['dia']

//Boder is all char that is not \w, so [^A-Za-z0-9_] ... we have a problem with accentuation
const texto2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial';

console.log(texto2.match(/\bdia\b/gi)) //[ 'dia', 'dia', 'dia', 'dia' ] //'é' and '-' are considered borders
console.log(texto2.match(/(\S*)?dia(\S*)?/gi)) //[ 'dia', 'diatônico', 'diafragma,', 'média', 'wikipédia', 'bom-dia', 'melodia', 'radial' ] //',' was captured
console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi)) //[ 'dia', 'diatônico', 'diafragma', 'média', 'wikipédia', 'bom-dia', 'melodia', 'radial' ]
  

