import React, { Component, Fragment } from 'react';

import { Header, MovieList, MovieDetails, Loading } from './components';
import dataMovies from "./data";

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

  updateSelectedMovie = ( index ) => {
    this.setState({
      selectedMovie: index
    });
  }

  render() {
    return (
      <div className="d-flex flex-column">
        <Header />
        <div className="d-flex flex-row flex-fill pt-4">
          { this.state.loaded ? (
            <Fragment>
              <MovieList 
                movies={ this.state.movies }
                updateSelectedMovie={ this.updateSelectedMovie }
              />              
              <MovieDetails
                movie={ this.state.movies[ this.state.selectedMovie ] }
              />
            </Fragment>
          ) : (
            <Loading />
          ) }
        </div>
      </div>
    );
  }
}

export default App;
