//prototype - a property that is available on all objects created by a constructor function.
//  It allows us to add properties and methods to all instances of an object created by a
// constructor function.

String.prototype.yell = function () {
   return `OMG!!! ${this.toUpperCase()}!!! AGHGHGH!`;
}

Array.prototype.pop = function () {
   return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!';
}

//__proto__ is a property that is available on all objects in JavaScript.
// It is a reference to the prototype of the object.
// It allows us to access the properties and methods of the prototype of an object.