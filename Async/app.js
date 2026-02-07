//call stack
//tool called loupe to visualise the call stack
//js is single threaded 

//example
console.log("Sending request to the server ..."); //1
setTimeout(() => {
   console.log("Heere is your data!!") //2
}, 3000); //one of web api functions
console.log("I am at the end"); //3
//1 will run first then 3 and after 3 seconds 2
//the browser does the work, js will hand out the browser some tasks 
//callbacks
setTimeout(() => {
   document.querySelector('body').style.backgroundColor = "red";
   setTimeout(() => {
      document.querySelector('body').style.backgroundColor = "orange";
      setTimeout(() => {
         document.querySelector('body').style.backgroundColor = "yellow";
      }, 1000);
   }, 1000);
}, 1000);

const delayColor = (newColor, delay, doNext) => {
   setTimeout(() => {
      document.querySelector('body').style.backgroundColor = newColor;
      doNext && doNext();
   }, delay);
}

delayColor("teal", 1000, () => {
   delayColor("red", 1000, () => {
   })
})

//promise - object representing the completion or failure of an asynchronous operation
fakeRequestCallback('books.com',
   function (response) {
      console.log(response);
      fakeRequestCallback('url', function () {

      }, function () {

      })
   },
   function (err) {
      console.log("Error!!", err);
   }
)//callbacks

//promises
const request = fakeRequestPromise('hihi.com/api/coffee');
request.then(() => {
   console.log("It worked!!"); //if promise is resolved this func runs
}).catch(() => {
   console.log("Oh nooo!!"); //otherwise if the promise is rejected this runs
})
//nesting promises
fakeRequestPromise('hihi.com/api/coffee/page1')
   .then(() => {
      console.log("It worked!!"); //if promise is resolved this func runs
      fakeRequestPromise('hihi.com/api/coffee/page2')
         .then(() => {
            console.log("It worked for page 2!!")
         }).catch(() => {
            console.log("Oh nooo x2!!");
         })
   }).catch(() => {
      console.log("Oh nooo!!"); //otherwise if the promise is rejected this runs
   })

//better shorter way 
fakeRequestPromise('hihi.com/api/coffee/page1')
   .then(() => {
      console.log("It worked!!");
      return fakeRequestPromise('hihi.com/api/coffee/page2')
   })
   .then(() => {
      console.log("It worked for 2!!");
      return fakeRequestPromise('hihi.com/api/coffee/page3')
   })
   .then(() => {
      console.log("It worked for 3!!");
   })
   .catch(() => {
      console.log("Oh nooo a request failed !!"); //otherwise if the promise is rejected this runs
   })