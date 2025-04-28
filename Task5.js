const prompt = require("prompt-sync")()

let Number = parseInt(prompt("Write Your Exam Number"));

if(Number >= 100){
    console.log("A++")
}
else if(Number >= 90){
    console.log("A+")
}
else if(Number >=80){
    console.log("A")
}
else if(Number >= 70){
    console.log("B+")
}
else if(Number >= 60){
    console.log("B")
}
else if(Number >= 50){
    console.log("C")
}
else if(Number >= 40){
    console.log("D")
}
else if(Number >= 30){
    console.log("E")
}
else if(Number >= 0){
    console.log("Failed ! Better Luck Next Time 😞")
}
else{
    console.log("Tera kuch nhi ho sakta")
}