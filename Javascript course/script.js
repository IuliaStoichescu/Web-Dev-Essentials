console.log("Bunahhh");
//pus pop shift - remove from start and unshift - add to start
//concat merge
//includes look for a value
//indexOf
//join creates a string from an array
//reverse
//slice copies a portion of the array
//splice removes/replaces elements
//sort
let c = ['a', 'b', 'c'];
c.splice(0, 2, '1', 'r', 'a');
console.log(c); // 1 r a c
let s = c.slice(1, 3)
console.log(c); //r a
let sc = s.join(c); // r1,r,a,ca
console.log(sc);
let a = ["dana", "iuli", "andre"];
let b = ["luna", "steluta", "rexi", "july", "clemi"]
console.log(a.join(" "));//correct version
//const in arrays can change
//object - key and value
let person = {
   name: "Iuli",
   age: 23,
   hooby: "learning",
   pets: ["July", "Clemi"]
}; //every key is turned into a string
console.log(person.name);
//use break in while loops specifically
console.log("Guessing game!!");
let max = parseInt(prompt("Please enter the maximum number")); //everything is a string so we convert
while (!max) {
   max = parseInt(prompt("Please enter a valid maximum number"));
}
let secretNumber = Math.floor(Math.random() * max) + 1;
//console.log(secretNumber);
let tryNum = parseInt(prompt("Enter a number"));
let count = 1;

while (parseInt(tryNum) !== secretNumber) {
   if (tryNum === 'q') { break; }
   tryNum = parseInt(tryNum);
   if (tryNum > secretNumber) {
      tryNum = prompt("Too high! Enter a new guess");
      count++;
   }
   else if (tryNum < secretNumber) {
      tryNum = prompt("Too low! Enter a new guess");
      count++;
   }
   else {
      // console.log("Try again or press q!");
      tryNum = prompt("Try again or press q!");
   }
}
if (tryNum === 'q') {
   console.log(`You tried ${count} times`);
}
console.log(`Congrats!!!You tried ${count} times`);