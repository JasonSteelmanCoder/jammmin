import React from 'react';
import './Track.css';

function Track({ result, artist, album, selectedTracks, setSelectedTracks, resultId, list }) {

    function handleClick(event) {
        if (list === "search-results") {
            if (!selectedTracks.includes(resultId)) {
                setSelectedTracks(prev => [...prev, resultId]);
            }
        } else {        //the clicked track is in playlist
            setSelectedTracks(prev => prev.filter((track) => Object.keys(track) === resultId))
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