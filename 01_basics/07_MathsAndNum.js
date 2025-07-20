// JavaScript Number Methods and Math Functions

let num = 1234.56789;

// .toString()
// Converts number to a string
console.log(num.toString());  // "1234.56789"

// .toFixed(digits)
// Rounds to specified decimal places, returns string
console.log(num.toFixed(2));  // "1234.57"

// .toPrecision(digits)
// Formats number to specified total significant digits
console.log(num.toPrecision(6));  // "1234.57"
console.log(num.toPrecision(3));  // "1.23e+3"

// .toLocaleString()
// Converts number to string with local formatting (e.g., commas)
console.log(num.toLocaleString()); // "1,234.568" (in en-US)

// Math.abs(x)
// Returns the absolute (positive) value
console.log(Math.abs(-42));  // 42

// Math.round(x)
// Rounds to nearest integer
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4

// Math.ceil(x)
// Rounds up to the next integer
console.log(Math.ceil(4.1)); // 5

// Math.floor(x)
// Rounds down to the previous integer
console.log(Math.floor(4.9)); // 4

// Math.min(a, b, c...)
// Returns the smallest value
console.log(Math.min(3, 6, 1, 8)); // 1

// Math.max(a, b, c...)
// Returns the largest value
console.log(Math.max(3, 6, 1, 8)); // 8

// Math.random()
// Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // Example: 0.5378...

// A simple formula 
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (amx - min + 1)) +min );

// Summary:
// .toString() → Convert number to string
// .toFixed(n) → Round to n decimal places (string)
// .toPrecision(n) → Format with n total digits
// .toLocaleString() → Format with local number style
// Math.abs(x) → Absolute value
// Math.round(x) → Round to nearest int
// Math.ceil(x) → Round up
// Math.floor(x) → Round down
// Math.min(...) → Smallest number
// Math.max(...) → Largest number
// Math.random() → Random number [0, 1)
