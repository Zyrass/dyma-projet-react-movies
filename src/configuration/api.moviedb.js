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