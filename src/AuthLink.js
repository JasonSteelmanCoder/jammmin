import React from 'react';

function AuthLink() {

    // The Spotify id for this app
    const client_id = "2709bf216b7249128432019eaae890fb";
    // The url to return to after signing in. Set in the .env file
    const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
    // The scope of abilities that the user will agree to when signing in
    const scope = "playlist-modify-private";

    // Construct the url using the pieces above
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