function extractDateData(date){
    const parts = date.split("/");
    const day = Number(parts[0]);
    const month = Number(parts[1]);
    const year = Number(parts[2]);

    return `Dia: ${day}\nMês:${month}\nAno: ${year}`
}

const emailInfo1 = extractDateData("21/07/2010");
console.log(emailInfo1)

function extractDateDataV2(date){
    const day = Number(date.substring(0, 2));
    const month = Number(date.substring(3, 5));;
    const year = Number(date.substring(6, 10));

    return `Dia: ${day}\nMês:${month}\nAno: ${year}`
}
console.log("\nSubstring\n")
const emailInfo2 = extractDateDataV2("21/07/2010");
console.log(emailInfo2)

console.log("\nformatDate\n")


// minha versão
function formatDate(day, month, year){
    
    if(day < 10 && month < 10){
        day = "0" + day;
        month = "0" + month;
    }
    else if(day < 10){
        day = "0" + day;
    }
    else{
        month = "0" + month;
    }
    return `${day}/${month}/${year}`
}

console.log(formatDate(1, 1, 2010));

// Nelio

console.log("\nformatDate1 \n")

function formatDate1(day, month, year){
    //até completar 2 digitos, adiciona um 0 no inicio
    const formatDay = String(day).padStart(2, "0");
    const formatMonth = String(month).padStart(2, "0");

    return `${formatDay}/${formatMonth}/${year}`
}

console.log(formatDate1(1, 1, 2010));

console.log("\nformatDate2 Nelio\n")

function formatDate2(day, month, year){
    return `${addZero(day)}/${addZero(month)}/${year}`
}

function addZero(n){
    if(n < 10){
        return `0${n}`;
    }
    return `${n}`
}

console.log(formatDate2(1, 1, 2010));