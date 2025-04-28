const prompt = require("prompt-sync")()

let number = prompt("Write any number");

if(number % 2 == 0){
    console.log("your number is even");
}

else if(number % 2 == 1){
    console.log("your number is odd");
}

else{
    console.log("Your Number is not Valid")
}