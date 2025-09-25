/*
input:
 - 8 caracteres
 - menos uma letra (maiúscula ou minúscula)
 - pelo menos um dígito
 - pelo menos um caractere especial: @, #, &
output:
VALIDO || INVALIDO
*/

function validatePassword(str){
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#&]).{8,}$/;
    
    return str.match(regex) ? "VALIDO" : "INVALIDO";
}

console.log(validatePassword("amerca1@"))
console.log(validatePassword("amrca154682"))
