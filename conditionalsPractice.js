//  Notes and practice for conditionals

//  Conditionals:   a way to control wether or not a block of code executes based on whether prior 
//  conditions are met 

// console.log(Date())
//  Example:    Great the user with good morning, good afternoon, or good evening!
//  Morning:    Before noon 
//  Afternoon:  Before 6 P.M. (18)
//  Night:  6 P.M. (18) and after 

// let currentHour = +(Date().slice(16, 18));
// console.log(currentHour);

// if(currentHour < 12){
//         console.log("Good Morning!")
// } else if (currentHour < 18) {
//      console.log("Good Afternoon!")
// } else {
//     console.log("Good Evening!")
// }

//  Logical operators:  Symbols that allow you to combine multiple conditions
//  || -OR -    this will evaluate to "true" when either statement is true 
//  && - AND -  this will evaluate to "true" only if both statements are true 
// ! - NOT -    this will flip the "truthiness" of the value 

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

//  some values are "truthy" or "falsy". They'll behave like "true" and "false" without being true 
//  or false

//  1 is truthy 2 is falsy

// console.log(1 || 0);
// console.log(0 || 0);

//  Most of the time you're essentially using || to test if any of the given conditions is true 
//  Example:

// let hour = 9 
// //  Exmaple 1
// if (hour < 9 || hour > 18){
//         console.log("We're closed");
// } else {
//     console.log("We're Open");
// }

// //  Example 2
// if (!(hour < 9 || hour > 18 )){
//         console.log("We're Open");
// } else {
//     console.log("We're Closed");
// }

 //  Example 3
// if (!(hour < 9) || !(hour > 18)){
//     console.log("We're Open");
// } else {
//     console.log("We're Closed");
// }

 //  Exmaple 4
// if (hour >= 9 && hour <= 18){
//     console.log("We're Open");
// }

//  We can apply more than two conditions:
// let hour = 8;
// let isWeekend = true;

// if (hour < 7.5 || hour > 14.5 || isWeekend){
//     console.log("School's Closed");
// } else {
//     console.log("School's Over");
// }

//  Functionally, javaScript's OR function find the FIRST truthy value, then returns it 
//  If not truthy value is found it returns the last value 

// let firstName = "";
// let lastName = "";
// let nickName = "";

// console.log(firstName || lastName || nickName || "Anonymous");

//  Functionally, javaScripts AND function finds the first "falsy" value, then returns it 
//  If not falsy values are found it returns the last value.

console.log(10 && 5 && 0 && 1);
console.log(10 && 5 && 1);
console.log(10 && 5 && 15);