// Number
// let n = 5;                      // "int", integer
// n = 254.4831439431;             // "float", floating point number (deciamls
// // javascript lumps int and float into a single data type, "number".

// There are some special values included in the number datatype
// Infinity, -Infinity, and NaN (NaN is "Not a Number")
// Mathmatical operations in JavaScript is "safe", you can do anything


// BigInt, Big INteger, represents Big... Integers...
//"number" as a data type can't store an integer value larger than (2^53 - 1) : 9,007,199,254,740,991

// const sampleBigInt = 123456789123456789123456789n;

//final "n" indicates that it's a BigInt

// // String - text.   There are three ways to prodcue strings in JavaScript which are slightly different

// let string1 = "this is a string."
// let string2 = 'this is also a string'

// you usually select what string notation you're using based on the content of your string

//example

// let dialogue = "The man yelled, "Here we go""         (wont't work
// let dialogue = 'The man yelled, "Here we go"'

// If your text will include ', use double quotes (")
// If it will include dialogue, use single quotes (')

// Functionally, single and double quotations are the same
// The third method of writing strings is fundamentially different

// let name = "Steve";

// alert (`Hello, ${name}`);

// Backticks allow you to embed code into the string

// console.log(` 3 + 4 is equal to ${3 + 4}`);

// char doesn't exist in JavaScript but does exist in C and Java. Its basically a stringle of length 1.

// Boolean Values: named for George Boole.  Has two values: true and false. 
// let nameFieldValid = true;  // the person input a valid name 
// let ageFieldValid = false;  // the person did not input a valid age

// console.log(3 < 1);

//null: null contains only 1 value: "null". "nothing", or "empty", "value unknown"

// let age = null;

//  undefined: which means a value has not been assigned.

// let fish;
// console.log(fish);

// Objects and symbols. Objects can hold complex data structures.   Symbols are used to identify objects.


//Practice with strings: