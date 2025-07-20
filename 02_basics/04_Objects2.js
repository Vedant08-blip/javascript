const hero = {
  name: "Batman",
  power: "Martial Arts",
  city: "Gotham",
  
  // method (function inside an object)
  introduce: function() {
    console.log("I am " + this.name + " from " + this.city + "!");
  }
};

console.log(hero.name);       // Access property
console.log(hero.power);      // Access property
hero.introduce();             // Call method

//************************************************************************** */
//object inside an objcet

// Main object
const student = {
  name: "Vedant",
  age: 21,

  // Nested object
  address: {
    city: "Vadodara",
    state: "Gujarat",
    country: "India"
  }
};

// Accessing values
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("City:", student.address.city);
console.log("State:", student.address.state);
console.log("Country:", student.address.country);

//Question how to merge a object with an object ?

const obj1 = { name: "Vedant", age: 21 };
const obj2 = { city: "Vadodara", country: "India" };

// Combine using spread operator
const combined = { ...obj1, ...obj2 };

console.log(combined);

