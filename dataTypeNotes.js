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


//  Practice with strings:
//  Quick vocabulary distinction to make:   functions vs. methods.
//  Functions are "generic".
//  a method is a function that is bound to a specific data type
//  functions are usually called by stating the name of the function and what you want it applied to. 
//  ex. average(dataSet)
//  whereas a method usually follows what it is being applied to 
//  ex. text.at(2)


//  here are several string methods:

//  length (technically a property not strictly a method)

// let text = "fnaeinfenfwienfiwoenf";
// console.log(text.length);

//  ways to extract characters from a string:
//  chatAt():   returns the character at the indicated slot in the string

// text = "Stevie T";
// console.log(text.charAt(3));

//  charCodeAt():   returns the UTF-16 code of the character at the specified index
// console.log(text.charCodeAt(3));

//  .at() is a more useful and preferable option to charAt();

// console.log(text.at(-3))

//  .concat():  stands for concatination, allows you to concatinate 2 or more strings
// let text1 = "Hello";
// let text2 = "Stevie";

// text3 = text1.concat(" ", text2);     //whatever goes in the ("") will go inbetween the strings 
// console.log(text3);

// text4 = text1 + " " + text2;
// console.log(text4)

//  if your want to extact a "substring" you can use three methods:
//  .slice(): returns a string that starts from the given index and ends before the second index 
// console.log(text.slice(3,8))      //goes up to but does not include the final number

// if you 