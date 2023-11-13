// ___________________ Functions ___________________

function sayName() {
    console.log("moon");
}

// sayName: reference
// (): execute
sayName // just reference. no execution
sayName() // reference and do execution


function addTwo(num1, num2) {
    return num1 + num2
    let ans = num1 + num2 // not able to execute
}

console.log(addTwo()) // NaN // no argument
console.log(addTwo(2, 3));

// danger
console.log(addTwo(2, "a")); // 2a // for lake of argument specification


// in conditional: undefined & null = false



function temp(num) {
    return num;
}
console.log(temp(44, 33, 49));

// rest operator '...'
function calculatePrice(...num) {
    return num
}

console.log(calculatePrice(44, 33, 49)); // pass as an array


//-------
function temp1(val1, val2, ...num) {
    return num;
}

console.log(temp1(11, 42, 13, 43));


// function --> '...' (rest) 
// object/array --> '...' (spread)



// --------------- Object pass -----------------
const user = {
    email: "mkm@gmail.com",
    price: 234
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.email} and price is ${anyobject.price}`);
}

// 1. by making object
handleObject(user)

// 2. without making object before
handleObject({
    email:"moon@google.com",
    price: 234,
    color: "blue"
})


// --------- array pass -------------
const value = [34, 34, 3, 5, 4]

function returnArray(getArray) {
    return getArray[3]
}

console.log(returnArray(value));