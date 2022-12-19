import React, { useRef, useState } from "react";
import arrowDownDark from '../icons/arrow-down-dark.svg';
import arrowDownLight from '../icons/arrow-down-light.svg';

export const FiltersDropdown = ({ theme }) => {
    const [listDisplay, setListDisplay] = useState('hidden');

    const currentFilter = useRef('All');

    const handleToggleVisibility = () => {
        listDisplay === 'visible' ? setListDisplay('hidden') : setListDisplay('visible');
    }

    const handleSelectFilter = (e) => {
        currentFilter.current = e.target.value;
        handleToggleVisibility();
    }



    return (
        <div className='filters-dropdown' >
            <div className="select-header element" onClick={handleToggleVisibility} >
                <p>Filter by Region</p>
                <img id='arrow-down' src={theme === 'light' ? arrowDownLight : arrowDownDark} alt='dropdown-arrow'></img>
            </div>
            <div className={`select-body element ${listDisplay}`}>
                <button value='All' className="select-option" onClick={handleSelectFilter}>All</button>
                <button value='Africa' className="select-option" onClick={handleSelectFilter}>Africa</button>
                <button value='America' className="select-option" onClick={handleSelectFilter}>America</button>
                <button value='Asia' className="select-option" onClick={handleSelectFilter}>Asia</button>
                <button value='Europe' className="select-option" onClick={handleSelectFilter}>Europe</button>
                <button value='Oceania' className="select-option" onClick={handleSelectFilter}>Oceania</button>
            </div>
        </div>
    )
}