// let password = ""
// do{
//     password = prompt("Please enter your password");
// } while (password != "password");

// console.log("Access Granted");

//  Do while is a while loop, but it executes at least once 

//  For loop: for loops are like while loops but they condense most of the loop control into 
//      the delcaration 

// for(let i = 2; i < 30; i+=2){
//     console.log(i);
// }

// for(let i = 28; i > 0; i-= 2){
//     console.log(i);
// }

//  ARRAYS: Arrays are like variables, except they can store multiple 
//      values in them. They are imaginary partitioned boxes. Each partition
//      is identified by an index value starting from 0. You can store multiple
//      data types in the same array. 

let numbers = [];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

console.log(numbers[14]);

//  Method: .push(). .push() will add a value to the end of an array

let numbers2 = [];
for(let i = 1; i <21; i++){
    numbers2.push(i)
}

console.log(numbers2);


