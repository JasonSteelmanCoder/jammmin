import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import AuthLink from './AuthLink';
import Track from './Track';

function App() {
  // When spotify returns search results, they land in the `results` array
  const [results, setResults] = useState([]);
  // The `cumulativeResults` array keeps track of previous results so that multiple searches can be added to the same playlist  
  const [cumulativeResults, setCumulativeResults] = useState([]);
  // The selectedTracks array is used to populate the user's playlist
  const [selectedTracks, setSelectedTracks] = useState([]);

  // Add previous results to cumulativeResults so that the user's playlist can persist through more than one search
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
