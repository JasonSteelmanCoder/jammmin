import React, { useState } from 'react';
import SaveButton from './SaveButton';
import Track from './Track';

function Playlist({ selectedTracks, setSelectedTracks, results, cumulativeResults }) {
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