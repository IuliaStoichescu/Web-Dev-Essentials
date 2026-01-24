//default params
function rollDie(numSides = 6) { //default is 6 if we have no param when we call the function, the order matters
   return Math.floor(Math.random() * numSides) + 1;
}

//spread in function calls
const nums = [689, 2, 3, 4, 5, 6, 7, 12, 1000];
Math.max(...nums); //now it can go through the array numbers

//spread with array literals
const cats = ["Kitty", "Zambi", "Blacky"];
const dogs = ["Luna", "Steluta"];
const allPets = [...cats, ...dogs]; //copies everything from the arrays

//spread with objects
const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };

const all = { ...feline, color: "black" }; //ads the key and param
const catDog = { ...feline, ...canine };// property family will win depending on the last

//REST
function sum(...nums) {// all values passed in will be stored inside nums
   return nums;
}
//arguments exists

//destructuring arrays
const numbers = [34, 56, 78, 12, 3, 90];
const [thirty, fifty, seventy, ...theRest] = numbers;

//destructuring objects
const { legs, age = "N/A", ...theRestFeline } = catDog; //here also puts n/a if age doesnt exist
const { canine: canineType } = catDog; //RENAMED CANINE

//destructuring params
// in a function put:
// const {elem1,elem2} = Object
// return elem1,elem2
mov.filter(({ score }) => score >= 90)