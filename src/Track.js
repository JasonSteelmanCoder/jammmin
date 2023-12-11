import React from 'react';
import './Track.css';

function Track({ results, result, artist, album, selectedTracks, setSelectedTracks, resultId }) {

    function handleClick(event) {
            setSelectedTracks(prev => [...prev, resultId]);
    };

    return (
        <li onClick={handleClick} resultId={resultId} >
            <h3>{result}</h3>
            <span>{artist}: </span>
            <span>{album}</span>
        </li>
    )
};

export default Track;