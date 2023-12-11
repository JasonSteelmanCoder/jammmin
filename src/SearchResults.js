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
                        result={item[Object.keys(item)].title}
                        artist={item[Object.keys(item)].artist}
                        album={item[Object.keys(item)].album}
                        selectedTracks={selectedTracks}
                        setSelectedTracks={setSelectedTracks}
                        resultId={Object.keys(item)[0]}
                        key={Object.keys(item)}
                    />
                ))}
            </ul>
        </div>
    )
}

export default SearchResults;