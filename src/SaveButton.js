import React from 'react';

function SaveButton({ selectedTracks, playlistName }) {

    async function savePlaylist() {

        const currentURL = window.location.href;
        const searchParameters = new URLSearchParams(currentURL);
        const accessToken = searchParameters.get('http://localhost:3000/#access_token');
        const idGetterURL = `https://api.spotify.com/v1/me`;
        let userID = '';
        await fetch(
            idGetterURL, 
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        )
        .then(response => response.json())
        .then(response => {
            userID = response.id;
        })
        .catch ((err) => {
            console.error('Error fetching user id', err)
        });


        const playlistBuilderURL = `https://api.spotify.com/v1/users/${userID}/playlists`;
        let playlistID = ``;
        try {
            await fetch(
                playlistBuilderURL,
                {
                    "method": "POST", 
                    "headers": {
                        "Authorization": `Bearer ${accessToken}`,
                        "Content-Type": "application/json"
                    },
                    "body": JSON.stringify({
                        "name": playlistName,
                        "description": "A new playlist, created using Jammmin!",
                        "public": "false"
                    })
                }
            )
            .then((response) => response.json())
            .then((response) => {
                console.log(response.id);
                playlistID = response.id;
            })
        } catch (error) {
            console.error('Error creating playlist!', error)
        };


        const trackAdderURL = `https://api.spotify.com/v1/playlists/${playlistID}/tracks`;
        const tracksToAdd = [];
        for (let track of selectedTracks) {
            tracksToAdd.push(track);
        };
        try {
            await fetch(
                trackAdderURL,
                {
                    "method": "POST",
                    "headers": {
                        "Authorization": `Bearer ${accessToken}`,
                        "Content-Type": "application/json"
                    },
                    "body": JSON.stringify({
                        "uris": tracksToAdd
                    })
                }
            )
        } catch (error) {
            console.error('Error adding tracks to playlist!', error)
        }



    };

    return (
        <button onClick={savePlaylist}>
            Save My Playlist
        </button>
    )

}

export default SaveButton;