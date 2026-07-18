/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" + String( - 2); //Changed -2 to a string to ensure proper concatenation instead of subtraction
console.log("The result is: " + result);

let isValid = Boolean(""); //Changed the value to the Boolean function to be an empty string, making it a falsy value
if (isValid) {
    console.log("This is valid!");
} else {
      console.log("This is not valid!"); //Added an else statement to clarify code correction via console.log() output
    }

let age = "25";
let totalAge = Number(age) + 5; //Converted age to a number to avoid the numbers concatonating as strings
console.log("Total Age: " + totalAge);

let catName = "Oliva";
let catAge = 2;
console.log(`${catName} is ${catAge} years old.`); //example of implicit type conversion using template literals, which automatically convert variables to strings to avoid tedious manual concatenation

let undefinedVar;
console.log(typeof undefinedVar); //demonstrates data type as undefined
booksReadAnnualTotal = 46;
booksReadJuly = 5;
undefinedVar = booksReadAnnualTotal + booksReadJuly; //Implicit conversion of undefined to number
console.log("Books Read: " + String(booksReadAnnualTotal + booksReadJuly)); //Explicitly converts the sum from numbers to a string