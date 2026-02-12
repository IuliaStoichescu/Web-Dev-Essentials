class Color {
   constructor(r, g, b, name) {
      this.r = r;
      this.g = g;
      this.b = b;
      this.name = name;
   }
   show() {
      return `The name of the color is ${this.name} and the RGB value is ${this.rgb()}`;
   }
   rgb() {
      const { r, g, b } = this;
      return `rgb(${r}, ${g}, ${b})`;
   }
}
//this.innerRGB() to access a method within the class
const c1 = new Color(255, 40, 100, 'tomato');
//extend - we can create a new class that extends the Color class
// and adds new properties and methods to it.
//super - we can use the super keyword to call the constructor of
// the parent class and access its properties and methods.

class Animal {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
   eat() {
      return `${this.name} is eating.`;
   }
}

class Cat extends Animal {
   constructor(name, age, color) {
      super(name, age);
      this.color = color;
   }
   meow() {
      return `${this.name} says meow.`;
   }
}
