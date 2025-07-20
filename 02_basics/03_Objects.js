// Singleton

//Objects literals
//Important in objects
//Smybol is remaning
const jsUser = {
 name: "vedant",
 age: 18,
 location: "vadodra",
 email: "vedant@808", 
 isloggedin: false

}

console.log(jsUser.age);
console.log(jsUser["location"]);
//To change the value of the object
jsUser.isloggedin = true
jsUser.location = "Gujrat"
//if you want no one can change the value so there is method
//Method Freeze
//Object.freeze(jsUser) //This is freeze function

//Defining functions
jsUser.greetings = function(){
    console.log("Hello jsuser");
    
}
console.log(jsUser.greetings())


jsUser.greetingstwo = function(){
    console.log('Hello jsuser, ${this.name}');
    
}
console.log(jsUser.greetings())



