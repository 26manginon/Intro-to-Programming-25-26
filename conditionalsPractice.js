//  Notes and practice for conditionals

//  Conditionals:   a way to control wether or not a block of code executes based on whether prior 
//  conditions are met 

console.log(Date())
//  Example:    Great the user with good morning, good afternoon, or good evening!
//  Morning:    Before noon 
//  Afternoon:  Before 6 P.M. (18)
//  Night:  6 P.M. (18) and after 

let currentHour = +(Date().slice(16, 18));
console.log(currentHour);

if(currentHour < 12){
        console.log("Good Morning!")
} else if (currentHour < 18) {
     console.log("Good Afternoon!")
} else {
    console.log("Good Evening!")
}

//  Logical operators:  Symbols that allow you to combine multiple conditions 
