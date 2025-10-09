//  Loop:   Repearts a chunk of code while a certan condition is true 

//  While Loop: Make a fibonacci generator
// let i = 0;  //  steps to do
// let a = 0;
// let b = 1;
// let c;
// console.log(a);
// console.log(b);

////  10th step of the fibonacci sequence
// while (i < 8){
//     c = a + b;
//     a = b;
//     b = c;
//     i = i + 1 
//     console.log(c);
// }

//  Make a fibonacci sequence up to a certain value 
//  All fibonacci sequence smaller than 150 

// let a = 0;
// let b = 1;
// let c = 0;
// console.log(a);
// console.log(b);

// while (a + b < 150){
//     c = a + b;
//     a = b;
//     b = c;
//         console.log(c);
//     }


//  Using "if" to control the console.log allows you to stop the last result from printing but 
//      it still runs the code for one extra loop 
//  Changing the loop condition to "a + b < 150" should stop the loop from runnning at all
//      when we don't want it to.

//  Another form of while is the do...while loop.

// let i = 5;
// do {
//     console.log(i);
//     i += 1;
// } while (i < 3);
//  A do while loop will always run at least once.

//  Two examples of password verification using loops

//  Traditional loop, password should be "Badin"

// let password = prompt("Please enter your password");

// while(password != "Badin"){
//     password = prompt("Please enter your password");
// }

// console.log("Access Granted");

//  do...while version:
// let password;

// do{
//      password = prompt("Please enter your password");
// } while (passowrd != "Badin");

//     console.log("Access Granted");

//  Finally, there is the "for" loop. It is the most commonly used, and it's really just a fancy
//      way to do a while loop 


// let a = 0;
// let b = 1;
// let c;
// console.log(a);
// console.log(b);

// for (let i = 0; i < 8; i +=1){
//     c = a + b;
//     a = b;
//     b = c;
//     console.log(c);
// }

//  Break and continu:  Advanced loop management. "Break" will escape from the loop completely
//      "continue" will skip to the end of the current iteration and go back to the top of the loop 

//  Example:   addition only calculator to keep a runing tally
// let sum = 0;
// while(true) {
//     let value = +prompt("Enter a number");

//     if (!value){
//         break;
//     }

//     sum += value;

//     console.log("Current total is ", sum);
// }

// console.log("Program Terminated");

//  continue:   Here's a code that prints only even numbers up to 30

// for(let i = 0; i < 31; i += 1){
//     if (i % 2 ==0){
//         continue;
//     }
//     console.log(i);
// }

