//async == clean asynchronomous code
//await - only if is an async function, it will pause the execution 
// of the function waiting for a promise to be resolved
const { log } = require("async");

//if i say async function() ... the function automaticly returns a promise
const sing = async () => {
   throw "Oh noo";
   return 'Lalaalal';
}

sing()
   .then((data) => console.log("Resolved", data))
   .catch((err) => {
      console.log("Error appeared");
      console.log(err);
   })

const login = async (username, password) => {
   if (!username || !password) throw 'Problem logging in!';
   if (password === 'corgihihi') return 'Welcome'
   throw 'Invalid Password';
}
login('dkeh', 'corgihihi')
   .then((data) => {
      console.log("Valid, passed ", data);
   })
   .catch((err) => {
      console.log("Error: ", err)
   })

const delayColorChange = (color, delay) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         document.body.style.backgroundColor = color;
         resolve();
      }, delay)
   })
}

async function rainbow() {
   await delayColorChange("red", 1000)
   await delayColorChange("orange", 1000)
   //etc
}

rainbow.then(() => {
   console.log("END OF RAINBOW!!");
})

delayColorChange("red", 1000)
   .then(() => delayColorChange("orange", 1000))
   .then(() => delayColorChange("yellow", 1000))
   .then(() => delayColorChange("green", 1000))
   .then(() => delayColorChange("teal", 1000))
   .then(() => delayColorChange("magenta", 1000))

const fakeRequest = (url) => {
   return new Promise((resolve, reject) => {
      const rand = Math.random()
      setTimeout(() => {
         if (rand < 0.7) {
            resolve('Your fake data here');
         }
         reject('Request error!!');
      }, 1000)
   })
}

async function makeTwoRequests() {
   try {
      let data1 = await fakeRequest('/page1');
      console.log(data1);
      let data2 = await fakeRequest('/page2');
      console.log(data2);
      let data3 = await fakeRequest('/page3');
      console.log(data3);
   } catch (err) {
      console.log("Error: ", err);
   }
}