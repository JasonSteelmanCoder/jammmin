import React from 'react';

function Track({ results, result, artist, album, setSelectedTracks, index }) {

    function handleClick(event) {
        const trackId = event.currentTarget.id;
        const trackName = Object.keys(results[trackId]);
        const trackArtist = results[trackId][trackName].artist;
        const trackAlbum = results[trackId][trackName].album;
        setSelectedTracks((prev) => [...prev, <Track result={trackName} artist={trackArtist} album={trackAlbum} />])
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