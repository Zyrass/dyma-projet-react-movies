import * as axios from "axios";

const apiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/4'
})
apiMovie.interceptors.request.use( myRequest => {
  console.log( "myRequest : ", myRequest );

  // Sans cette ligne sans l'onglet network de la console du navigateur,
  // J'aurais une erreur 401 comme quoi je ne suis pas authentifié
  myRequest.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzg0OGVlMDFlMzMwODBiZjJhZWIxOWFlZjY2ZDVkYiIsInN1YiI6IjVhZTMwYjZkMGUwYTI2NzQ0NTAyNTJlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iZrxAj3NiM274cbouZvlFJm5MwX8DMurVnvNOxcS-QI';

  return myRequest;
})

export default apiMovie;


export const apiMovieMap = current_movie => ({
  img: 'https://image.tmdb.org/t/p/w500' + 
  current_movie.backdrop_path,

  cover: 'https://image.tmdb.org/t/p/w500' + current_movie.poster_path,
  title: current_movie.title,
  details:  current_movie.release_date + ' | ' +
            current_movie.vote_average + " /10 ( " +
            current_movie.vote_count + " )",
  description: current_movie.overview
})