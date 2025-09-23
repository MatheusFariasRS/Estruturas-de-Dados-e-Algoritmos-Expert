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
