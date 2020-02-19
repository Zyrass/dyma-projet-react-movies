import React, { Component } from 'react';

import { Header, MovieList, MovieDetails, Loading } from './components';
import dataMovies from "./data"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false,
    }

    setTimeout(() => {
      this.setState({
        movies: dataMovies,
        loaded: true
      })
    }, 3000);

  }

  updateSelectedMovie = ( /* title */ index ) => {

    /**
     * ---------- SI PARAMETRE === title
     * La méthode findIndex prends un callback en paramètre.
     * Le paramètre va correspondre à chacun des éléments de l'array movies
     * -------------------------------------------------------------------------

    const index = this.state.movies.findIndex( ( iteratorMovie ) => {
      return title === iteratorMovie.title;
    });

    this.setState({
      selectedMovie: index
    });

     * -------------------------------------------------------------------------
     */

    this.setState({
      selectedMovie: index
    });
  }

  render() {
    return (
      <div className="App d-flex flex-column">
          <Header />
        
        { /* flex-fill permet de prendre toute la hauteur restante */ }
        <div className="d-flex flex-row flex-fill pt-4">
          
          { this.state.loaded ? (

            <>
              <MovieList 
                movies={ this.state.movies }
                updateSelectedMovie={ this.updateSelectedMovie }
              />
              
              <MovieDetails
                movie={ this.state.movies[ this.state.selectedMovie ] }
              />
            </>

          ) : (
            <Loading />
          ) }





        </div>
      </div>
    );
  }
}

export default App;
