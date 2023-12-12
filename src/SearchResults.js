import React from 'react';
import Track from './Track';

function SearchResults({ results, selectedTracks, setSelectedTracks }) {

    return(
        <div>
            <h2>Results</h2>
            <ul className='search-results-list'>
                {results.map((item) => (
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
                ))}
            </ul>
        </div>
    )
}

export default SearchResults;