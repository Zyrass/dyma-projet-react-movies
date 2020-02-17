import React from 'react';

import { Header, MovieList, MovieDetails } from './components';

function App() {
  return (
    <div className="App d-flex flex-column">
        <Header />
      
      { /* flex-fill permet de prendre toute la hauteur restante */ }
      <div className="d-flex flex-row flex-fill pt-4">
        <MovieList />        
        <MovieDetails />
      </div>
    </div>
  );
}

export default App;
