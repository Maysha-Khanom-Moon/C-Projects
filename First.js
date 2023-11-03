/*
respect to store in memory and way to access --> there are 2 data types
    1. primitive
    2. non-primitive


  # primitive:
              --> they call by value
    
   => 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


  # Reference (non primitve):
                             --> they call by address
    => Array, Objects, Functions

  
** to make something unique -- we wrap that by Symbol

*/

/*
=> JavaScript dynamic language. 
    -- hints: no need to declare the data type of variable

 -- variable declaration and data type declaration not same.
    like: name = "moon" // variable not declared
          let name = "moon" // data type not declared

=> In "use strict" --> always we need to declare variable.

*/  


const score = 100 // number
const scoreValue = 101.2 // Number

const isOkay = false // boolean
const outsider = null // empty

// *** for const --> always have to assigned value. otherwise it's a error ***


let userEmail // undefined
// or
let user = undefined


// ***** const do = undefined (error) *****



// ********* Symbol *********
// make something unique

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); // false
// because, they are unique



// ********* BitInt **********
const bigNumber = 2345678765432345678765234565432345n
console.log(bigNumber); 

// this last 'n' means BigInt.





// ************* Array **************
const heros = ['Captain America', 'Iron man', 'Hulk', 'Loki']


// ************* Object *************
let myObj = {
    name: "Moon",
    age: 21,
    dept: 'CSE'
}


// ************ Function ************
const myFunc = function(){
    console.log("Hello world");
}


// ** data type detector: typeof
console.log(typeof bigNumber); // bigint
console.log(typeof null); // object
console.log(typeof myFunc); // function (function object)
console.log(typeof heros); // object