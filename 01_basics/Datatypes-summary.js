// PRIMITIVE DATA TYPES (Stored by Value)
// These are immutable and stored directly in the memory

// 1. String
let name = "Vedant";
console.log(typeof name); // string

// 2. Number
let age = 21;
console.log(typeof age); // number

// 3. Boolean
let isStudent = true;
console.log(typeof isStudent); // boolean

// 4. Null
let emptyValue = null;
console.log(typeof emptyValue); // object (this is a known JavaScript quirk)

// 5. Undefined
let notAssigned;
console.log(typeof notAssigned); // undefined

// 6. Symbol (unique values)
let id = Symbol("123");
let anotherId = Symbol("123");
console.log(id === anotherId); // false (each Symbol is unique)
console.log(typeof id); // symbol

// 7. BigInt (for large integers)
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // bigint


// NON-PRIMITIVE / REFERENCE DATA TYPES
// These are stored as references (not actual value)

// 1. Object
let person = {
    firstName: "Vedant",
    age: 22
};
console.log(typeof person); // object

// 2. Array (technically an object)
let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // object

// 3. Function
function greet() {
    console.log("Hello!");
}
console.log(typeof greet); // function

// 4. Date (built-in object)
let today = new Date();
console.log(typeof today); // object
