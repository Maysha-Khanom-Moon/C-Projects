// 1. by constructor - Object.create() ---> singleton

//  _____________________ 2. object literals _____________________

/*
access: 
      1. obj.key  --> key as a variable
      2. obj[key]  --> key as a data(index)
    => remain the datatype of key for no. 2 method
*/ 

const js_user = {
    name: "Maysha", // name is a string key
    age: 18, // key is a string
    email: "mkm@gmail.com",
    is_logged_in: false,
    last_login_day: ["monday", 'saturday'],
    "full_name": "Maysha Khanom Moon" // must follow access method 2
}

// we can define key in object. Although, in array key(index) = 0, 1, 2, ...
// for both object and array: we define value


console.log(js_user.age); // method 1
console.log(js_user["age"]); // method 2
console.log(js_user["full_name"]);

// ----- Symbol ------

const nam = Symbol("mkm") // or we can insert value also
const obj = {
    [nam]: "nam: moon",  // to use symbol, must have to define before.
    // key is a Symbol // method 2 only
    
    nam: "moon", // key is a string // both method

    age: 20,

    1: 3 // // key is a number // method 2 only
}

console.log(obj.nam); // "moon"
console.log(obj[nam]); // "nam: moon"
console.log(obj["nam"]); // "moon"
console.log(obj[1]); // 3


// change the key values
obj.age = 21

// make is freeze
Object.freeze(obj)
// new any change will not assigned

obj.age = 44 // no change. because its already freeze
console.log(obj)
console.table(obj)

js_user.greeting = function() {
    console.log(`Hello Js User, ${this.name}`); // to call own obj, use this
}

console.log(js_user.greeting()); // return values
console.log(js_user.greeting) // return reference

// we have 2 method. so mostly use dot '.' method
