// 'this' keyword
// talking about current context

// ________________ 'this' at object ________________

const user = {
    username: "moon",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); // 'this' --> reffer current context
        
        // ---------- important --------------
        console.log(this) // it show the current contexts
    }

}

user.welcomeMessage() // default

user.username = "mkm"
user.welcomeMessage() // after change the context(value)

// ---------------- important -----------------
console.log(this);

// At stand alone compiler(like: node) return '{}' --> 'empty object'
// At inspect(console) return --> 'window' and all prototypes of this
// At browser ---> globar object is 'window'




// ++++++++++++++++++++ 'this' --> at function ++++++++++++++++

function chai() {
    let user = 'moon'
    console.log(this.user); // undefined
    // so, 'this' doesn't work properly at function

    console.log(this); // all of internal info and prototype
}

chai()

// ******** 'this' does works properly at object ********


// _______________________ Normal function --> 'this' ________________________
const water = function () {
    let user = "mkm"
    console.log(this.user); // undefined
    console.log(this); // show all info and properties
}

water()

// ______________________ Arrow function --> 'this' _______________________
const ice = () => {
    let user = "maysha"
    console.log(this.user); // undefined
    console.log(this); // show all info and properties
}

// ****** 'this' --> works as same as both of normal and arrow function ******



// ------------------ All about arrow function ---------------

// func_name = () => {}

// 1. explicit return (need to use 'return' key)
const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(3, 4));

// 2. implicit return (no need to use 'return' key)
// works --> if there is one return statement
const product = (num1, num2) => (num1 * num2) // num1 * num2 // '()' use more preferred

console.log(product(4, 5));

// at implicit arrow function ---> no need 'return' key, if we use '()' or 'nothing
//                            ---> need 'return' key, if we use '{}'


// **************** exception for object *****************
// for object return must have to use implicit return with '{}'. And also must wrap into '()'
const name = () => ({user: "moon"})
console.log(name());



// ************************************************************************************************//

// Immediately Invoked Function Expressions (IIFE)

// 1. normal func

(function chai() {
    console.log(`DB CONNECTED`);
}) (); 
// here most important thing is ';' ---> it means the END of this IIFEs.
// if we don't put ';' --> it can't do anything which are present after this IIFEs.

// with 'chai' name, there is another function. But since this 'chai' function has own spode. Which hide from global scope

/*
one of the good ways to hide data from the global scope as it creates its own scope. 
to avoid unnecessary conflicts like duplicate variables and functions in the global scope.

// prevent pollution of the global JS scope
*/

// 2. arrow function
(() => {
    console.log("DB CONNECTED TWO");
}) ();

// 3. arrow another
(chai = () => {
    console.log("DB CONNECTED THREE");
}) ();

// 4. with parameter
((age) => {
    console.log("age: ", age);
}) (21)

// after this, it not capable to execute any more context.
// because, we forgot to put ';' after '()'