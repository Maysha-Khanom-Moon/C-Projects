// for loop
/*
for(initialization, condition, update) {

}

update --> increment or decrement
*/

// without scope its process just one statement
for(let i = 1; i <= 5; i++)
    console.log(i);

// without scope if i want to process multiple statement then put ','
for(let i = 1; i <= 3; i++)
    console.log(i * 2),
    console.log(`${i * 4} \n`);

let arr = [10, 32, 43]
// with scope
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
    

// nested loop
let arr2 = new Array (3, 4, 5)
for(let i = 0; i<arr2.length; i++) {
    console.log(i+1);
    for(let k = 1; k <= 3; k++)
        console.log("hello");
    console.log('\n'); 
    // here 2 endline will count. 
    // one for console.log() and another one for '\n'
}

arr2.push(3)
console.log(arr2);


// _______________ break-continue ______________

// if i get 5 then break the loop
for(let i = 1; i<=20; i++)
    if(i === 5) {
        console.log(`detected 5 \n`);
        break // go out of the loop
    }
    else
        console.log(i);


// if i want to print 1-20 without multiply of 3 and 4
for(let i = 1; i <= 20; i++) 
    if(i % 3 && i % 4)
        console.log(i);
    else
        continue // just skip this statement but stay in the loop
console.log(); // one line break


// ________________ while, do-while ________________

/*
initialization
while(condition) {

    update
}
*/
let i = 1
while (i <= 5) {
    console.log(i);
    i++
}


/*
-------- do-while ---------
initialization
do {

} while(condition)

// firstly do the work, then check the condition

----------- execption ------------
minimum one time loop will be work if condition true or not.
*/

let k = 1
do {
    console.log(`${k} less then 0`);
    k++;
} while(k < 0)