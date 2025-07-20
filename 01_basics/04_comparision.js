//comparisions in JS
console.log(2 > 1);
console.log(2 < 1);
console.log(2 = 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);

//When the datatype of two values are different then the code editior will give you some suprising result
console.log("2" > 1); 
console.log("02" > 1);
//This will put you in the confusion of output
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
//This will put you in the confusion of output
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

//Strict convirsion in JS is defined as ===
console.log("2" === 2);
//By this method === you can also check the data type also 
