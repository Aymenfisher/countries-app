import React from 'react';
import { CountryCard } from './CountryCard';
import { SearchBar } from '../../../components/SearchBar';
import { FiltersDropdown } from '../../../components/FiltersDropdown';
import './countriesPageStyle.css';

export const Countries = ({theme}) => {

    return (
        <main className='main-countries'>
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
        </main>

    )
}