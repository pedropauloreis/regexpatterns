const texto = `Contacts from:
 - Claudia: (11) 89542-8652 - emailfulano@code.com.br
 - Peter: 78521-7523 - emailciclano@mater.com
- Andreas:(11)75325-5410 - email_novo@new.eu
- Matias :(11)75325-5410 - matias.deut@empresa.info.br`;

console.log(texto.match(/[\w.]+@\w+\.\w{2,4}(\.\w{2})?/gi)); // [ 'emailfulano@code.com.br', 'emailciclano@mater.com', 'email_novo@new.eu', 'matias.deut@empresa.info.br' ]