// function one(){
//    code
//    function two(){
//       code
//       function three(){
//          code
//       }
//       three()
//    }
//    two()
// }
const sum = function (x, y) {
   return x + y;
}
sum(4, 5);

function callFunc(func) {
   func();
   func();
}

function scream() {
   console.log("Muahaah");
}
callFunc(scream);

// function myFunct() {
//    exr
//    if (..) {
//       return function () {
//          console...
//       }
//    }
//    else {
//       return function () {
//          ...
//       }
//    }
// }

// function name(min,max){
//    return function(num){
//       return expreeion
//    }
// }
//const isSomething= name(min,max) and then issomething(number)
//every method is a function but not every function is a method!!!

const myMath = {
   PI: 3.14,
   square: function (num) {
      return num * num;
   },
   cube: function (num) {
      return num ** 3;
   },
   //or
   multiply(x, y) {
      return x * y;
   }
}
myMath.square(2);
myMath.cube(68);

//this - inside an object in a method, to call other attributes , have access to the data in an object
//window.function
//it also exists alert

try {
   hello.toUpperCase();
} catch {
   console.log("Oops you didnt catch that!");
}