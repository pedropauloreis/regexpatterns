// ( ) -> groups

const texto = 'O José Simão é muito engraçado.... hehehehehe';

console.log(texto.match(/(he)+/gi)); //[ 'hehehehehe' ]

const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag';

console.log(texto2.match(/(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}(\.\w{2,4})?/g));
