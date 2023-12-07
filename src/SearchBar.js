import React, { useState } from 'react';
import SearchButton from './SearchButton';

function SearchBar({ handleNewResults }) {

    const [value, setValue] = useState('');

    function handleChange(event) {
        setValue(event.target.value);
    };

    return (
        <form onSubmit={handleNewResults}>
            <input 
                type="text"
                name="userInput" 
                value={value} 
                onChange={handleChange} 
            />
            <SearchButton />
        </form>
    )
};

export default SearchBar;