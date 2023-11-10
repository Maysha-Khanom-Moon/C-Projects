const tinderUser1 = new Object() // by constructor || singleton || single instance

const user = {} // by object literals || non-singleton

console.log(tinderUser1);
console.log(user); // both same // {}

// .log priority for object keys: number --> string --> symbol |then| serial wise

user.id = "21t"
user.name = "mkm"

console.log(user.id);
console.log(user["name"] + '\n')


// nesting 
const student = {
    email: "mkm@gmail.com",
    fullname: {
        studentFullName: {
            fisrtName: "Mk",
            lastName: "Moon"
        },
        
        father: "KHKM"
    }
}

console.log(student.fullname.studentFullName)
console.table(student["fullname"])
console.log(student["fullname"]);


// optional chaining: '?'
// if i call an object property that doesn't exist, which triggers an error (because of undefined or missing value in api or database)
// for this, just insert '?' between the property name and the period between the next property

console.log(student.fullname?.studentFullName) // exist // in general case
console.log(student.id?.fullname) // not exist // undefined


// object merge works like an array
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "aa", 4: "bb"}

const obj3 = {obj1, obj2} // in obj3 object --> obj1 and obj2 are including as a object
console.log(obj3);


// ----------- Object.assign() -------------

const obj5 = Object.assign(obj1, obj2) // elements of obj2 are assigned(not store) into obj1 And then obj1 store into obj5
// obj1 --> target, obj2 --> source
console.log(obj5) 

const obj4 = Object.assign({}, obj1, obj2) // all element of obj1 and obj2 are assigned into --> {} And then {} store into obj4
// {} --> target. But it's optional, but it's standard
console.log(obj4);


// _________________ spread '...' ________________
const obj = {...obj1, ...obj2} // spreads all element. then insert all of these values at obj
console.log(obj);



// ______________________ Objects in Database _______________________

// info came as array of objects
const arr = [
    user,
    student,
    obj,
    obj1,
    obj2,
    obj3,
    obj4,
    obj5
]

console.log(arr[1].email);

const userAgain = {
    name: "moon",
    id: 11,
    color: "blue",
    class: 13
}

// _______________________ Object.keys() _________________________
// we can make an array of keys
const userArr = Object.keys(userAgain)
console.log(userArr);
console.log(userArr[2]); // return the key, not the value of key


// _______________________ Object.values() ______________________
// we can make an array of values
console.log(Object.values(userAgain));


// _____________________ Object.entries() _______________________
// firstly --> make small array for keys including value
// then make a big array by these small arrays
console.log(Object.entries(userAgain))



// _______________ .hasOwnProperty('property name') _______________
// check the property exist or not
console.log(userAgain.hasOwnProperty('account')); // false
console.log(userAgain.hasOwnProperty('id')); // ture