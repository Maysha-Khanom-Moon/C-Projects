// ++++++++++++++++++++++++ Dates +++++++++++++++++++++++++

let myDate = new Date()
console.log(myDate);
console.log(typeof myDate);

console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

// no formation
// it's a array. so, month index start from 0
let myCreatedDate = new Date(2023, 1, 23) // (year, month, day, hours, minutes, seconds, milliseconds)
console.log(myCreatedDate.toDateString());

// formation
// in single digit case: month count from 1.
let newDate = new Date("2023-11-07") // YY/MM/DD
console.log(newDate.toLocaleString()); 

let newDate2 = new Date("01-07-2023") // DD/MM/YY 
console.log(newDate2.toLocaleString());


// ++++++++++++++ time stamp (mSec) +++++++++++++++

let myTimeStamp = Date.now() // exact value of now
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // we compare by this

// convert to second
console.log(Math.floor(Date.now() / 1000))


// more
let Date1 = new Date()
console.log(Date1);
console.log(Date1.getMonth()); // index of month
console.log(Date1.getMonth() + 1); // num of month
console.log(Date1.getDay()); // index start from: sunday = 0

// `${newDate.getDay()} and the time`


// ------------ Special ------------
Date1.toLocaleString('default', {
    weekday: "long",
    timeZone: '//#region '
})
// to get all properties: ctrl + ' '