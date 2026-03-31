//Functions in js
function addtwonumbers(number1, number2){
   return number1 + number2
}
// addtwonumbers(4,9)
const result = addtwonumbers(87,93) //In this we have to define the return type inside the function..
console.log("Result: ",result);

function multiplyAndLabel(number1, number2) {
  const product = number1 * number2;
  return `Product of ${number1} x ${number2} = ${product}`;
}

const result = multiplyAndLabel(6, 7);
console.log("Result: ", result);
// Output: Result:  Product of 6 x 7 = 42
