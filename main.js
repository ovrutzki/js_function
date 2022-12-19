// // EX1
// // create an HTML project. Write the solutions in a main.js file. Before each function write (copy) in a comment the exercise guidance 

// // Write a JavaScript function to print (console.log()) the “Hello World” message
// function greeting(){
//     console.log('Hello World');
// }
// greeting();
// // Write a function that returns the square of a number
// function squared(num){
//     return Math.pow(num, 2);
// }
// console.log(squared(4));
// // Write a function to convert Celsius to Fahrenheit and return the conversion
// let fahrenheit = function degreeConvert(celsius){
//   return (celsius * 1.8) + 32
// }
// console.log(fahrenheit(28));
// // Write a function to print a random number. Check out Math.random()
// function randomNum(){
//   console.log(Math.floor(Math.random()*10));
// }
// randomNum()

// Write a function named tellFortune that:
    // takes 4 arguments: number of children, partner's name, geographic location, job title.
    // Alert your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
    // Call that function 3 times with 3 different values for the arguments.
// function tellFortune(numOfChildren, partnerName, location, jobTitle){
//     alert(`You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numOfChildren} kids.`)
// }
// tellFortune(2, 'jenifer', 'TLV', 'doctor');
// tellFortune(3, 'dona', 'Pris', 'plumber');
// tellFortune(5, 'rachel', 'Berlin', 'cheff');
// Write a function that takes in a number and returns the number as a string with commas as thousand separators. For example, the number 1234567 should be returned as "1,234,567"
function numToString(add7Diggit){
    // let newString = add7Diggit.toString();
    let goodString = Intl.NumberFormat({}).format(add7Diggit);
    console.log(goodString);
    console.log(typeof goodString);
}
numToString(12345678);

// Write a function that takes in a string and returns the string with all vowels removed. For example, the string "Hello, World!" should be returned as "Hll, Wrd!".
function vowelsRemoved(sentence) {
   let noVowels = sentence.replace(/a|e|i|u|o/gi,'');
   console.log(noVowels);
}
vowelsRemoved('oookkqkqknye');
// Write a function that takes in a number and returns the number rounded to the nearest integer. For example, the number 4.6 should be returned as 5, and the number 4.4 should be returned as 4. (check out Math metods and properties)

function roundedNum(num){
    return Math.round(num);
}
console.log(`your rounded num is: ${roundedNum(4.4)}`);
// Write a function that takes in a string and returns a new string with the first letter of each word capitalized. For example, the string "hello, world!" should be returned as "Hello, World!".
function capitalCase (sentences){
    let words = sentences.split(' ');
    console.log(words);
}
capitalCase('hello world');
// Write a function that:
// Save the hostname of the current URL as a variable (check location.hostname)  
// Alert the sentence: “Hello, your hostname is _(your variable)_ . Welcome!”
let hostName = function hostName(){
    console.log((`Hello, your hostname is _${location.hostname}_ . Welcome!`));
}
hostName();