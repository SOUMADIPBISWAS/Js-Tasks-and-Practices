const prompt = require("prompt-sync")()

let number = prompt("Give a number");


if(number<0){
    console.log("Your Number is Negative")
}

else if(number == 0){
    console.log("Your Number is Zero")
}

else if(number>0){
    console.log("Your Number is Positive")
}

else(
    console.log("Write a Valid Number")
)

// This is real file
