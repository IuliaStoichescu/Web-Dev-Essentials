//XHRs
const req = new XMLHttpRequest();

req.onload = function () {
   console.log("It loaded!");
   const data = JSON.parse(this.responseText); //convert into a js object
   console.log(data.name, data.height);
}//this will run when theres no error
req.onerror = function () {
   console.log("error");
   console.log(this);
}//this will run when theres an error
req.open("GET", "https://swapi.dev/api/people/1/");
req.send();

//Fetch API
fetch("https://swapi.dev/api/people/1/")
   .then(res => {
      console.log("Resolved", res);
      res.json().then(data => console.log(data));//also returns a promise
   })
   .catch(err => {
      console.log("Rejected", err);
   });
//OR
fetch("https://swapi.dev/api/people/1/")
   .then(res => {
      console.log("Resolved", res);
      return res.json();//also returns a promise
   })
   .then((data) => {
      console.log(data);
      return fetch("https://swapi.dev/api/people/2/");
   })
   .then(res => {
      console.log("Resolved", res);
      return res.json();
   })
   .then((data) => {
      console.log(data);
   })
   .catch(err => {
      console.log("Rejected", err);
   });

//ASYNC FUNCTION
const loadStartWarsPeople = async () => {
   try {
      const res = await fetch("https://swapi.dev/api/people/1/");
      const data = await res.json();
      console.log(data);
   }
   catch (err) {
      console.log("Error", err);
   }
}
loadStartWarsPeople();
