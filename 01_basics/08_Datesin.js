//Date
let myDate = new Date()
console.log(myDate.toString()); 
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
//what is the type of date it is object.
console.log(typeof myDate);

//let myCreatedDate = new Date(2003, 11,8)
let myCreatedDate = new Date("12-08-2003")
console.log(myCreatedDate.toDateString());

let mytimestamp = Date.now()
console.log(mytimestamp);
console.log(myCreatedDate.gettime);
console.log(myCreatedDate.getTime());

//By creating a object you can modify more! 
newDate.toLocaleString('default',{
    weekday : "long"
})

  