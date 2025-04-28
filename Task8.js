const prompt = require("prompt-sync")();

let Animal = prompt("Enter Your Animal Size short or tall choose only one");

if(Animal == "short"){
    let Animal = prompt("Enter Your Animal 'Can squeak or Cannot squeak' ")
    if(Animal == "Can squeak"){
        console.log("Might be a squirrel");
    }
    else if(Animal == "Cannot squeak"){
        console.log("Might be a rat");
    }
}
else if(Animal == "tall"){
    let Animal = prompt("Enter Your Animal is 'short neck or long neck' ")
    if(Animal == "short neck"){
        let Animal = prompt("Enter Your Animal is 'short nose or long nose' ")
        if(Animal == "short nose"){
        let Animal = prompt("Enter Your Animal is 'on land or in water' ")
            if(Animal == "on land"){
                console.log("Might be rhinoceros")
            }
            else if (Animal == "in water"){
                console.log("Might be a hippo")
            }
        }
        else if (Animal == "long nose"){
            console.log("Might be an Elephant")
        }
    }
    else if (Animal == "long neck"){
        console.log("Might be a giraffe")
    }
}

else{
    console.log("Please fill animal correct details")
}