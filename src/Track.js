import React from 'react';
import './Track.css';

function Track({ results, result, artist, album, selectedTracks, setSelectedTracks, index }) {

    function handleClick(event) {
        const trackId = event.currentTarget.id;
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
                    // setSelectedTracks={} 
                    index={trackId}
                    key={trackId} 
                />
            ])
        };
    };

    return (
        <li onClick={handleClick} key={index} id={index}>
            <h3>{result}</h3>
            <span>{artist}: </span>
            <span>{album}</span>
        </li>
    )
};

export default Track;