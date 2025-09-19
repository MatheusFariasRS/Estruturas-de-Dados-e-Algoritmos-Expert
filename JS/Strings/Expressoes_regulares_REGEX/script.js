//CEP é valido

function validateCEP(cep) {
  const regex = /^\d{5}-?\d{3}$/;
  return regex.test(cep);
}

console.log(validateCEP("12345-678")); // true
console.log(validateCEP("12345678")); // true
console.log(validateCEP("1234-5678")); // false

//remover de um CPF qualquer caractere que não seja um dígito

function removeNonDigits(string) {
    const regex = /\D/g;
    return string.replace(regex, "");
}

console.log(removeNonDigits("94923784799"));
console.log(removeNonDigits("213.445.034-82"));