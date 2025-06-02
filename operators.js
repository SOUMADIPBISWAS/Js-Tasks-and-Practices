// =============================Rest Operator=====================================

function sum(...numbers){
    let result = 0;
    for(let num of numbers){
        result += num;
    }
    return result;
}

function multi(...numbers){
    let result = 1;
    for(let num of numbers){
        result *= num;
    }
    return result;
}
 console.log(multi(25,8,2,8,6))

// console.log(sum(2,3,500));