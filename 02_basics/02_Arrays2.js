// 1Spread a string into an array
const heroName = "Spiderman";
const nameLetters = [...heroName];
console.log("Spread string into characters:");
console.log(nameLetters); // ['S', 'p', 'i', 'd', 'e', 'r', 'm', 'a', 'n']

console.log("\n-----------------------------");

// 2 Create two arrays of heroes
const marvelHeroes = ['Iron Man', 'Spiderman', 'Thor'];
const dcHeroes = ['Batman', 'Superman', 'Flash'];

console.log("Marvel Heroes:");
console.log(marvelHeroes);
console.log("DC Heroes:");
console.log(dcHeroes);

console.log("\n-----------------------------");

// 3 Combine both arrays using spread operator
const allHeroes = [...marvelHeroes, ...dcHeroes];
console.log("Combined Heroes (Marvel + DC):");
console.log(allHeroes);

console.log("\n-----------------------------");

// 4 Demonstrate array reference (without spread)
const heroesRef = marvelHeroes;
heroesRef.push('Hulk'); // This will also change marvelHeroes
console.log("Marvel Heroes after pushing to heroesRef:");
console.log(marvelHeroes); // Also includes Hulk

console.log("\n-----------------------------");

// 5 Create a true copy of an array using spread
const marvelCopy = [...marvelHeroes];
marvelCopy.push('Wolverine'); // Won’t affect original marvelHeroes
console.log("Original Marvel Heroes:");
console.log(marvelHeroes);
console.log("Copied Marvel Heroes (with Wolverine):");
console.log(marvelCopy);

// Flat example in js
const array08 = [1, 2, 3, 4, [5, 6,], 8, [9, [10, 11,] ] ] 
const array07 = array08.flat(Infinity)
console.log(array07);


//To check the data type of an array and covert it into a real array from method





