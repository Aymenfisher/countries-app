import React, { useState } from 'react';
import { FiltersDropdown } from './components/FiltersDropdown';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { Countries } from './features/countries/Countries';
import { Country } from './features/countries/Country.js';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div className={`App ${theme}`}>
      <header className='header element'>
        <Header theme={theme} setTheme={setTheme} />
      </header>
      <main className='main-content'>

        <Country theme={theme}/>

      </main>

    </div>
  );
}

export default App;
