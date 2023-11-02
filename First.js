let score = 33

// data type check: typeof / typeof()
console.log(typeof score);

let roll = "2103068"
// or
console.log(typeof(roll) + "\n");


// 
let num_roll = Number(roll)
console.log(typeof num_roll);
console.log(num_roll + "\n")


// if we try to make number of a non-numaric value
let code = "123M"

let num_code = Number(code)
console.log(typeof num_code);

console.log(num_code + "\n"); // NaN: Not a Number



// null
let temp = null
console.log(typeof null);
console.log(typeof temp);

let num_temp = Number(temp)
console.log(typeof num_temp);
console.log(num_temp + "\n"); 

// as a number: null => 0



// undefined
let go = undefined
console.log(typeof go)
console.log(go)

let num_go = Number(go);
console.log(typeof num_go)
console.log(num_go + "\n"); // NaN



// boolean
let check = true;
console.log(typeof check)
console.log(check)

let num_check = Number(check)
console.log(typeof num_check);
console.log(num_check + "\n")

// as a number: ture => 1, false => 0




// number to boolean
let Okay = 0;

let isOkay = Boolean(Okay)
console.log(typeof isOkay);
console.log(isOkay + "\n")

// without zero, every number reponse true



// string to boolean
let Ch = ""

let isCh = Boolean(Ch)
console.log(isCh + "\n");

// without "" (empty string), others response true



// string to number
let num = -333

let str_num = String(num)
console.log(num);