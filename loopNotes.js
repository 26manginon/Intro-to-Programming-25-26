//  Loop:   Repearts a chunk of code while a certan condition is true 

//  While Loop: Make a fibonacci generator
let i = 1;  //  steps to do
let a = 0;
let b = 1;

//  10th step of the fibonacci sequence
while (i < 10){
    let c = a + b;
    a = b;
    b = c;
    i = i + 1 
}