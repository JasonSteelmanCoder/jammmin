import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import AuthLink from './AuthLink';

function App() {
  const [results, setResults] = useState([]);
  const [selectedTracks, setSelectedTracks] = useState([]);

  return (
    <div className="App">
      <header>  
        <h1>Jammmin</h1>
      </header>
      <AuthLink />
      <SearchBar setResults={setResults} />
      <div className='lists-container'>
        <SearchResults results={results} selectedTracks={selectedTracks} setSelectedTracks={setSelectedTracks} />
        <Playlist selectedTracks={selectedTracks} setSelectedTracks={setSelectedTracks} results={results} />
      </div>
    </div>
  );
}

export default App;
