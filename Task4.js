const prompt = require("prompt-sync")()

let age = parseInt(prompt("Write Your age"));

let Vote = age >= 18 ? "You Are Eligible for Vote" : "Hi Kid You are not Eligible";

console.log(Vote);