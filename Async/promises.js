//creation of promises
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

fakeRequest('iuli.com/dogs')
   .then((data) => {
      console.log("Its done ieii");
      console.log("Data is: ", data);
   })
   .catch((err) => {
      console.log("It failed :((", err);
   })

const delayColorChange = (color, delay) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         document.body.style.backgroundColor = color;
         resolve();
      }, delay)
   })
}

delayColorChange("red", 1000)
   .then(() => delayColorChange("orange", 1000))
   .then(() => delayColorChange("yellow", 1000))
   .then(() => delayColorChange("green", 1000))
   .then(() => delayColorChange("teal", 1000))
   .then(() => delayColorChange("magenta", 1000))