const jokes = require('give-me-a-joke')
// console.dir(jokes);//shows the methods available in the package
jokes.getRandomDadJoke(function (joke) {
   console.log(joke);
});

//npm install -g cowsay - -g to install globally so that we can use it in the terminal
//npm init to create a package.json file which is used to manage the dependencies of the project
//npm install - 