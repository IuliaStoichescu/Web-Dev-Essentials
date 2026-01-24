//Nan represents something that is not a number
//typeof something 
let x = 7;
let i = 0;
//postfix increment
i++; // i++ output 0 then i output 1
//prefix increment
++i; //++i output 1

const hehe = 16; //you cannot change it constant value
var who = 10; //old variable way 
let ok = true;
// a variable can change types depending on the assignation !!
let string = "name";
let string1 = 'hehe';
let animal = "Jaguar";
animal[0];
animal.length;

let full = animal + " " + string; //concatenate
//string methods
string.toUpperCase();
full.trim().toUpperCase(); //cleans the string
full.indexOf('J');
//.slice(arg) or .slice(arg1,arg2) arg are indexes
//msg.replace(serachValue,replaceValue)
//.repeat(3)
//template literal `` + inside them ${expr}
let y = `I am ${3 + 5} number`;
//Math object, includes .random() Math.random()* 10 generates a number from 1 to 10
// == --> equality problematic if comparing different types
// === ---> cares also about type not only value
//same for != and !==
console.log("Data");
prompt("Please sign in!");
parseInt(); // converts a string into an integer

// iterate through arrays with for of
const names = ["iuli", "andre", "dana", "rexi", "steluta", "luna", "july", "clemi"];
for (let n of names) {
   console.log(`My family: ${n}`);
}

//iterate through an object
for (let i in object) {
   //gives the key of the object
}
//Object.keys(object) Object.entries(object) Object.values(object)

// for(let score of Object.values(object)) this gives us an array

//function funcName(){}