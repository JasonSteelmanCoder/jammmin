import React from 'react';
import Track from './Track';

function SearchResults({ results }) {

    return(
        <>
            <h2>Results</h2>
            <ul>
                {results.map((item) => (
                    <Track 
                        result={Object.keys(item)}
                        artist={item[Object.keys(item)].artist}
                        album={item[Object.keys(item)].album}
                    />
                ))}
            </ul>
        </>
    )
}

export default SearchResults;