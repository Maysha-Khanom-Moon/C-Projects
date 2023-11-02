/**
 * for "use strict"
 * 
 * n = 3; // it's wrong
 * using a variable, without declaring it, is not allowed.
 */

"use strict"; // treat all JS code as newer version

// alert(3 + 3) // we are using nodejs, not browser

// code should be readable
console.log(3 + 3)


let name = "Moon"  // string
let age = 18  // number
let isOkay = false  // boolean


// how i can define the data type of variable
console.log(typeof name);
console.log(typeof null);
console.log(typeof undefined);


/*
null is a object. which represents primitive data types
null value reffering absence of any object value and 

but undefined is a data type
*/


// A primitve data type specifics the size and type of variable values, and it has no additional methods.

/*
primitive data types:

 number => 2 to power 53 (max)
 bigInt => for very big number
 string => ""
 boolean => true/false
 null => standalone value
 undefined => no value define
   -> null is not undefine. It's represent a empty value
 symbol => unique
*/

/*
non-primitive data types:

 Object => Array, functions, null, etc.
*/