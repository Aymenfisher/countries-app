import React, {  useState } from "react";
import arrowDownDark from '../icons/arrow-down-dark.svg';
import arrowDownLight from '../icons/arrow-down-light.svg';

export const FiltersDropdown = ({ theme,regionFilter,setRegionFilter }) => {
    const [listDisplay, setListDisplay] = useState('hidden');


    const handleToggleVisibility = () => {
        listDisplay === 'visible' ? setListDisplay('hidden') : setListDisplay('visible');
    }

    const handleSelectFilter = (e) => {
        setRegionFilter(e.target.value.toLowerCase());
        handleToggleVisibility();
    }



    return (
        <div className='filters-dropdown' aria-label="select" >
            <div className="select-header element" onClick={handleToggleVisibility} >
                <p>Filter by Region</p>
                <img id='arrow-down' src={theme === 'light' ? arrowDownLight : arrowDownDark} alt='dropdown-arrow'></img>
            </div>
            <div className={`select-body element ${listDisplay}`}>
                <button value='all' className={`select-option ${regionFilter === 'all' ? ' active-filter' : ''}`} onClick={handleSelectFilter}>All</button>
                <button value='africa' className={`select-option ${regionFilter === 'africa' ? ' active-filter' : ''}`} onClick={handleSelectFilter}>Africa</button>
                <button value='americas' className={`select-option ${regionFilter === 'americas' ? ' active-filter' : ''}`} onClick={handleSelectFilter}>Americas</button>
                <button value='asia' className={`select-option ${regionFilter === 'asia' ? ' active-filter' : ''}`} onClick={handleSelectFilter}>Asia</button>
                <button value='europe' className={`select-option ${regionFilter === 'europe' ? ' active-filter' : ''}`} onClick={handleSelectFilter}>Europe</button>
                <button value='oceania' className={`select-option ${regionFilter === 'oceania' ? ' active-filter' : ''}`} onClick={handleSelectFilter}>Oceania</button>
            </div>
        </div>
    )
}