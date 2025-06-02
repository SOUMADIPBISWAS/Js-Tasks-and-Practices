// // shallow copy or deep copy

// ------------------------------Shallow Copy Methord------------------------------
//  const myObj = {
//     ProductName: "Iphone",
//     ProductPrice: "$59",
//  }

// // const mySecondObj = {...myObj}; //spread operator Shallow copy

// const mySecondObj = Object.assign({},myObj);// without using spread operator Shallow copy

// mySecondObj.ProductName = "Samsung";

//  console.log(myObj)

//  console.log(mySecondObj)

//------------------------------Deep Copy------------------------------------------

const myObj = {
   ProductName:"I-phone",
   ProductPrice: "$69",
   Address :{
      City: "Jaipur",
      Pincode: 6789,
   }
}

const mySecondObj = JSON.parse(JSON.stringify(myObj));

// mySecondObj = {...myObj};

mySecondObj.ProductName = "Samsung";
mySecondObj.Address.City = "Udaipur";

console.log(myObj);
console.log(mySecondObj);