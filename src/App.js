import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import AuthLink from './AuthLink';
import Track from './Track';

function App() {
  const [results, setResults] = useState([]);
  const [cumulativeResults, setCumulativeResults] = useState([]);
  const [selectedTracks, setSelectedTracks] = useState([]);

  useEffect(() => {
    setCumulativeResults((prev) => [
        ...prev, 
        ...(results.map((item) => (
          <Track 
              results={results}
              result={item["name"]}
              artist={item["artists"][0]["name"]}
              album={item["album"]["name"]}
              selectedTracks={selectedTracks}
              setSelectedTracks={setSelectedTracks}
              resultId={item["uri"]}
              key={item["uri"]}
              list="search-results"
          />
      )))
    ])
  }, [results, selectedTracks]);

  return (
    <div className="App">
      <header>  
        <h1>Jammmin</h1>
      </header>
      <AuthLink />
      <SearchBar setResults={setResults} />
      <div className='lists-container'>
        <SearchResults results={results} selectedTracks={selectedTracks} setSelectedTracks={setSelectedTracks} setCumulativeResults={setCumulativeResults} data-testid="searchResults" />
        <Playlist selectedTracks={selectedTracks} setSelectedTracks={setSelectedTracks} results={results} cumulativeResults={cumulativeResults} />
      </div>
    </div>
  );
}

export default App;
