const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2)); // how many digit i want to get after point

const otherNum = 123.8966
console.log(otherNum.toPrecision(8)) // precise value(focus on how many digit)

// if precision digit less than integer part then it show as exponentially
console.log(otherNum.toPrecision(2));

const hundreds = 10000000
console.log(hundreds.toLocaleString()); // US pattern
console.log(hundreds.toLocaleString('en-IN') + '\n'); // IN pattern



// ++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++
console.log(Math) // Object [Math] {}
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.ceil(8.1)); // 9
console.log(Math.floor(6.9)); // 6
console.log(Math.min(4, 5, 3, 2, 5, 4)); // 2
console.log(Math.max(4, 5, 3, 2, 5, 4)); // 5

console.log(Math.random()); // get [0 - 1) (random value)
console.log(Math.random() * 10); // get [0 - 10) (random value)
console.log(Math.floor((Math.random() * 10) + 1)); // get [1 - 10) (random value)

// make a specific range
// Math.random() * (max - min + 1) + min
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min)); 