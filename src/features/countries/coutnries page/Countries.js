import React, { useState} from 'react';
import { CountryCard } from './CountryCard';
import { SearchBar } from '../../../components/SearchBar';
import { FiltersDropdown } from '../../../components/FiltersDropdown';
import { Loading } from '../../../components/Loading';
import { ErrorPage } from '../../../components/ErrorPage';
import { useSelector } from 'react-redux';
import { selectAllCountries, selectCountriesByRegion,  isLoadingCountries, hasErrorCountries } from './countriesSlice';

import './countriesPageStyle.css';

export const Countries = ({ theme }) => {


    const [searchTerm, setSearchTerm] = useState('');

    const allCountries = useSelector(selectAllCountries);
    const counttriesByRegion = useSelector(selectCountriesByRegion);
    const isLoading = useSelector(isLoadingCountries);
    const hasError = useSelector(hasErrorCountries);





    if(isLoading){
        return <Loading theme={theme}/>
    }



    return (
        <main className='main-countries'>
            <div className='search-and-filters'>
                <SearchBar setSearchTerm={setSearchTerm} theme={theme} />
                <FiltersDropdown theme={theme} />
            </div>
            <div className='cards'>
                {isLoading ? <Loading theme={theme}/> : hasError ? <ErrorPage/> : allCountries.map((country) =>{
                    return <CountryCard countryInfos={country} key={country.name}/>
                })}
            </div>
        </main>

    )
}