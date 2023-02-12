//const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

  let result =  array.map( movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;

}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  let result =  array.filter( movie => movie.director === director);
  console.log("EXERCICE 2 ->", result);
  return result;

}


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  let initialValue = 0;
  let movDir =  getMoviesFromDirector(array, director);
  let scoreArray =  movDir.reduce((total, value) => total + value.score, initialValue);
  let result = Number((scoreArray / movDir.length).toFixed(2));
  //let result = scoreArray / movDir.length;
  console.log("EXERCICE 2 ->", result);
  return result;

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
/*Rep una array de pelicules i retorna ordenat alfabeticament, només els títols de les 20 primeres.*/
let result = array.map(movie => movie.title).sort().slice(0,20);
return result;

}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  
// a<b = negativo = se mueve el A
// a==b = 0 = NADA
// a>b = positivo = se mueve el B

let newArray = [...array];
let orderAlph = newArray.sort((a, b) => {if (a.title < b.title) return -1;});
let orderYear = orderAlph.sort((a, b) => a.year - b.year);

return orderYear;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
