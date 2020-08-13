const add = require("./math.js");
const Dog = require("./Dog");

let result = add(5, 5);
console.log(result);

// Testing class import
let myPuppy = new Dog("Joey");
console.log(myPuppy.name);
myPuppy.name = "Fred";
console.log(myPuppy.name);