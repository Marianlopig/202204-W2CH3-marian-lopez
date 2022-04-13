function isNumber(val) {
    return (!isNaN(val))
}

function formatNumber(val) {
    return Math.round(val * 1000) / 1000;
}

function showResultsBeauty(result) {
    if (Array.isArray(result)) {
        let res = "Result:  \nThe result of the sum is: " + result[0];
        res += "\nThe result of the sub is: " + result[1];
        res += "\nThe result of the mul is: " + result[2];
        res += "\nThe result of the div is: " + result[3];
        alert(res);
    }
    else {
        alert("La raiz cuadrada es: " + result)
    }
}
function arraySum(val) {
    let total = 0;
    for (let i = 0; i < val.length; i++) {
        total += +val[i]
    }
    return total
}

function arraySub(val) {
    let total = +val[0];
    for (let i = 1; i < val.length; i++) {
        total -= +val[i]
    }
    return total
}

function arrayMul(val) {
    let total = +val[0];
    for (let i = 1; i < val.length; i++) {
        total *= +val[i]
    }
    return total
}

function arrayDiv(val) {
    let total = +val[0];
    for (let i = 1; i < val.length; i++) {
        total = total / +val[i]
    }
    return total
}

function totalCalculation(val) {
    if (val.length === 1) {
        return formatNumber(Math.sqrt(+val[0]))
    }
    else {
        let totalSum = arraySum(val);
        let totalSub = arraySub(val);
        let totalMul = arrayMul(val);
        let totalDiv = arrayDiv(val);
        let result = [totalSum, totalSub, totalMul, totalDiv];
        let formatedResult = result.map(element => formatNumber(element));
        return formatedResult;
    }
}

function calculator() {
    let operator1;
    let validation;
    let allNumbers = new Array();
    do {
        operator1 = prompt("Introduce número a número pulsando aceptar, cuando hayas terminado pulsa cancel")
        validation = isNumber(operator1);
        if (operator1 !== "" && validation) {
            if (operator1 !== null) {
                allNumbers.push(operator1);
            }
        }
        else {
            alert("Debes introducir un número");
        }
    }
    while (operator1 !== null);
    let result = totalCalculation(allNumbers);
    showResultsBeauty(result);
}
let again;
do {
    calculator()
    again = confirm("¿Quieres hacer otra operación?");
}
while (again);

alert("Gracias por usar la calculadora :)");