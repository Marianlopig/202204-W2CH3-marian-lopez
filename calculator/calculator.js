function isNumber (val) {
    return(val && !isNaN(val))
}

function isValid (val,canBeNull) {
    if(canBeNull && !val) {
        return true;
    }
    return isNumber(val);
}

function formatNumber(val) {
    return Math.round(val * 1000) / 1000;
}

function showResultsBeauty(result) {
    if(Array.isArray(result)) {    
        let res = "Result:  \nThe result of the sum is: " + result[0];
        res += "\nThe result of the sub is: " + result[2];
        res += "\nThe result of the mul is: " + result[1];
        res += "\nThe result of the div is: " + result[3];
        alert(res);
    }
    else {
        alert("La raiz cuadrada es: " + result)
    }
}

function totalCalculation (operator1, operator2) {
    operator1=+operator1
    if(!operator2) {
        return formatNumber(Math.sqrt(operator1))
    }
    else {
        operator2=+operator2
        let result = [operator1 + operator2, operator1 * operator2, operator1 - operator2, operator1 / operator2]
        return result.map(val => formatNumber(val));
    }
}
 
let operator1
let validation
do {
    operator1 = prompt("Introduce el primer número de tu operación")
    validation = isValid(operator1, false);
    if(!validation) {
        alert("Debes introducir un número");
    } 
}
while(!validation);

let operator2
do {
    operator2 = prompt("Introduce el segundo número de tu operación")
    validation = isValid(operator2, true)
    if(!validation) {
        alert("Debes introducir un número");
    } 
}
while(!validation);


let result = totalCalculation(operator1,operator2);
showResultsBeauty(result);                  