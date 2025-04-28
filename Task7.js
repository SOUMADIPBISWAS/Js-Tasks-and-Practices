const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Enter Your First Number"));
let Num2 = parseInt(prompt("Enter The Second Number"))
let operator = prompt("Enter Operator (+,*,-,/):-")
let result = "";

if(operator == "+"){
    result = num1 + Num2
}
else if(operator == "-"){
    result = num1 - Num2
}
else if(operator == "*"){
    result = num1 * Num2
}

else if(operator == "/"){
    result = num1 /Num2
}
else{
    console.log("Please fill correctly")
}

console.log(result);