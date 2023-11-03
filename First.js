// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);


// comparison with different data types

console.log("2" > 1);
console.log("mn" > "mon")


// null
console.log(null > 0); // flase
console.log(null == 0); // false
console.log(null >= 0); // true

// In javascript: comparison and equality check is different. So, they works differently
// sometimes null => NaN or null => 0
// so, null == 0 return false. But, null >= 0 return true


/*
for "use strict" : equality checker => '==='

actually its not only check the value, also check the datatype
In this case, don't happen conversion automatically. 

But, for '==': conversion happen automatically
like: ("1" == 1) // true
*/ 


// undefined
console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
// for undefined, every comparison return false. Because there is no value assigned



// Remember: skip these types comparison. (null and undefined)
// because, it creates confusion