import React from 'react';
import Tracklist from './Tracklist';
import SaveButton from './SaveButton';

function Playlist() {
    return (
        <div>
            <h2>My Playlist</h2>
            <Tracklist />
            <SaveButton />
        </div>
    )
}

export default Playlist;