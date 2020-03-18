import React, { Component } from "react";
import { Formik } from "formik";

import apiMovie, { apiMovieMap } from '../../configuration/api.moviedb'

class SearchBar extends Component {

  submit = ( values, actions ) => {
    // console.log( values );
    // console.log( "Object.keys(values) : ", Object.keys( values ));

    const query = '?' + Object.keys(values)
                              .map( key => {
                                return `${ key }=${ values[ key ] }&`
                              })
                              .join('');
    
    apiMovie.get('/search/movie' + query)
            .then( response => response.data.results )
            .then( moviesApi => {
              // apiMovieMap est une méthode créer dans le fichier de config.
              const movies = moviesApi.map( apiMovieMap );
              this.props.updateMovies( movies );
              actions.setSubmitting( false );
            })
            .catch( errors => console.log( errors ));
  }

  render() {
    return (

      <Formik
        onSubmit = { this.submit }
        initialValues = { { query: '', language: "fr-FR" } }
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting
        }) => (
          <form className="my-5" onSubmit={ handleSubmit }>
            <div className="d-flex flex-row">

              <input 
                type="text" 
                placeholder="Rechercher un film ici"
                className="form-control"
                name="query"

                onChange = { handleChange }
                onBlur = { handleBlur }
              />       

              <select
                className="form-control w-50 mx-4"
                name="language"
                onBlur={ handleBlur }
                onChange= { handleChange }
              >
                <option value="fr-FR">Français</option>
                <option value="en-US">Anglais</option>
              </select>

              <button 
                type="submit"
                className="btn btn-info"
                disabled={ isSubmitting}
              >
                Rechercher
              </button>
            </div>
          </form>
        )}

      </Formik>
    )
  }
}

export default SearchBar;