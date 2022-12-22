import React, { useState,useEffect } from 'react';
import { Header } from './components/Header';
import { Navigate, Route,Routes } from 'react-router-dom';
import { Countries } from './features/countries/coutnries page/Countries.js';
import { Country } from './features/countries/country page/Country.js';
import NotFound from './components/NotFound';
import { loadAllCountries } from './features/countries/coutnries page/countriesSlice';
import { useDispatch } from 'react-redux';

function App() {
  const [theme, setTheme] = useState('light');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllCountries())
}, [])

  return (
    <div className={`App ${theme}`}>
      <header className='header element'>
        <Header theme={theme} setTheme={setTheme} />
      </header>
      <Routes>
        <Route path='/' element={<Navigate to='/countries'></Navigate>}/>
        <Route path='/countries' >
          <Route index element={<Countries theme={theme}></Countries>}></Route>
          <Route path=':name' element={<Country theme={theme}/>}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>


    </div>
  );
}

export default App;
