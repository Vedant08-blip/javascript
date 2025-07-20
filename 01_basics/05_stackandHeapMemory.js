// Stack and Heap Memory in JavaScript

// STACK MEMORY
// Used for primitive data types: Number, String, Boolean, null, undefined, Symbol, BigInt
// Stored directly and copied by value (independent copies)

let a = 10;
let b = a;
b = 20;

console.log("a:", a); // 10
console.log("b:", b); // 20

// 'a' and 'b' are separate values in stack memory

// HEAP MEMORY
// Used for non-primitive types: Objects, Arrays, Functions
// Stored by reference (multiple variables can point to the same memory)

let person1 = { name: "Vedant" };
let person2 = person1;
person2.name = "Bhakti";

console.log("person1.name:", person1.name); // Bhakti
console.log("person2.name:", person2.name); // Bhakti

// person1 and person2 refer to the same object in heap memory

// Summary:
// Stack = Primitive types (copied by value)
// Heap  = Non-primitive types (copied by reference)
