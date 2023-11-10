// de-structuring

const course = {
    name: "Dev",
    language: 'javaScript',
    target: 'website',
    teacher: 'hitesh'
}

// 1.
console.log(course.teacher); // in general

// 2.
const {teacher} = course // de-structure of calls property
console.log(teacher)

// 3.
const {teacher: sir} = course // de-structure with new name
console.log(sir)


// _______________ JSON ________________
// just like object without its name
// also, its keys and values both are will be string

/*
// 1. object formate
{
    "name": "moon",
    "age": "21",
    color: "yellow"
}

// 2. array of objects format
[
    {...},
    {...},
    {...}
]

*/