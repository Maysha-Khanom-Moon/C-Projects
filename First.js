// ************ memory *************
/*
 2 types:
        1. Stack(Primitive)
                        ---> pass by value(copy)

        2. Heap(Non-Primitve)
                        ---> pass by referance(address)
*/

let first = 4
let sec = first
sec = 68;
console.log(first); // 4
console.log(sec); // 68

// they are primitive. so, pass the copy value. not address


let funcOne = {
    email: 'mkm123@gmail.com',
    age: 19
}

let funcTwo = funcOne
funcTwo.age = 21

console.log(funcOne.age); // 21
console.log(funcTwo.age); // 21

// they are non-primitve. so, pass the address of function. They have same address
// so, funcTwo.value change means funcOne.value will change.