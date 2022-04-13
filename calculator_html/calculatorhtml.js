
document.addEventListener('keydown', function(event) {   
    onButonClicked(event.key);
});

function onButonClicked(val) {
    switch (val) {        
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        case ".":
        case "/":        
        case "*":
        case "-":
        case "+":
            appendToDisplay(val)
            break;
        case "AC":
        case "Delete":    
            restart();
            break;
        case "R":
        case "Backspace":
            removeLastDisplayCharacter()
            break;
        case "=":
        case "Enter":
            let res = getResult();
            if (isNaN(res)){
                setDisplayValue("Invalid equation")
            }else {
                setDisplayValue(res);
            }
            
            break;
    }
}

function setDisplayValue(val) {
    let display = document.getElementById("display");
    display.value = val;
}

function getDisplayValue() {
    return document.getElementById("display").value;
}

function appendToDisplay(val) {
    let display = document.getElementById("display");
    let currentValue = display.value;        
    let lastCharacterCurrentValue = currentValue[currentValue.length - 1]
    if (val === '.' && isNaN(lastCharacterCurrentValue)){
        return;
    }
    if (val === "-" && isOperand(currentValue[currentValue.length - 2])
        && isOperand(lastCharacterCurrentValue)) {
        display.value = display.value.substring(0,display.value.length -1);
    }
    else if (isOperand(lastCharacterCurrentValue) && isOperand(val) && val !== "-") {
        let newValue = currentValue.substring(0, currentValue.length - 1);
        let finalValue = newValue + val;
        display.value = finalValue;
    } else {
        display.value = display.value + val;
    }
}

function getResult() {
    let equation = getDisplayValue();
    equation = cleanSimbols(equation)
    equation = resolveEquation(equation, "*", mul);
    equation = resolveEquation(equation, "/", div);
    equation = resolveEquation(equation, "+", add);}


    equation = resolveEquation(equation, "-", rem);
    return equation;
function cleanSimbols(equation){
    let ret = equation;
    if (isOperand(ret[0]) && ret[0] !=='-'){
        ret = ret.substring(1);
    }
    if (isOperand(ret[0]) && isOperand(ret[1])){        
        if (ret[0] === '-' && ret[1] ==='-'){
            ret = ret.substring(2);
        } else{
            ret = ret.substring(1);
        }        
    }
    if (isOperand(ret[ret.length-1])){
        ret = ret.substring(0, ret.length-1);
    }
    return ret;
}

function resolveEquation(equation, simbol, opFunction) {
    let index = equation.indexOf(simbol)
    if (index === 0) {
        index = equation.substring(1).indexOf(simbol);
    }
    if (index === -1) {
        return equation;
    }
    let i = index - 1
    let j = index + 1
    let leftNumber = "";
    let rightNumber = "";
    while (!isOperand(equation[i]) && i >= 0) {
        leftNumber = equation[i] + leftNumber;
        i--
    }
    if (i === 0 && isOperand(equation[i]) && equation[i] === "-") {
        leftNumber = "-" + leftNumber
        i--
    }
    if (isOperand(equation[i - 1]) && equation[i] === "-") {
        leftNumber = "-" + leftNumber
        i--
    }
    if (isOperand(equation[j]) && equation[j] === "-") {
        rightNumber = "-"
        j++
    }
    while (!isOperand(equation[j]) && j < equation.length) {
        rightNumber = rightNumber + equation[j];
        j++
    }
    let result = opFunction(leftNumber, rightNumber);
    let newEquation = equation.substring(0, i + 1) + result + equation.substring(j, equation.length);
    return resolveEquation(newEquation);
}

function isOperand(val) {
    return ["/", "*", "-", "+"].includes(val)
}

function mul(x, y) {    
    return parseFloat(x) * parseFloat(y);
}

function div(x, y) {
    return parseFloat(x) / parseFloat(y);
}

function add(x, y) {
    return parseFloat(x) + parseFloat(y);
}

function rem(x, y) {
    return parseFloat(x) - parseFloat(y);
}

function removeLastDisplayCharacter() {
    let display = document.getElementById("display");
    let displayLength = display.value.length;
    display.value = display.value.substring(0, displayLength - 1);
}

function restart() {
    let display = document.getElementById("display");
    display.value = null;
}
