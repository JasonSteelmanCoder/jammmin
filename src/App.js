import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import songs from './mockResponse';

function App() {
  const [results, setResults] = useState([]);
  const [selectedTracks, setSelectedTracks] = useState([]);

  function handleNewResults(event) {
    event.preventDefault();
    setResults(songs);
  };

  return (
    <div className="App">
      <header>  
        <h1>Jammmin</h1>
      </header>
      <SearchBar handleNewResults={handleNewResults} />
      <div className='lists-container'>
        <SearchResults results={results} setSelectedTracks={setSelectedTracks} />
        <Playlist selectedTracks={selectedTracks} />
      </div>
    </div>
  );
}

export default App;
