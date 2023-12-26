import React, { useState } from 'react';
import SearchButton from './SearchButton';

function SearchBar({ setResults }) {

    // The value state stores the current value typed into the search bar
    const [value, setValue] = useState('');

    // Allows the search bar to update when typed in
    function handleChange(event) {
        setValue(event.target.value);
    };

    // Called when the user submits their search query
    async function queryAPI(event) {
        event.preventDefault();
        try {
            // The endpoint
            let queryURL = 'https://api.spotify.com/v1/search';
            // The query string made from the user's input in the search bar
            let qString = `?q=${encodeURIComponent(value)}`;
            // What type of data search for
            let type = '&type=track';
            // How many results to return
            let limit = '&limit=10';
            // Construct the url based on the parts above
            let fullQueryURL = `${queryURL}${qString}${type}${limit}`;

            // Get the user's access token from the browser's url
            const currentURL = window.location.href;
            const searchParameters = new URLSearchParams(currentURL);
            const accessToken = searchParameters.get(`${process.env.REACT_APP_REDIRECT_URI}/#access_token`);

            // Call the API to search for tracks related to the user's query
            await fetch(
                fullQueryURL, 
                {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                }
            )
            .then(response => response.json())
            .then(response => {
                setResults(response.tracks.items);
            });

        } catch (error) {
            console.error('Error searching Spotify:', error)
        }
    };

    return (
        <form onSubmit={queryAPI} data-testid="searchForm" >
            <input 
                type="text"
                name="userInput" 
                value={value} 
                onChange={handleChange} 
                data-testid="SearchBar"
            />
            <SearchButton value={value} />
        </form>
    )
};

export default SearchBar;