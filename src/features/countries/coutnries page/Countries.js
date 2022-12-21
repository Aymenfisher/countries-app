import React, { useState, useEffect } from 'react';
import { CountryCard } from './CountryCard';
import { SearchBar } from '../../../components/SearchBar';
import { FiltersDropdown } from '../../../components/FiltersDropdown';
import {Loading} from '../../../components/Loading'
import { useSelector, useDispatch } from 'react-redux';
import { selectAllCountries, selectCountriesByRegion, loadAllCountries, isLoadingCountries } from './countriesSlice';

import './countriesPageStyle.css';

export const Countries = ({ theme }) => {

    const [searchTerm, setSearchTerm] = useState('');

    const dispatch = useDispatch();
    const allCountries = useSelector(selectAllCountries);
    const counttriesByRegion = useSelector(selectCountriesByRegion);
    const isLoading = useSelector(isLoadingCountries);

    
    useEffect(() => {
        dispatch(loadAllCountries())
    }, [])

    return (
        <main className='main-countries'>
            <div className='search-and-filters'>
                <SearchBar setSearchTerm={setSearchTerm} theme={theme} />
                <FiltersDropdown theme={theme} />
            </div>
            <div className='cards'>
                {isLoading ?<Loading theme={theme}/> :
                allCountries.map((country) => {
                    return <CountryCard countryinfos={country} key={country.name} />
                })
                }
            </div>
        </main>

    )
}