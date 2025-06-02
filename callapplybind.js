// this. keyword


// const product_one = {
//     productName: "Iphone",
//     productPrice: "$56",
//     address: {
//         city: "Jaipur",
//         pincode: "302004",
//     },
//     allDetails: function() {
//         console.log(`ProductName:- ${this.productName} ProductPrice:- ${this.productPrice} ProductPin:- ${this.address.pincode}`);
//     },
// };

// product_one.allDetails();

// const product_two = {
//     productName: "Samsung",
//     productPrice: "$40",
//     address: {
//         city: "dholakpur",
//         pincode: "696969"
//     },

//     allDetails : function(){
//         console.log(`Product Name:- ${this.productName}`)
//     }
// }

// product_two.allDetails();

// // call apply bind

// const product_three = {
//     productName: "Oppo",
//     productPrice: "$25",
//     address: {
//         city: "dholakpur",
//         pincode: "696969"
// },
// }

// product_two.allDetails.call(product_three);

//--------------------------------- Call 2nd example--------------------------------



const product_one = {
    productName: "Apple",
    productPrice: "$59"
}

const product_two = {
    productName: "Oppo",
    productPrice: "$21"
}

const product_Three = {
    productName: "Samsung",
    productPrice: "$8"
}

function valueAccess(city, pincode){
    console.log(`Product Name:- ${this.productName} Product Price:- ${this.productPrice} city :- ${city} Pincode:-${pincode} `)
}

valueAccess.call(product_one, "jaipur", 302001 );

//deffrence of Call And Apply 

valueAccess.apply(product_two, ["Kishangarh",999999]);

//bind 

const bound = valueAccess.bind(product_Three,"Sikkim", 56850);
console.log(bound)
bound()