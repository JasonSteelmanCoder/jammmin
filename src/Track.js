import React from 'react';

function Track({ result, artist, album }) {
    return (
        <>
            <h3>{result}</h3>
            <span>{artist}: </span>
            <span>{album}</span>
        </>
    )
};

export default Track;