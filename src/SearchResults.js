import React from 'react';
import Track from './Track';

function SearchResults({ results, setSelectedTracks }) {

    return(
        <div>
            <h2>Results</h2>
            <ul>
                {results.map((item, index) => (
                    <Track 
                        results={results}
                        result={Object.keys(item)}
                        artist={item[Object.keys(item)].artist}
                        album={item[Object.keys(item)].album}
                        setSelectedTracks={setSelectedTracks}
                        index={index}
                    />
                ))}
            </ul>
        </div>
    )
}

export default SearchResults;