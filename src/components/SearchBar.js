import React from 'react';
import searchIconDark from '../icons/search-dark.svg'
import searchIconLight from '../icons/search-light.svg'

export const SearchBar = ({theme,setSearchTerm}) =>{

    const handleSearchTermChange = (e) =>{
        setSearchTerm({name:e.target.value})
    }

    return(
        <form className='search-form element' onSubmit={(e) => {e.preventDefault()}}>
            <img id='search-icon' src={theme === 'light' ? searchIconLight : searchIconDark} alt='search-icon'></img>
            <input type='text' id='search-input'  placeholder='Search for a country...' onChange={handleSearchTermChange}></input>
        </form>
    )
}