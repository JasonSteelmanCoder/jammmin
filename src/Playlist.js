import React, { useState } from 'react';
import SaveButton from './SaveButton';
import Track from './Track';

function Playlist({ selectedTracks, setSelectedTracks, results }) {
    const [playlistName, setPlaylistName] = useState('Playlist Name');

    function handleChange(event) {
        setPlaylistName(event.target.value);
    };

    return (
        <div>
            <input type='text' value={playlistName} onChange={handleChange}></input>
            <ul className='playlist-list'>
                {
                    selectedTracks.map((resultId) => {
                        const selectedTrack = results.find(
                            (track) => track.uri === resultId
                        )
                        return <Track  
                            result={selectedTrack["name"]} 
                            artist={selectedTrack["artists"][0]["name"]} 
                            album={selectedTrack["album"]["name"]} 
                            selectedTracks={selectedTracks} 
                            setSelectedTracks={setSelectedTracks}
                            resultId={resultId}
                            key={resultId} 
                            list="playlist"
                        />
                    })
                }
            </ul>
            <SaveButton />
        </div>
    )
}

export default Playlist;