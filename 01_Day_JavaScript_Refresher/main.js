// Declare an empty array;
const emptyarr = [];
console.log(emptyarr);
// Declare an array with more than 5 number of elements
const moreThanFive = ["one", "two", "three", "four", "five", "six"];
console.log(moreThanFive);
// Find the length of your array
console.log(moreThanFive.length);
// Get the first item, the middle item and the last item of the array
console.log(moreThanFive[0]);
console.log(moreThanFive[3]);
let lastindex = moreThanFive.length - 1;
console.log(moreThanFive[lastindex]);
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
  "one",
  "two",
  3,
  4,
  ["five", "six"],
  { seven: "eight", nine: "ten" },
];
console.log(mixedDataTypes.length);
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// Print the array using console.log()
console.log(itCompanies);
// Change each company name to uppercase one by one and print them out
let first = itCompanies[0].toUpperCase();
console.log(first);
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let second = `${itCompanies.join(", ")} are big IT companies`;
console.log(second);
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if (itCompanies.includes("kohasa")) {
  console.log("kohasa");
} else {
  console.log("does not exist");
}
itCompanies.includes("kohasa")
  ? console.log("kohasa")
  : console.log("I don't exist");
// Sort the array using sort() method
let sorting = itCompanies.sort();
console.log(sorting);
// Reverse the array using reverse() method
let reverse = itCompanies.reverse();
console.log(reverse);
// Slice out the first 3 companies from the array
let slicing = itCompanies.slice(0, 3);
console.log(slicing);
// Slice out the last 3 companies from the array
let sliceLast = itCompanies.slice(4);
console.log(sliceLast);
// Slice out the middle IT company or companies from the array
let splices = itCompanies.splice(3, 1);
console.log(splices);
// Remove the first IT company from the array
let removeFirstArr = itCompanies.shift();
console.log(removeFirstArr);
// Remove the middle IT company or companies from the array
// let removeMiddle = itCompanies.shift(3)
// console.log(removeMiddle)
// Remove the last IT company from the array
let removeLast = itCompanies.pop();
console.log(removeLast);
// Remove all IT companies
let removeAll = itCompanies.slice(4, 4);
console.log(removeAll);
// First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.split(" ");
console.log(words);
console.log(words.length);
// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullstack = frontEnd.concat(backEnd);
console.log(fullstack);
// Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const sortedAges = ages.sort();
console.log(sortedAges)
const minAge = Math.min(...ages)
console.log(minAge)
const maxAge = Math.max(...ages)
console.log(maxAge)
// Find the middle country(ies) in the countries array
let middle = countries.length/2
let middleItem = countries[Math.floor(middle)]
console.log(middleItem)

