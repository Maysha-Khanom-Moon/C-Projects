/*
    ----------- Maps (data structure) --------------
=> all basics at commit: 'for-of || for-in || forEach --> arr, obj, func'
*/

/* 
______________ filter ______________

variable = name.filter( funtion (item) condition(for return values))

==> filter: just like forEach but it return something
            also it just return, not any statement carry

*/
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 1. implicit return. no need to use 'return' key
// ---------- no scope '{}' ----------
// => return item which follows the condition
let newNum = num.filter( (n) => n < 4 )
console.log(newNum);

// 2. explicit return. need to use 'return' key
// ---------- with scope '{}' -----------
newNum = num.filter( function(n) {
    return n > 5
} )
console.log(newNum);


// ------------------ alternative way for filter by using forEach ---------------

newNum = []

num.forEach( (n) => {
    if (n > 4) 
        newNum.push(n)

} )
console.log(newNum);



// ----------------- filter in database ------------------
const books = [
    {
        title: 'book1', genre: 'fiction', publish: 1981, edition: 2004
    },
    {
        title: 'book2', genre: 'non-fiction', publish: 1992, edition: 2008
    },
    {
        title: 'book3', genre: 'history', publish: 1999, edition: 2007
    },
    {
        title: 'book4', genre: 'non-fiction', pulbish: 1989, edition: 2010
    },
    {
        title: 'book5', genre: 'science', publish: 2009, edition: 2014
    },
    {
        title: 'book6', genre: 'fiction', publish: 1987, editon: 2010
    },
    {
        title: 'book7', genre: 'history', publish: 1986, edition: 1996
    },
    {
        title: 'book8', genre: 'science', publish: 2011, editon: 2016
    },
    {
        title: 'book9', genre: 'non-fiction', publish: 1981, editon: 1989
    }
]

// 1. without scope: no 'return' key
let userBooks = books.filter( (bk) => bk.genre == 'history' )

console.log(userBooks);

// 2. with scope: 'return' key use
userBooks = books.filter( (bk) => { return bk.publish >= 2000 } )
console.log(userBooks);

// 3. with multiple condition
userBooks = books.filter( (bk) => bk.genre == 'history' && bk.publish >= 1995)
console.log(userBooks);


/*
_______________________ .map method ___________________________

=> it also a call back function
variable = name.map( (parameter) => processed parameter return)

=> .map --> just like filter with customized return value of parameter
*/
let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// add 10 --> each of element
// 1. implicit return --> no scope --> no need to use 'return' key
let newMyNum = myNum.map( (num) => num + 10)
console.log(newMyNum);

// 2. explicit return --> with scope --> need to use 'return' key
newMyNum = newMyNum.map( (num) => { return num - 5 } )
console.log(newMyNum);

// 3. multiple map (chaining)
newMyNum = myNum.map( (num) => num * 10 ).map( (num) => num - 1).filter( (num) => num >= 40)
console.log(newMyNum);



/*
 _______________________________ Reduce ________________________________

 // 1. arrow function
 const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
=> currentValue --> element(value) of array

 // 2. normal function
 const sumWithInitial = array1.reduce(
  (accumulator, currentValue) {
    return accumulator + currentValue
  } , 
  initialValue);
*/

myNum = [1, 2, 3]

// 1. normal function
let myTotal = myNum.reduce(function (acc, curVal) {
    console.log(`acc: ${acc} and curVal: ${curVal}`);
    return acc + curVal
}, 0 )
console.log(myTotal);

// 2. arrow function
myTotal = myNum.reduce( (acc, curVal) => acc + curVal, 0)
console.log(myTotal);



/************************************************/
/* ------------ JS part-1 Complete ------------ */
/************************************************/