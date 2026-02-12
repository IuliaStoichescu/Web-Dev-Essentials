//factory function
function makeColor(r, g, b) {
   const color = {};
   color.r = r;
   color.g = g;
   color.b = b;
   color.rgb = function () {
      // return `rgb(${this.r}, ${this.g}, ${this.b})`;
      //or
      const { r, b, g } = this;
      return `rgb(${r}, ${g}, ${b})`;
   }
   color.hex = function () {
      const { r, g, b } = this;
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
   }
   return color;
}

const firstColor = makeColor(89, 234, 56);
firstColor.rgb(); // "rgb(89, 234, 56)"

//constructor function
function Color(r, g, b) {
   this.r = r;
   this.g = g;
   this.b = b;
   // this.rgb = function () {
   //    const { r, b, g } = this;
   //    return `rgb(${r}, ${g}, ${b})`; this appears as function and not prototype method, so we will move it to prototype
   // }
}
Color.prototype.rgb = function () {
   const { r, b, g } = this;
   return `rgb(${r}, ${g}, ${b})`;
}
Color.prototype.hex = function () {
   const { r, g, b } = this;
   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
Color.prototype.rgba = function (a = 1.0) {
   const { r, b, g } = this;
   return `rgba(${r}, ${g}, ${b}, ${a})`;
}
let color1 = new Color(255, 40, 100);