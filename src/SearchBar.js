import React, { useState } from 'react';
import SearchButton from './SearchButton';

function SearchBar({ setResults }) {

    const [value, setValue] = useState('Search');

    function handleChange(event) {
        setValue(event.target.value);
    };

    async function queryAPI(event) {
        event.preventDefault();
        try {
            let queryURL = 'https://api.spotify.com/v1/search';
            let qString = `?q=${encodeURIComponent(value)}`;
            let type = '&type=track';
            let limit = '&limit=10';
            let fullQueryURL = `${queryURL}${qString}${type}${limit}`;

            const currentURL = window.location.href;
            const searchParameters = new URLSearchParams(currentURL);
            const accessToken = searchParameters.get(`${process.env.REACT_APP_REDIRECT_URI}/#access_token`);

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
            <SearchButton />
        </form>
    )
};

export default SearchBar;