import React from 'react';

import { Header, MovieList, MovieDetails } from './components';

function App() {
  return (
    <div className="App">
        <Header />
      <div className="d-flex">
        <MovieList />
        <MovieDetails />
      </div>
    </div>
  );
}

export default App;
