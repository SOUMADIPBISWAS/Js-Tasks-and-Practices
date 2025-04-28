const prompt = require("prompt-sync")()

let First_Number = parseInt(prompt("Write Your First Number")); 
let Second_Number =  parseInt(prompt("Write Your Second Number"));

if(First_Number>Second_Number){
    console.log(`Your First Number is largest ${First_Number}`)
}

else if(First_Number<Second_Number){
    console.log(`Your Second Number is Largest ${Second_Number}`)
}

else if(First_Number == Second_Number){
    console.log(`Your Number is Equal ${First_Number}`)
}

else{
    console.log("Please Fill The Valid Number")
}