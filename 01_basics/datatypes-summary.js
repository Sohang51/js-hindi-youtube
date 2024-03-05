//  Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


/*
Primitive data types in JavaScript, such as numbers, strings, booleans, null, and undefined, are typically stored directly in the execution context's stack memory when they are assigned to variables. This is because primitive values have a fixed size and are immutable, so they can be efficiently managed on the stack.

Non-primitive data types, also known as reference types, include objects, arrays, functions, and other objects created using constructors. These data types are typically stored in the heap memory. When you create a variable of a non-primitive type, what's stored in the variable is a reference (or pointer) to the memory location where the actual data is stored in the heap. This reference is what's stored in the stack memory.
*/

// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3