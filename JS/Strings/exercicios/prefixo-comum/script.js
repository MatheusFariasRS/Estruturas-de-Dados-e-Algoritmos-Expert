function longestCommonPrefix(v){
    let prefix = [""];
    for(let i = 0; i < v.length; i++){
        if(v[i] > prefix[0]){
            prefix[0] = v[i];
        }
    }
    return prefix
}
console.log(longestCommonPrefix(["flow","flight","flowers"]));
// receber um array de strings e verificar qual o maior
// passar pelas posições do array
// ver qual posição(i) é a maior
// real desafio, ver o tamanho de uma string dentro da posição de um array