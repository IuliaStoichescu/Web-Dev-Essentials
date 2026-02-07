axios.get('https://swapi.dev/api/people/1/')
   .then(res => {
      console.log(res);
   })
   .catch(err => {
      console.log("Error", err);
   });

//AS ASYNC FUNCTION
const getStartWarsPeople = async () => {
   try {
      const res = await axios.get('https://swapi.dev/api/people/1/');
      console.log(res.data);
   }
   catch (e) {
      console.log("Error", e);
   }
}
//DAD JOKES GENERATOR
const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
   const jokeText = await getDadJokes();
   const newLi = document.createElement("LI");
   newLi.append(jokeText);
   jokes.append(newLi);
}
const getDadJokes = async () => {
   try {
      const res = await axios.get('https://icanhazdadjoke.com/', {
         headers: {
            Accept: "application/json"
         }
      });
      return res.data.joke;
   } catch (error) {
      console.log("Error", error);
      return "No jokes available :(";
   }

}
button.addEventListener("click", addNewJoke);
