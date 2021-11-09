const texto = `Contacts from:
 - Claudia: (11) 89542-8652 - emailfulano@code.com.br
 - Peter: 78521-7523 - emailciclano@mater.com
- Andreas:(11)75325-5410 - email_novo@new.eu`;

console.log(texto.match(/(\(?\d{2}\)?)?\s?\d{4,5}\-\d{4}/g)) //[ '(11) 89542-8652', ' 78521-7523', '(11)75325-5410' ]