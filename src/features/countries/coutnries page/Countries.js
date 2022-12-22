import React, { useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import { CountryCard } from './CountryCard';
import { SearchBar } from '../../../components/SearchBar';
import { FiltersDropdown } from '../../../components/FiltersDropdown';
import { Loading } from '../../../components/Loading';
import { ErrorPage } from '../../../components/ErrorPage';
import { useSelector } from 'react-redux';
import { selectAllCountries,   isLoadingCountries, hasErrorCountries } from './countriesSlice';

import './countriesPageStyle.css';

export const Countries = ({ theme }) => {


    const [searchTerm, setSearchTerm] = useSearchParams({name:''});
    const [regionFilter, setRegionFilter] = useState('all'); // 'all' , 'africa' , 'america' , 'asia' , 'oceania' , 'europe'

    const allCountries = useSelector(selectAllCountries);
    const countriesByRegion = allCountries.filter(country => country.region.toLocaleLowerCase() === regionFilter)
    

    const isLoading = useSelector(isLoadingCountries);
    const hasError = useSelector(hasErrorCountries);



    const countriesToDisplay = (regionFilter ==='all' ? allCountries : countriesByRegion).filter((country) =>{
        return country.name.toLowerCase().includes(searchTerm.get('name').toLocaleLowerCase());
    })

    return (
        <main className='main-countries'>
            <div className='search-and-filters'>
                <SearchBar setSearchTerm={setSearchTerm} theme={theme} />
                <FiltersDropdown theme={theme} regionFilter={regionFilter} setRegionFilter={setRegionFilter} />
            </div>
            <div className='cards'>
                {isLoading ? <Loading theme={theme}/> : hasError ? <ErrorPage/> : countriesToDisplay.map((country) =>{
                    return <CountryCard countryInfos={country} key={country.name}/>
                })}
            </div>
        </main>

    )
}