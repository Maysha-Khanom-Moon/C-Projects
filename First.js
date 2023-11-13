// ____________________________ Scope ____________________________

let a = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);


// scope: '{}' 
// '{}' --> function, array
// in object '{}' works for object declaration


if (true) {
    let A = 10
    const B = 10
    var C = 30
}

// console.log(A); // block scope
// console.log(B); // block scope

console.log(C); // global scope

// var ---> global. That's why we avoid var


// ______________ let, const __________________
// let, const --> block scope

// m is a golbal variable
// so, m can be access from any where
let m = 9
my()
function my() {
    let n = 12 // n is a local variable // it's scope just my() function
    console.log(m);
    console.log(n);
}

// at code environment(node) and in inspect(console) ---> scopes are different




// ------------------ nested scope by function ------------------

// In javaScript, always execute line by line

// function works by call stack

function one() {
    const username = "mkm"

    function two() {
        const website = 'youtube'
        console.log(username)
    }

//  console.log(website); // out of the scope
    two()
}
one()

// array scope also works like function scope



// ++++++++++++++++++++++ interesting ++++++++++++++++++++++++

// expresion. function works like variable
const addOne = function(num) {
    return num + 1
}

console.log(addOne(5));