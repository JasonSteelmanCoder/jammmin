import React from 'react';

function SearchButton({ value }) {

    return (
        <button 
            type='submit'
            data-testid="SearchButton"
            disabled={!value}
        >
            Search
        </button>
    );
};

export default SearchButton;