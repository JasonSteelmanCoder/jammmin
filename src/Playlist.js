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
                            (track) => Object.keys(track)[0] === resultId
                        )
                        return <Track  
                            result={selectedTrack[resultId]["title"]} 
                            artist={selectedTrack[resultId]["artist"]} 
                            album={selectedTrack[resultId]["album"]} 
                            selectedTracks={selectedTracks} 
                            setSelectedTracks={setSelectedTracks}
                            resultId={resultId}
                            key={resultId} 
                        />
                    })
                }
            </ul>
            <SaveButton />
        </div>
    )
}

export default Playlist;