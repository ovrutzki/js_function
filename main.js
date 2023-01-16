// // // EX1
// // // create an HTML project. Write the solutions in a main.js file. Before each function write (copy) in a comment the exercise guidance 

// // // Write a JavaScript function to print (console.log()) the “Hello World” message
// // function greeting(){
// //     console.log('Hello World');
// // }
// // greeting();
// // // Write a function that returns the square of a number
// // function squared(num){
// //     return Math.pow(num, 2);
// // }
// // console.log(squared(4));
// // // Write a function to convert Celsius to Fahrenheit and return the conversion
// // let fahrenheit = function degreeConvert(celsius){
// //   return (celsius * 1.8) + 32
// // }
// // console.log(fahrenheit(28));
// // // Write a function to print a random number. Check out Math.random()
// // function randomNum(){
// //   console.log(Math.floor(Math.random()*10));
// // }
// // randomNum()

// // Write a function named tellFortune that:
//     // takes 4 arguments: number of children, partner's name, geographic location, job title.
//     // Alert your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
//     // Call that function 3 times with 3 different values for the arguments.
// // function tellFortune(numOfChildren, partnerName, location, jobTitle){
// //     alert(`You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numOfChildren} kids.`)
// // }
// // tellFortune(2, 'jenifer', 'TLV', 'doctor');
// // tellFortune(3, 'dona', 'Pris', 'plumber');
// // tellFortune(5, 'rachel', 'Berlin', 'cheff');
// // Write a function that takes in a number and returns the number as a string with commas as thousand separators. For example, the number 1234567 should be returned as "1,234,567"
// function numToString(add7Diggit){
//     // let newString = add7Diggit.toString();
//     let goodString = Intl.NumberFormat({}).format(add7Diggit);
//     console.log(goodString);
//     console.log(typeof goodString);
// }
// numToString(12345678);

// // Write a function that takes in a string and returns the string with all vowels removed. For example, the string "Hello, World!" should be returned as "Hll, Wrd!".
// function vowelsRemoved(sentence) {
//    let noVowels = sentence.replace(/a|e|i|u|o/gi,'');
//    console.log(noVowels);
// }
// vowelsRemoved('oookkqkqknye');
// // Write a function that takes in a number and returns the number rounded to the nearest integer. For example, the number 4.6 should be returned as 5, and the number 4.4 should be returned as 4. (check out Math metods and properties)

// function roundedNum(num){
//     return Math.round(num);
// }
// console.log(`your rounded num is: ${roundedNum(4.4)}`);
// // Write a function that takes in a string and returns a new string with the first letter of each word capitalized. For example, the string "hello, world!" should be returned as "Hello, World!".
// function capitalCase (sentences){
//     let words = sentences.split(' ');
//     console.log(words);
//     console.log('wewe ' + typeof words);
//     // for (let i = 0; i < words.length(); words.toUpperCase()){
//     //     console.log(words[i]);
//     // }
// }
// capitalCase('hello world');
// // Write a function that:
// // Save the hostname of the current URL as a variable (check location.hostname)  
// // Alert the sentence: “Hello, your hostname is _(your variable)_ . Welcome!”
// let hostName = function hostName(){
//     console.log((`Hello, your hostname is _${location.hostname}_ . Welcome!`));
// }
// hostName();

// let test = ['hello', 'world', 'when','how'];
// console.log(test);
// for (let i = 0; i < test.length; test.toUpperCase){
//     console.log(test[i]);
// };
// =====================================================================
// ES6 Basics
// 1
let square = (num) => {
    console.log(num*num);
    return num*num;
}

square(9);

// 2
const isPositive = (num) =>{
    if (num>0) {
        console.log('true');
        return true;
    } else {
        console.log('false');
        return false
    }
}
isPositive(2);

// 3
const formatName = (first = 'mr. ', last = 'Gest', optinal = ' ')=>{
    console.log(first + optinal + last);
}

formatName('bob', 'mobi');

// 4
import {greet, calculate} from "./utils.js";
greet('eran');

// 5
calculate(3,4,'*');

// 6
const team = ["Chennai", "Mumbai", "Bangalore"];
const captain = ["Dhoni", "Rohit", "Kohli"];

const newArrey = [...team, ...captain]
console.log(newArrey);

// 10
// const letters = [a, b, c];

// 11
const actors = [
    { actorName: "Tom Hanks", birthdate: "July 9, 1956" },
    { actorName: "Meryl Streep", birthdate: "June 22, 1949" },
    { actorName: "Leonardo DiCaprio", birthdate: "November 11, 1974" },
   ];
//  a
   const [firstActor, ,thirdActor] = actors
   console.log(firstActor);
   console.log(thirdActor);
// b
const leoBDay = thirdActor.birthdate;
//    13
class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.greet =function(){
            console.log( `Hello, my name is ${this.name} and I am ${this.age} years old`);
        }
        }
    }
let personOne = new person('eran', 30);

personOne.greet();


