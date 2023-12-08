import React from 'react';
import Track from './Track';

function SearchResults({ results, selectedTracks, setSelectedTracks }) {

    return(
        <div>
            <h2>Results</h2>
            <ul className='search-results-list'>
                {results.map((item, index) => (
                    <Track 
                        results={results}
                        result={Object.keys(item)}
                        artist={item[Object.keys(item)].artist}
                        album={item[Object.keys(item)].album}
                        selectedTracks={selectedTracks}
                        setSelectedTracks={setSelectedTracks}
                        index={index}
                        key={index}
                    />
                ))}
            </ul>
        </div>
    )
}

export default SearchResults;