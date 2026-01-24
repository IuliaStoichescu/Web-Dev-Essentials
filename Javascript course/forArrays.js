//forEach
//map
//filter
//find
//reduce
//some
//every

//1
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
num.forEach(function (el) {
   if (el % 2 === 0) {
      console.log(el);
   }
})

const mov = [
   { title: "Meme", score: 90 }, { title: "Nono", score: 40 }, { title: "Si", score: 99 }
]
mov.forEach(
   function (m) {
      console.log(`${m.title} - ${m.score}/100`);
   }
)

//2
const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 50];
num2.map(function (n) {
   return n * 2;
}) // 1,4,6,...100

const titles = mov.map(function (m) {
   return m.title.toUpperCase(); //put the titles into a new array, mapping into a new array
})

//arrow functions
const multiply = (x, y) => {
   return x * y;
}
//other way
const isEven = num => {
   return num % 2 === 0;
}
//implicit return 
const isEven2 = num => (
   num % 2 === 0
);
//another way
const isEven3 = num => num % 2 === 0;

const newMovies = movies.map(m => (
   console.log(`${m.title} - ${m.score}/100`)
));

//setTimeout(function,timer) - runs one time
//setInterval(function,interval) - runs every interval ms or seconds
//how to stop - save the setInterval into a variable and then clearInterval(variable)

//3
const oddNrs = num2.filter(n => n % 2 === 1);
const goodMovies = mov.fill(s => s.score >= 90).map(m => m.title);

// every and some return booleans
num.every(n => n <= 10); // returns false
num.some(n => n >= 5); // returns true

//reduce
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];
const total = prices.reduce((total, element) => {
   return total + element;
})
const minPrice = prices.reduce((min, current) => {
   if (current < min) {
      min = current;
   }
   return min;
})

const ev = [2, 4, 6, 8];
ev.reduce((sum, num) => sum + num, 100); //100 or the second parameter is the starting value