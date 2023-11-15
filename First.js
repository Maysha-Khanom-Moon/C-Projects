// iterate --> array, object, string

/*
************* for-of *************
for-of ---> used by iterates

=> just return value. not iterates(index)

for (const/let value of obj/arr) {
    statements
}
*/

const arr = [11, 22, 33, 44]

for (const i of arr) {
    console.log(i);
}

const greetings = "hello world" // string
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}
console.log()

/*
 ------------ Maps -------------
(key, value)
just set unique key values
it check by keys not compare values
it's not sorted. First in means first print/process
*/

const map = new Map()
map.set('BNG', "Bangladesh")
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('Fr', "France")

for (const key of map) {
    console.log(key); // print individually as a pair
}

map.set('IN', "Bharat") // new value alocate at existing key 'IN'
// duplicate keys not allowed.

// but duplicate value can be allocat
map.set('Tiger', "Bangladesh")

for (const [key, value] of map) {
    console.log(key, ' :- ', value) // we can access key and value individually
}



// ______________ object in for-of ______________
const myObj = {
    calss1: 'cse',
    class2: 'eee',
    class3: 'me',
    class4: 'civil'
}

// for (const key of myObj) {
//     console.log(key); // myObj is not iterable
// }
// ========> object interation not works on 'for-of' loop 


/* 
____________ for object: for-in loop ___________

=> basically it works by (0, 1, 2, 3, 4, ...) iteration(indexing)

although it works for array and string

but it just give iterate or key not value

for-in loop ---> does not works at map
because at map --> there is no (0, 1, 2, 3, ...) type iteration


for(const/let index in obj/arr) {
    statements
}
*/

for (const i in myObj) {
    console.log(`${i} : ${myObj[i]}`);
}

for(let i in map) {
    console.log(i);
}


/*
 +++++++++++++++++++++++ forEach +++++++++++++++++++++++

if used by call back function. which function has no name. just work by value as parameter

=> usually this function has one parameter. which call the values
   but we can user multiple parameter.
  ---> item(value), index(0, 1, 2, ...), array(whole array)

==> ["", "", "", ...]
==> [{}, {}, {}, ...]

*/
const arr2 = [11, 22, 33, 44]

// 1. normal function
arr2.forEach(function (val) {
    console.log(val);
} )

// 2. arrow function
arr2.forEach((val) => {
    console.log(val);
} )
console.log()

// 3. outer function
function print(item) {
    console.log(item);
}
console.log();


// ----------- 3 parameter (item, index, array) -------------
arr2.forEach( (item, index, array) => {
    console.log(item, index, array);
} )


// ----------- 2 parameter (item, index) ------------
arr2.forEach( (value, i) => {
    console.log(value, i);
} )


// ___________ onject in array ___________
const myCode = [
    {
        language: "javaScript",
        file: "js"
    },
    {
        language: "java",
        file: "java"
    },
    {
        language: "python",
        file: "py"
    },
    {
    
    }
]

// just item
myCode.forEach( (item) => {
    console.log(item);
    console.log(item.file);
} )

// item, index, object
myCode.forEach( (item, i, obj) => {
    console.log(item, i, obj);
} )

// store at variable
// forEach never return anything
const values = myCode.forEach( (item) => {
    console.log(item);
} )
console.log();
console.log(values); // undefined