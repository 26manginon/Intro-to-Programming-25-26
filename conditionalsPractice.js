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

// console.log(10 && 5 && 0 && 1);
// console.log(10 && 5 && 1);
// console.log(10 && 5 && 15);

//  && has higher "precedence" than || (pemdas)
// console.log(true && false || true && false);     

//  ! - NOT -   First it converts the value to a Boolean, then it flips the truthiness of the value.
// console.log(!true);
// console.log(0);
// console.log(!0);

//  Becuase of this converison element, you can use "!!" to convert something to a boolean value 
// console.log(!!0);   //returns false 


//  NOT has the highest precedence of all the logical operators 

//  ? is a "conditional operator". (ternary)
//  Example:    Traditional approach - let a person sign up for a social media site if they're over 
//  the age of 13 

//  TRADITIONAL METHOD
// let registrationAllowed;
// let age = prompt("How old are you in years?","");

// if (age > 13){
//     registrationAllowed = true;
// } else {
//     registrationAllowed = false;
// }

// console.log(registrationAllowed);

//  USING CONDITIONAL OPERATOR (?)
// let age = prompt("How old are you (in years)?","");
// let registrationAllowed = (age > 13) ? true : false;
// console.log(registrationAllowed);

//  You can use multiple ?s. Example:
// let age = prompt("age?", "");

// let message = (age < 3) ? "You're just a baby!" :
//     (age < 10) ? "Hi there" :
//     (age < 60) ? "Hello" :
//     (age < 100) ? "Howdy, Grandpa" :
//     "Dang. you're OLD."; 

// console.log(message);

//  SWITCHES - a swtich is a different way to do an if/else if/else if... chain 
//  switches test for "Strict Equality"/ "===" is hwo you test for strict equality 
//  Strict equality is when the values are the same AND the datatypes match.

// console.log(3 == "3");          //This evaluates as true
// console.log(3 === "3");         //This evaluates as false

//  Example Switch:
// let a = 2 + 2

// switch (a) {
//     case 3:
//         alert("Too Small");
//         break;
//     case 4: 
//         alert("Exactly right!");
//         break;
//     case 5:
//         alert("Too Big");
//         break;
//     default: 
//         alert("What are you even doing?");
// }


// FOR THE FIRST 5 QUESTIONS, TRY TO ANSWER BEFORE TESTING THE OUTPUT
// 1.  what will this do: alert( null || 2 || undefined );
// 2.  what will this do: alert( alert(1) || 2 || alert(3) );
// 3.  what will this do: alert( 1 && null && 2 );
// 4.  what will this do: alert( null || 2 && 3 || 4 );
// 5.  what will this do:  console.log(console.log(1) && console.log(2));

// 6.  Write an if condition to check that age is between 14 and 90 inclusively.  (“Inclusively” means that age can reach the edges 14 or 90.)
// 7.  Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.
// 8.  Which of these alerts are going to execute?  What will the results of the expressions be inside if(...)?:
//      -  if (-1 || 0) alert( 'first' ); 
//      -  if (-1 && 0) alert( 'second' ); 
//      -  if (null || -1 && 1) alert( 'third' );

//  1.  It will yeild 2, since it is testing for any value that is true, and null and underfinded
//      are false 
//  2.  It will alert 1 first becuase it's the first truthy value, then it will move onto alert 2
//      since it's the next truthy value
//  3.  Null since it's using && all the values are not true 
//  4.  3 since its the defaulted to the last value since not falsy values were found
//  5.  It will console log the number 1 and then undefined because 

//  6.  
if (age >= 14 && age <= 90){
    console.log("You're of age");
} else {
    console.log("Not required age");
}

//  7a.
if (!(age >= 14 && age <= 90)){
    console.log("Not requred age");
}

//  7b. 
if (age < 14 || age > 90) {
    console.log("Not required age");
}
   
// //  6.  7.
let age = prompt("Enter Age Here")
if (age > 13 && age < 91){
    console.log("Access Granted");
} else {
    console.log("Not of Age");
}

//  8.  
//      The first and the third will execute 
//  Result of #1
//      Returns the first truthy value which was -1
//  Result of #3
//      Returns the first truthy value which was 1 