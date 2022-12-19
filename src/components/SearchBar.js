import React from 'react';
import searchIconDark from '../icons/search-dark.svg'
import searchIconLight from '../icons/search-light.svg'

export const SearchBar = ({theme}) =>{

    return(
        <form className='search-form element'>
            <img id='search-icon' src={theme === 'light' ? searchIconLight : searchIconDark} alt='search-icon'></img>
            <input type='text' id='search-input' placeholder='Search for a country...'></input>
        </form>
    )
}