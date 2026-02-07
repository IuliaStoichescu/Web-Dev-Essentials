//AJAX - ASYNCHRONOUS JAVASCRIPT AND XML
//AJAX allows us to communicate with servers, request data, and update web pages without
// reloading the entire page.
//AJAX is commonly used for fetching data from APIs (Application Programming Interfaces).
//APIs allow different software applications to communicate with each other.
const data = `{"ticker":{"base":"BTC","target":"USD","price":"57345.67","volume":"1234.56","change":"-0.45"}}`;
//we need to turn it into a valid js object
const parse = JSON.parse(data);
console.log(parse);
console.log(`The price of ${parse.ticker.base} in ${parse.ticker.target} is ${parse.ticker.price}`);
const dog = { breed: "Husky", color: "White", age: 3, owner: undefined };
const dogJSON = JSON.stringify(dog);//converts js object into a JSON string
console.log(dogJSON);

//HTTPS Verbs - Methods used in HTTP requests
//GET - Retrieve data from a server
//POST - Send data to a server to create a new resource
//PUT - Update an existing resource on the server
//DELETE - Remove a resource from the server
//PATCH - Partially update an existing resource on the server

//HTTP status codes - Standardized codes returned by servers to indicate the result of a request
//200 OK - The request was successful

//Query String - A part of a URL that contains data to be sent to the server,
// typically in key-value pairs
//Example: https://api.example.com/data?key1=value1&key2=value2

//HTTP Headers - Metadata sent with HTTP requests and
// responses, providing additional information about the request or response
//Example: Content-Type, Authorization, User-Agent