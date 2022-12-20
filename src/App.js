import React, { useState } from 'react';
import { Header } from './components/Header';
import { Countries } from './features/countries/coutnries page/Countries.js';
import { Country } from './features/countries/country page/Country.js';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div className={`App ${theme}`}>
      <header className='header element'>
        <Header theme={theme} setTheme={setTheme} />
      </header>

        <Country theme={theme}/>


    </div>
  );
}

export default App;
