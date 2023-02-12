//const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

  let result =  array.map( movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;

}

//getAllDirectors(movies);

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  let result =  array.filter( movie => movie.director === director);
  console.log("EXERCICE 2 ->", result);
  return result;

}

/*
// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let initialValue = 0;
  let movDir =  getMoviesFromDirector(array, director);
  let scoreArray =  movDir.reduce((total, value) => total + value.score, initialValue);
  let result = Number((scoreArray / movDir.length).toFixed(2));
  //let result = scoreArray / movDir.length;
  console.log("EXERCICE 3 ->", result);
  return result;
}
*/

// Exercise 3+6: Calculate the average of the films of a given director or by category Array (ex 6)
function moviesAverageOfDirector(array, director) {
  if (director) {
    array =  getMoviesFromDirector(array, director);
  }
  let initialValue = 0;
  let scoreArray =  array.reduce((total, value) => total + value.score, initialValue);
  let result = Number((scoreArray / array.length).toFixed(2));
  console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
//Rep una array de pelicules i retorna ordenat alfabeticament, només els títols de les 20 primeres.
let result = array.map(movie => movie.title).sort().slice(0,20);
console.log("EXERCICE 4 ->", result);
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
console.log("EXERCICE 5 ->", orderYear);
return orderYear;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {

  let categoryArray = array.filter(movie => { if (movie.genre.includes(category) && movie.score) return movie });
  let result = moviesAverageOfDirector(categoryArray);
  console.log("EXERCICE 6 ->", result);
  return result;

  /*
  // FUNCIÓ 6 SENCERA (SENSE 3)
  let initialValue = 0;
  let newArray = array.filter(movie => { if (movie.genre.includes(category) && movie.score) return movie });
  let totScore = newArray.reduce((total, value) => total + value.score, initialValue);
  let result = Number(( totScore / newArray.length).toFixed(2));
  console.log("EXERCICE 6 ->", result);
  return result;
  */

}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  let minutsArr = [...array];
  const noNum = /\D+/g;
  let result = minutsArr.map( movie => {
  

    let nums = movie.duration.replace(noNum, '');
    let hours = parseInt(nums.slice(0,1));
    let min = parseInt(nums.slice(1,3));
    movie.duration = parseInt(hours*60+min);
    return movie;
    
    });
    return result;
  
}

//console.log(hoursToMinutes(movies));

/*

let result = minutsArr.map( movie => {
  
  //let hours = movie.duration.slice(0,1);
  //movie.duration = hours*60;
  let nums = movie.duration.replace(noNum, '');
  let hours = parseInt(nums.slice(0,1));
  let min = parseInt(nums.slice(1,3));
  movie.duration = parseInt(hours*60+min);
  return movie;
  
  });
  //console.log(array);
  //console.log(minutsArray);
  return result;
  

}
*/

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
