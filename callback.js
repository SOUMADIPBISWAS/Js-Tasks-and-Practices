function test(a,b,callback){
    console.log(a+b);
    callback()
}

function myCall(){
    console.log("Hello i am a callback function 😊")
}

// NOTE:- hum test ke andar sidhe parameter me callback karne ki jagah my call ko test ke andar bhi apply kar sakte the lakin isme problem ye hai ki fir test fir sirf my call ko hi bar bar leta isliaya humne parameters pass kia jisse hume apni pasand ke jis bhi function ko apply karna hai hum argument me apply kar sake.

function mySeconcall(){
    console.log("hello i am a second callback function🥰")
}

test(2,3,myCall);
test(5,10,mySeconcall);
console.log(heelo);




