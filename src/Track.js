import React from 'react';
import './Track.css';

function Track({ results, result, artist, album, selectedTracks, setSelectedTracks, index }) {

    function handleClick(event) {
        const trackId = event.currentTarget.id;
        if (event.currentTarget.parentElement.className !== "search-results-list") {
            setSelectedTracks(selectedTracks.filter(track => track.id !== trackId))
        } else {
            const trackName = Object.keys(results[trackId]);
            const trackArtist = results[trackId][trackName].artist;
            const trackAlbum = results[trackId][trackName].album;
            if (selectedTracks.every(track => track.props.index !== trackId)) {
                setSelectedTracks((prev) => [
                    ...prev, 
                    <Track 
                        results={results}
                        result={trackName} 
                        artist={trackArtist} 
                        album={trackAlbum}
                        selectedTracks={selectedTracks}
                        setSelectedTracks={setSelectedTracks}
                        index={trackId}
                        key={trackId} 
                    />
                ])
            }
        }
    };

    return (
        <li onClick={handleClick} key={index} id={index} >
            <h3>{result}</h3>
            <span>{artist}: </span>
            <span>{album}</span>
        </li>
    )
};

export default Track;