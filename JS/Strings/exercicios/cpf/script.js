let cpf1 = "87409217293"
let cpf2 = "874092172-93"
let cpf3 = "874.092.172-93"

//recebe um cpf que nesse momento é uma string

function removeNonDigits(str){
    const regex = /\D/g;
    return str.replace(regex, "");

}
console.log(removeNonDigits(cpf1));
console.log(removeNonDigits("874092172-93"));
console.log(removeNonDigits("874.092.172-93"));