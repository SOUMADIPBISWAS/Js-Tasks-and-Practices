const users = [
  { firstName: "Alice", lastName: "Smith" },
  { firstName: "Bob", lastName: "Jones" },
  { firstName: "Charlie", lastName: "Brown" }
];

// const FullName = users.map(({firstName,lastName})=>`${firstName}`)

// FullName.forEach(name => console.log(`Hello ${name}!`))

const myArray = ["Soumadip",true,582,"Biswas"]

const returnValue = myArray.map((value,index)=>{
    return(value + index)
    
})

const againValue = myArray.forEach((value,index)=>{
    return (value)
})

console.log(returnValue);
console.log(againValue);
// myArray.map((value,index)=>{
//     console.log(value + "index:-" + index)
// })

// myArray.forEach((value,index)=>{
//     console.log(value + " index:- "+ index)
// })

// const newArray = users.map(({firstName,lastName})=>{
//     return(`Hello my name is ${firstName} ${lastName}`);
    
// })


// console.log(newArray);
// console.log(myArray);
