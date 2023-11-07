// Array

/* 
- in javascript: array dynamic 
- index = 0 based
- not associative
- different type element can use in a single array

- copy operation: make shallow copies(by reference)

==> deep copy: by value
*/

// 1.
const myArr = [0, 1, 2, 3, 4, 5, 6, true, "moon"]
console.log(myArr);
console.log(myArr[7])

// 2.
const myHeros = new Array(0, 1, 2, 3, 4, 4)
console.log(myHeros);

// push(value)
myHeros.push(5); // insert after last index
console.log(myHeros)

// pop()
myHeros.pop(); // delete last element
console.log(myHeros);

// ushift(value)
myHeros.unshift(68); // insert before first index
console.log(myHeros);

// shift()
myHeros.shift(); // delete first element
console.log(myHeros);

// includes(value)
console.log(myHeros.includes(1)); // present(true) or not(false)

// indexOf(value)
console.log(myHeros.indexOf(3)); // if not present: index = -1

// join()
const newArr = myHeros.join()
console.log(myHeros);
console.log(newArr); // Binding + convert to string
console.log(typeof newArr);

// slice(first, last)
console.log("A ", myHeros);

const myn1 = myHeros.slice(1, 3) // last index not included
console.log(myn1);
console.log("B ", myHeros); // don't remove that portion

// splice(first, last)

const myn2 = myHeros.splice(1, 3); // last index included
console.log(myn2)
console.log("C ", myHeros) // remove that portion