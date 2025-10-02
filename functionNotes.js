//  Fucntions are blocks of code where you can write the framework and then execute it later with 
//      specific conditions. They consist of a function name, parameters and then the code itself. 
//      You "call" the function later and "pass" it arguments.

// function favoriteAnimal(animal){
//     return animal + " is my favorite animal"
// };

// favoriteAnimal("Panda");

// console.log(favoriteAnimal("Panda"));

// function favoriteAnimal2(animal){
//     console.log(animal + " is my favorite animal");
// }

// favoriteAnimal2("Turtle");

//  Using function return as an error code. Let's say that we want to do some math
//      with a function, but we expect a certain kind of value. 
//  Ex. Write a function to find slope of a line given 2 points and we know that this
//      should always be positive. m = (y2 - y1) / (x2 - x1).

// function slopeFinder(x1, y1, x2, y2){
//     let m = (y2 - y1) / (x2 - x1);
//     if (m <= 0){
//         console.log("Try again");
//         return("Value was less than or equal to 0");
//     } else {
//         console.log("m = " + m);
//         return(m);
//     }
// }

// slopeFinder(5, 5, 0, 10);  //   said try again
// console.log(slopeFinder(5, 5, 0, 10))  //   function returns value message

// slopeFinder(0, 5, 5, 10);

// //  Let's use this result to finish a y = mx + b math problem 
// console.log(y = slopeFinder(0, 5, 5, 10) * 3 + 1) //    underfinded to fix we add "return(m)"

//  Declare variables outside of a function not within 

//  Local scope is whats happening within a function
//  Global scope is whats happening within the entire program 
//  Functions can usually pull from the global scope INTO the local scope
//  But programs CANNOT pull from the local scope. You need to return the values instead. 

// let x = 5 

// function fish(type){
//     let i = 1;
//     console.log(type + x + i);
// }

// fish("cod");

// console.log(i);

//  Functions are really useful when you have a block of code that you need to reuse in different 
//      places or with different "settings".

//  What we have doen up to here is function delcaration. You can also use function expressions. 

// let sayHi = function(){
//     alert("Hello!");
// };

// console.log(sayHi);

// sayHi();

//  Function delcaration will allow you to use a function before its defined. 
//  Function expressions will only work after the function's been defined. 

//  Another way to create functions is the "arrow function".
//  Arrow functions are essentially compact function expressions.

let sum = (a,b) => a + b;

console.log(sum(3,5));

//  This is functionally equivalent to 
// let sum = function(a.b){
//      return a + b
// };

//  You can also use arrow functions to create "anonymous" functions

let age = prompt("What is your age?");

let welcome = (age < 18) ?
    () => alert("Sup") :
    () => alert("Hello")

welcome();