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

function slopeFinder(x1, y1, x2, y2){
    let m = (y2 - y1) / (x2 - x1);
    if (m <= 0){
        console.log("Try again");
        return("Value was less than or equal to 0");
    } else {
        console.log("m = " + m);
        return(m);
    }
}

slopeFinder(5, 5, 0, 10);  //   said try again
console.log(slopeFinder(5, 5, 0, 10))  //   function returns value message

slopeFinder(0, 5, 5, 10);

//  Let's use this result to finish a y = mx + b math problem 
console.log(y = slopeFinder(0, 5, 5, 10) * 3 + 1) //    underfinded to fix we add "return(m)"