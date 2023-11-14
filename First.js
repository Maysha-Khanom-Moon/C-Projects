// -------------------- Control flow ---------------------

// 1. if statement
// '<', '>', '<=', '>=', '==', '!=', '===', '!=='

//  '='  --> assign
// '=='  --> it's just check value. 
// '===' --> it's check value and also data type


console.log(2 == '2'); // true
console.log(2 === '2'); // false

const temp = 63

// without scope --> we just can process one statement
if (temp < 50) 
    console.log("less than 50")
    console.log("no include in if scope \n")

// if we want to process multiple statement without scope --> used ','
if (temp < 100) 
    console.log("less than 100"),
    console.log(`it's ${temp} \n`);

if(temp === 61)
    console.log(`61 equal to ${temp}`);

else 
    console.log(`61 not equal to ${temp}`);


// logical operator: '&&', '||', '!'
// '&&' --> true: every condition has to be true
// '||' --> ture: minimum one condition has to be true

if(2==2 && 2 == 5) // false
    console.log(true);
else if(2 == 2 || 2 == 5)
    console.log("half true");
else
    console.log("total wrong");

if(2==2 || 2 == 5) // true
    console.log(true)


// __________ switch(key) __________
switch(3) {
    case 1: console.log(`hello`);
            break;
    case 3: console.log(`moon`)
            break
    default:
            console.log(`smile`);
            break
}


// ------------- extra ---------------
// falsy ----> false
// truthy ---> true

// flasy: false, 0, -0, BigInt 0n, empty string(""), null, undefined, NaN
// truthy:  ture, "0", 'false', space " ", empty object '{}', empty array '[]', function(){}, and others all


/*
---- empty array check -----
if (array.length === 0) 
*/


/*
----- empty object check -----
if (Object.keys(object_name).length === 0)

// Object.keys(object_name) --> array of keys
*/



/*   ***************--- '??' ---***************
The nullish coalescing (??) operator is a logical operator 
that returns its right-hand side operand when its left-hand side operand 
is null or undefined, and otherwise returns its left-hand side operand

let val1;
val1 = 5 ?? 10 // 5 will assigned

val1 = null ?? 10 // 10 will assigned

val1 = undefined ?? 10 // 10 will assinged

val1 = undefined ?? null // null

val1 = null ?? undefined // undefined

val1 = null ?? undefined ?? 10 ?? 40 // 10 will assigned
*/
console.log(null ?? undefined);
// ________________________ remember ______________________
console.log(0 ?? 10) // at this point --> '0' is a number


/*
________ Ternary Operator: '?' ________
condition ? true : false
*/

console.log((2<4) ? "wrong" : "right");

(`moon` == 'moon') ? console.log(`yes`) : console.log('no');