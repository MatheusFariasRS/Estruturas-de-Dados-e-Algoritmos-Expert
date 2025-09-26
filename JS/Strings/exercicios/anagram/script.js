/*

verificar se todas as letras 
return s.length === t.length;
Limitações:
    • 1 <= s.length, t.length <= 5 * 104
    • s e t são letras minúsculas da Língua Inglesa.
*/

//PASSO A PASSO 

function isAnagram(s, t) {
 
    const sArray = s.split('');
    const tArray = t.split('');

    sArray.sort();
    tArray.sort();

    const sSorted = sArray.join('');
    const tSorted = tArray.join('');

    if(sSorted === tSorted){
        return true;
    }
    else{
        return false;
    }
}

console.log(isAnagram("anagram", "nagaram"));

console.log(isAnagram("rat", "car"));

//RESUMIDA

function isAnagram(s, t) {
 
    const sSorted = s.split('').sort().join('');
    const tSorted = t.split('').sort().join('');

    return sSorted === tSorted;
}

console.log(isAnagram("anagram", "nagaram"));

console.log(isAnagram("rat", "car"));