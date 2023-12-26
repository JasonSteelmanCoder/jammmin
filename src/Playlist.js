import React, { useState } from 'react';
import SaveButton from './SaveButton';
import Track from './Track';

function Playlist({ selectedTracks, setSelectedTracks, cumulativeResults }) {
    // playlistName stores the current value typed into the playlist name box
    const [playlistName, setPlaylistName] = useState('Playlist Name');

    // allow the playlist name to update in real time when typed in
    function handleChange(event) {
        setPlaylistName(event.target.value);
    };

    return (
        <div>
            <input type='text' value={playlistName} onChange={handleChange} data-testid="playlist-name"></input>
            <ul className='playlist-list'>
                {
                    selectedTracks.map((resultId) => {
                        console.log(cumulativeResults);
                        const selectedTrack = cumulativeResults.find(
                            (track) => track.props.resultId === resultId
                        )
                        return <Track  
                            result={selectedTrack.props.result} 
                            artist={selectedTrack.props.artist} 
                            album={selectedTrack.props.album} 
                            selectedTracks={selectedTracks} 
                            setSelectedTracks={setSelectedTracks}
                            resultId={resultId}
                            key={resultId} 
                            list="playlist"
                        />
                    })
                }
            </ul>
            <SaveButton selectedTracks={selectedTracks} playlistName={playlistName} />
        </div>
    )
}

export default Playlist;