const myarr = [0, 1, 2, 3, 4, ] //As integer 
const heroes = [Thor, Hulk, Deadpool, Spiderman, Woolverine, ] //As string
const myarr2 = new Array(1, 2, 3, 4,)//We can define values here also
console.log(myarr[1]);

//Methods of array
//To add a new value in the arrya index
myarr.push(6)
myarr.push(7)
console.log(myarr);

//To remove the last element/number in the array list
myarr.pop()

//To add a new number in the array index in the first value
//Example
let numbers = [3, 4, 5];

// Add 1 and 2 at the beginning of the array
numbers.unshift(1, 2);

console.log(numbers); // Output: [1, 2, 3, 4, 5]

//To check the number in the array list and its give output as false/true.
console.log(myarr.includes(9));
console.log(myarr);
//To check the index location 
console.log(myarr.index(2));
console.log(myarr);

//Slice,Splice Method in array
//Slice
let fruits = ["apple", "banana", "mango", "orange", "grape"];

let slicedFruits = fruits.slice(1, 4); // from index 1 to 3

console.log(slicedFruits); // Output: ["banana", "mango", "orange"]
console.log(fruits);       // Original array unchanged

//Splice
let colors = ["red", "green", "blue", "yellow"];

// Remove 2 items from index 1 and insert "black" and "white"
colors.splice(1, 2, "black", "white");

console.log(colors); // Output: ["red", "black", "white", "yellow"]
    


