function extractEmailInformation(email){
    const regexUsuario = /^([^@]+)@/;
    const regexDominio = /@([^@]+)/; 
    const regexBrasileiro = /\.br$/;

    let resultUsuario = email.match(regexUsuario);
    let resultDominio = email.match(regexDominio);
    let resultBrasileiro = email.match(regexBrasileiro);

    return {resultUsuario, resultDominio, resultBrasileiro}
}


const emailInfo = extractEmailInformation("joao.silva23@yahoo.com.br");

console.log("Usuario: " + emailInfo.resultUsuario[1]);
console.log("Dominio: " + emailInfo.resultDominio[1]);
console.log("Brasileiro: " , emailInfo.resultBrasileiro ? "sim" : "não");


//VERSÃO NELIO 

function extractEmailInformation(email) {
  const parts = email.split("@");
  const username = parts[0];
  const domain = parts[1];

  const isBrazilian = domain.endsWith(".br");

  return { username, domain, isBrazilian };
}

const emailInfo1 = extractEmailInformation("joao.silva23@yahoo.com.br");
console.log("Usuario:", emailInfo1.username);
console.log("Dominio:", emailInfo1.domain);
console.log("Brasileiro:", emailInfo1.isBrazilian ? "sim" : "nao");

const emailInfo2 = extractEmailInformation("maria123@gmail.com");
console.log("Usuario:", emailInfo2.username);
console.log("Dominio:", emailInfo2.domain);
console.log("Brasileiro:", emailInfo2.isBrazilian ? "sim" : "nao");