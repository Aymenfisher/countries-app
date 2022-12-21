import React from 'react';
import {Link} from 'react-router-dom';

export const NoResults = () => {

    return (
        <div style={{ width: '100vw', textAlign: 'center' }}>
            <h1>{'(>_<)'}</h1>
            <p>No Results Found.</p>
            <Link to="/">Go Home</Link>
        </div>
    )
}