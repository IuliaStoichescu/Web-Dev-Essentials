const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/moviesAPP')
   .then(() => {
      console.log("Succesfully connected to port 27017")
   })
   .catch(err => {
      console.log("Oh no !! Error: ", err);
   })
//node -i -e "$(<index.js)" instead of .load index.js
//load works
//Model

const movieSchema = new mongoose.Schema({
   title: String,
   year: Number,
   score: Number,
   rating: String,
})

const Movie = mongoose.model('Movie', movieSchema); //will create a collection named 'movies's
//const titanic = new Movie({ title: "Titanic", year: 1997, score: 8.8, rating: 'R' });
//in the terminam titanic.save()

Movie.insertMany([
   { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
   { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
   { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
   { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
   { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
])
   .then(data => {
      console.log("IT WORKED!")
      console.log(data);
   })
//in load terminal ,
//FINDING
//Movie.find().then((data)=>{console.log(data)})
//Movie.find({rating:'PG-13'}).then((data)=>{console.log(data)})
//Movie.find({rating:{$gt:2010}}).then((data)=>{console.log(data)})
//Movie.findById('idcjdn').then(m => console.log(m))

//UPDATING
// Movie.updateOne({ name: 'Amadeus' }, { year: 1984 }).then(res=>console.log(res));
// update the year of the one recod whose name is bla bla
//.updateMany() and .update()
//.findOneAndUpdate()
//.findByIdAndUpdate()

//DELETION
//.deleteOne() .deleteMany()
//Movie.deleteOne({title: 'Amelie'}).then(msg => console.log(msg))