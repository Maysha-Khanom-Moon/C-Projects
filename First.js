const name = "moon"
const repoCount = 15

console.log(name + repoCount + " value");
console.log('\n', "good ", 'girl', '\n')

// concatenation by -->  '+' or ','



// ************ Modern Way (string interpolation) ************

// backtick => '``' 
// `____ ${variable injection} ___`

console.log(`hello! I am ${name}`);

// -----------------------------------------------------------


// string declaretion using object
const gameName = new String("ninja Arashi")

console.log(gameName[0]); // .charAt(0)
console.log(gameName.charAt(0));

console.log(gameName.__proto__); // all prototype included

console.log(gameName.length);

console.log(gameName.toUpperCase()); 

console.log(gameName.indexOf('a')); // if not present --> return: -1


const subGame = gameName.substring(0, 4); // substring
// in substring (-)index defined as 0

console.log(subGame) // ninj
console.log(gameName.substring(-2, 4)); // ninj


// **************** slice *****************

// it also can work by negative index
// negative index works from reverse array

console.log(gameName.slice(0, 4)); // as like substring
console.log(gameName.slice(-10, 4)); // nj

/*
The array index at which the slice is to begin. If negative, 
this argument specifies a position measured from the end of the array. 

That is, −1 indicates the last element, 
         −2 indicates the next from the last element, and so on
*/ 


// ******************* trim ********************

// trim(): stripped of whitespaces from both its beginning and end

const uni = "   RUET   "
console.log(uni.trim());

// To return a new string with whitespace trimmed from just one end, 
// use trimStart() or trimEnd().

console.log(uni.trimEnd())
console.log(uni.trimEnd) // [Function: trimEnd]




// ******************* replace ********************

const url = "https://moon.com/moon%20khan"
console.log(url.replace('moon', 'mkm')); // first 'moon' will replaced by 'mkm'




// ************* includes **************

console.log(url.includes("mkm")); // false
// check present or not



// **************** split *****************

const Name = "Maysha-Khanom-Moon"
console.log(Name.split('-'));
console.log(Name.split('-')[1]);


// all works by copy

// to know all prototype => goto inspect -> console 