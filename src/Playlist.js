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
            <ul className='playlist-list'>
                {selectedTracks.map((item) => <>{item}</>)}
            </ul>
            <SaveButton />
        </div>
    )
}

export default Playlist;