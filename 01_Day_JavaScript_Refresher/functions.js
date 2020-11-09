// Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
    return `My Full name is ${firstName} ${lastName}`
    
}

fullName('Chineta', 'Adinnu')
// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a, b) {
    let sum = a + b;
    return sum;
}
addNumbers(3, 4)
// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
function areaOfCircle(r) {
    let area = Math.PI * r * r;
    return area
    
}
areaOfCircle(30)
// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
function convertCelciusToFahrenheit(oC) {
    let oF = (oC * 9/5) + 32;
    return oF;
}
convertCelciusToFahrenheit(10);
// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
    if(month==="january" || "february" || "march" || "april"){
        return `${month} is Autumn`
    } else if (month ==="may" || "june" || "july" || "august"){
        return `${month} is summer`
    } else if (month=== "september" || "october" || "november" || "december"){
        return `${month} is winter`
    }
    
}
// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
    console.log(arr)
}
let numbers = [1, 4, 5, 6, 7]
printArray(numbers);
// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime() {
    let newDaate = new Date();
    console.log(newDaate)
}
// Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
    [x, y]=[y, x];
    return `${x} ${y}`;
}
// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr) {
    for(el of arr){
       console.log( el.toUpperCase())
    }
}
let capitalizedValue = ["am", "i", "doing", "this", "right"]
capitalizeArray(capitalizedValue)
// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item) {
    let itemList = [];
    itemList.push(item);
    return itemList;
}