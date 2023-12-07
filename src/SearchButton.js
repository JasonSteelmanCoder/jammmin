import React from 'react';

function SearchButton() {
    return (
        <button 
            type='submit' 
            formMethod='GET' 
            formAction='./mockResponse.js'
        >
            Search
        </button>
    );
};

export default SearchButton;