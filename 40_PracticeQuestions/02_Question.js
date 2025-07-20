// MIN AND MAX NUMBER IN ARRAY JS
// Solution
let numbers = [98, 54, 83, 10, 2, 14, 8, 13];
let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log("Max is:", max); 
console.log("Min is:", min); 
