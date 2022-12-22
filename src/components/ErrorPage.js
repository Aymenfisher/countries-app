import React from 'react';
import {Link} from 'react-router-dom';

export const ErrorPage = () => {

    return (
        <div style={{ width: '100vw', textAlign: 'center' }}>
            <h1>{'(>_<)'}</h1>
            <p>There was an error loading content, Please try again in a while.</p>
            <Link to="/">Go Home</Link>
        </div>
    )
}