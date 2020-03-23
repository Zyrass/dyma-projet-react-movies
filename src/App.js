import React, { Component } from 'react';
import apiMovie, { apiMovieMap } from "./configuration/api.moviedb";

import Films from "./features/films";
import { Header } from './components';

// A décommenter pour ré-utiliser le fichier de data mais avec l'API plus besoin
// import dataMovies from "./data";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false,
    }
  }

  // Lors du clic sur un film, je mets à jour le film sélectionné
  updateSelectedMovie = ( index ) => {
    this.setState({
      selectedMovie: index
    });
  }

  componentDidMount() {

    // La méthode GET, retourne une promesse
    apiMovie.get( "/discover/movie?language=fr")
            
            // Premier then : Découverte du contenu de la requête
            .then( response => {
              // Le contenu complet de la response
              console.log( "apiMovie.get du fichier App.js :", response );
              // Le tableau de films de la response
              console.log( "response.data.results", response.data.results );
              return response.data.results;
            })
            
            // Seconde then : Je passe à celui ci la reqête à traiter.
            .then( listMoviesAPI => {
              
              // listMoviesAPI contient un tableau de film.
              // Soit c'est l'équivalent de response.data.results 
              console.log( "listMoviesAPI : ", listMoviesAPI );
              
              // apiMovieMap correspond quant à une méthode dans api.moviedb.js
              const movies = listMoviesAPI.map( apiMovieMap );

              // J'utilise la méthode pour mettre à jour les films
              this.updateMovies( movies );
            })
            
            // Je capture une quelconque erreur ici et je l'affiche
            .catch( errors => console.log( "Errors apiMovie.get :", errors ) );

  } // Fin componentDidMMount()

  // Mise à jour des films + modification du composant "loaded: true"
  updateMovies = ( movies ) => {
    this.setState({
      movies,
      loaded: true
    })
  }

  render() {
    return (
      <div className="d-flex flex-column">
        <Header />
        <Films

          // Contenu du state
          movies =              { this.state.movies }
          selectedMovie =       { this.state.selectedMovie }
          loaded =              { this.state.loaded }

          // Méthodes créer
          updateSelectedMovie = { this.updateSelectedMovie }
          updateMovies =        { this.updateMovies }
        />
      </div>
    );
  }
}

export default App;
