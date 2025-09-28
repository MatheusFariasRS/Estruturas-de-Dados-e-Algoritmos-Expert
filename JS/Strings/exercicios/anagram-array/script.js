function isAnagram(s, t){
    const count = new Array(26).fill(0);

    for(let i = 0; i < s.length; i++){
        const index = s.charCodeAt(i) - 'a'.charCodeAt(0);
        count[index]++;
    }
    for(let i = 0; i < t.length; i++){
        const index = t.charCodeAt(i) - 'a'.charCodeAt(0);
        count[index]--;
    }

    for (let val of count) {
        if(val !== 0){
            return false;
        }
    }
    return true;
}


console.log(isAnagram("anagram", "nagaram"));
