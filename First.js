const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]


marvel.push(dc); // dc store at marvel
console.log(marvel); // dc(array) become an element
// it should avoid

console.log(marvel[3]);

marvel.pop()
console.log(marvel);

// --------- concat(value) ----------
// add at the last but not assing 
console.log(marvel.concat(dc)) // just element concat
console.log(marvel); // not assign
// so, need new array to concat 2 array's elements

const allHeros = marvel.concat(dc); // return array
console.log(allHeros)


// --------- spread: '...' ------------
const allAgain = [...marvel, ...dc] 
// spread all element, then add all of these and make a new array.
console.log(allAgain);


// ** spread is more preferable. Because at a time we can add the elements of more than two arrays. **


// __________ Doing Fun: flat(depth) _____________

const arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]; // depth: 3
console.log(arr);

const useable_new_array = arr.flat(Infinity)
// spread out and add all of these elements and make a single array.
console.log(useable_new_array);



// ___________ Data scratching ____________

console.log(Array.isArray("Maysha")) // array(true) or not(false)
console.log(Array.from("Maysha")) // convert into array


// ______ Interesting ______
console.log(Array.from({name: "moon"})); // []
// make sure: which part(keys or value) do you want to convert into array


// multiple variables into array

let n1 = 3, n2 = 5, n3 = 6;
console.log(Array.of(n1, n2, n3))

