import * as axios from "axios";

/**
 * -----------------------------------------------------------------------------
 * API THE MOVIE DB.ORG
 * -----------------------------------------------------------------------------
 */


// Je défini la base de l'URL qui sera utilisé avec l'API.
const apiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/4'
})

// Définition de ma clé d'authentification de l'API
apiMovie.interceptors.request.use( myRequest => {
  console.log( "api.moviedb.js, param myRequest = ", myRequest );

  // Sans cette ligne dans l'onglet network de la console du navigateur,
  // J'aurais eu une erreur 401 comme quoi je ne suis pas authentifié.
  myRequest.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzg0OGVlMDFlMzMwODBiZjJhZWIxOWFlZjY2ZDVkYiIsInN1YiI6IjVhZTMwYjZkMGUwYTI2NzQ0NTAyNTJlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iZrxAj3NiM274cbouZvlFJm5MwX8DMurVnvNOxcS-QI';

  return myRequest;
})

export default apiMovie;


// Cette méthode est utilisée 2x donc pour éviter une répétition du code, elle 
// a été implanté ici pour la ré-exploiter plus facilement.
export const apiMovieMap = current_movie => (
  {
    // img: 'https://image.tmdb.org/t/p/w500' +   current_movie.backdrop_path,
    img: "https://image.tmdb.org/t/p/w500"    + current_movie.poster_path,
    cover: 'https://image.tmdb.org/t/p/w500'  + current_movie.poster_path,
    title: current_movie.title,
    details:  current_movie.release_date  + ' | ' +
              current_movie.vote_average  + " /10 ( " +
              current_movie.vote_count    + " )",
    description: current_movie.overview
  }
)