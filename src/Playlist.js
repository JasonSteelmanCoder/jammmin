import React, { useState } from 'react';
import SaveButton from './SaveButton';

function Playlist({ selectedTracks }) {
    const [playlistName, setPlaylistName] = useState('Playlist Name');

    function handleChange(event) {
        setPlaylistName(event.target.value);
    };

    return (
        <div>
            <input type='text' value={playlistName} onChange={handleChange}></input>
            <ul>
                {selectedTracks.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <SaveButton />
        </div>
    )
}

export default Playlist;