// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

const userInput = prompt("Enter your age")
userInput>=18 ? alert("You are old enough to drive") : alert(`you are left with ${18-userInput} years to drive`)
// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
const myAge = 29;
const yourAge = prompt("Enter your age")
if (yourAge > myAge){
    alert(`You are ${yourAge - myAge} years older than me.`)
} else {
    alert ("I am Older")
}
// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
const randNum = prompt("Enter a number");
// if (randNum/2 === 0){
//     alert(`${randNum} is an even Number`)
// } else {
//     alert(`${randNum} is an odd Number`)
// }
randNum%2 === 0 ? alert(`${randNum} is an even Number`) :  alert(`${randNum} is an odd Number`)
// Write a program which tells the number of days in a month.
const month = prompt("Enter Month")
const monthCase = month.toLowerCase();

switch(monthCase){
    case 'january':
    console.log("January has 31days")
    break
    case 'february':
    console.log("February has 28days")
    break

}