//Enable prompts in JS Web
const prompt = require('prompt-sync')();
//If-Else Statements

let age = prompt("How old are you?-> ");
age = Number(age)
let name = prompt("What is your name?-> ");

if (age >= 18) {
    console.log(`${name} is an adult.`);
} else if (age >= 13) {
        console.log(`${name} is a teenager.`); 
} else {
    console.log("You are a child.");
}

