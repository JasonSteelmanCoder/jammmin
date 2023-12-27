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
        <li resultid={resultId} list={list} >
            <div>
                <h3>{result}</h3>
                <span>{artist}: </span>
                <span>{album}</span>
            </div>
            <div onClick={handleClick} className={list === "search-results" ? 'track-action-button add-track-button' : 'track-action-button exit-track-button'}>
                {list === "search-results" ? "+" : "x"}
            </div>
        </li>
    )
};

export default Track;