import React from 'react';
import { CountryCard } from './CountryCard';
import { SearchBar } from '../../components/SearchBar';
import { FiltersDropdown } from '../../components/FiltersDropdown';

export const Countries = ({theme}) => {

    return (
        <>
            <div className='search-and-filters'>
                <SearchBar theme={theme} />
                <FiltersDropdown theme={theme} />
            </div>
            <div className='cards'>
                <CountryCard />
                <CountryCard />
                <CountryCard />
                <CountryCard />
                <CountryCard />
            </div>
        </>

    )
}