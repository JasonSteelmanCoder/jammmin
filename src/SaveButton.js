import React from 'react';

function SaveButton({ selectedTracks, playlistName }) {

    async function savePlaylist() {

        // Call API to get user's username
        const currentURL = window.location.href;
        const searchParameters = new URLSearchParams(currentURL);
        const accessToken = searchParameters.get(`${process.env.REACT_APP_REDIRECT_URI}/#access_token`);
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


        // Make playlist on Spotify with the user's specified name
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
                playlistID = response.id;
            })
        } catch (error) {
            console.error('Error creating playlist!', error)
        };


        // Add user's tracks to Spotify playlist
        const trackAdderURL = `https://api.spotify.com/v1/playlists/${playlistID}/tracks`;
        const tracksToAdd = [];
        for (let track of selectedTracks) {
            tracksToAdd.push(track);
        };
        try {
            const response = await fetch(
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
            if (response.ok) {
                alert("Your tracks have been added to your Spotify account! \nReopen your Spotify app to find the playlist there!")
            } else {
                alert("There has been an unspecified error.")
            }
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