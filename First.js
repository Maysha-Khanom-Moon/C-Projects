// *********** Operations ***********

let value = 3;
let negValue = -value;

console.log(negValue);

// power
console.log(2**3);

// ramainder
console.log(5%3 + "\n")


// string addition
let str1 = "hello"
let str2 = " moon"
console.log(str1 + str2 + "\n");


// string and number addition
console.log(1 + "2");
console.log("1" + 2)
console.log("1" + 2 + 3 + "\n"); 
// string come first, so everyone behave like a string

console.log(1 + 2 + "3");
// firstly console thought everyone is number. So, he able to add those
// and different data type add side by side.

// console works left to right

// (*, /, %) --> more priority than (-, +)


// avoid these types conversion
console.log(+true); // +1 => 1
console.log(-true); // -1

console.log(+""); // +0 => 0
console.log(-""); // -0

console.log(+false); // +0 => 0
console.log(-false); // -0

// (-) act as a string
// (+) act as a number