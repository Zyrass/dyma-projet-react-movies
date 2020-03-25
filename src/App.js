import React, { Component } from 'react';
import { 
  BrowserRouter as Router, Route, Switch, Redirect 
} from "react-router-dom";

import apiMovie, { apiMovieMap } from "./configuration/api.moviedb";
import apiFirebase from "./configuration/api.firebase";

import Films from "./features/films";
import Favoris from "./features/favoris/";
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
      favoris: null
    }
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

    apiFirebase.get( "favoris.json" )
                .then( response => {
                  console.log( response );
                  let favoris = response.data ? response.data : [];
                  this.updateFavoris( favoris );
                })

  } // Fin componentDidMMount()

  // Lors du clic sur un film, je mets à jour le film sélectionné
  updateSelectedMovie = ( index ) => {
    this.setState({
      selectedMovie: index
    });
  }

  // Mise à jour des films + modification du composant "loaded: true"
  updateMovies = ( movies ) => {
    this.setState({
      movies,
      loaded: this.state.favoris ? true : false
    })
  }

  updateFavoris = ( favoris ) => {
    this.setState({
      favoris : favoris,
      loaded: this.state.movies ? true : false
    })
  }

  addFavori = ( title ) => {
    try {
      console.log( "addFavori : title", title);
      const listFavoris = this.state.favoris.slice();
      const film = this.state.movies.find( m => m.title === title );
      listFavoris.push( film );
      this.setState({
        favoris: listFavoris
      }, () => {
        this.saveFavoris();
      });
    } catch ( error ) {
      console.log( "Error addFavori", error );
    }
  }

  removeFavori = ( title ) => {
    try {
      console.log( "removeFavori : title", title );
      const listFavoris = this.state.favoris.slice();
      const index = this.state.favoris.findIndex( f => f.title === title );
      listFavoris.splice( index, "1" );
      this.setState({
        favoris: listFavoris
      }, () => {
        this.saveFavoris();
      });
    } catch ( error ) {
      console.log( "Error removeFavori", error );
    }
  }

  saveFavoris = () => {
    apiFirebase.put("favoris.json", this.state.favoris);
  }

  render() {
    return (
      <Router>
        <div className="d-flex flex-column pb-5" style={
          { 
            backgroundColor: "#eee",
            minHeight: "100vh"
          }
        }>
          <Header />
          <Switch>
            <Route 
              path="/films"
              render={ ( props ) => {
                return (
                  <Films
                    // Ces props peuvent être en rapport avec le routing
                    { ...props }                    
                    // Contenu du state
                    movies = { this.state.movies }
                    selectedMovie = { this.state.selectedMovie }
                    loaded = { this.state.loaded }
                    updateSelectedMovie = { this.updateSelectedMovie }
                    updateMovies = { this.updateMovies }                    
                    addFavori = { this.addFavori }
                    removeFavori = { this.removeFavori }
                    favoris = { this.state.favoris }
                  />
                );
              }}
            />            
            <Route 
              path="/favoris" 
              render={ ( props ) => {
                return (
                  <Favoris
                    { ...props }
                    loaded = { this.state.loaded }
                    favoris={ this.state.favoris }
                    removeFavori={ this.removeFavori }
                  />
                )
              }} 
            />            
            <Redirect to="/films" />
          </Switch>
        </div>
      </Router>
    );
  } // Fin render()
}

export default App;
