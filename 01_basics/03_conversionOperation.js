let score = "33" // You can write any data type here. 

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
"33" = 33
"33abc" = NaN (Not in number)
true = 1 / false = 0
*/

//Coversion number to Boolean.

let isLoggedIn = 1
let boooleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
//1 = true/0 = false
//"emptystring" = false
//"vedant" = true

//Number to string conversion

let someNumber = 33
let stringNumber = string(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// Let's discuss more about the operations now.
//basics of operations
/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%2);
*/
// Prefix and Postfix operators in JS
//Prefix
let x = 3;
const y1 = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n

//Postfix
let x1 = 3;
const y = ++x;
// x is 4; y is 4

let x22 = 3n;
const y22 = ++x2;
// x2 is 4n; y2 is 4n


