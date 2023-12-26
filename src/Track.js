import React from 'react';
import './Track.css';

function Track({ result, artist, album, selectedTracks, setSelectedTracks, resultId, list }) {

    // Called when a track is clicked in either list
    function handleClick(event) {
        // if the clicked track is in the search-results column
        if (list === "search-results") {
            if (!selectedTracks.includes(resultId)) {
                setSelectedTracks(prev => [...prev, resultId]);
            }
        } else {        // when the clicked track is in playlist
            setSelectedTracks(prev => prev.filter((track) => track !== resultId))
        }
    };

    return (
        <li onClick={handleClick} resultid={resultId} list={list} >
            <h3>{result}</h3>
            <span>{artist}: </span>
            <span>{album}</span>
        </li>
    )
};

export default Track;