import React from 'react';

function AuthLink() {

    const client_id = "2709bf216b7249128432019eaae890fb";
    const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
    const scope = "playlist-modify-private";

    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&scope=' + encodeURIComponent(scope);

    return (
        <a href={url} >
            Sign in to Spotify to find cool songs!
        </a>
    )
}

export default AuthLink;