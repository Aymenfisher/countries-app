import { configureStore } from '@reduxjs/toolkit';
import countries from '../features/countries/coutnries page/countriesSlice.js'
import country from '../features/countries/country page/countryPageSlice.js'

export const store = configureStore({
  reducer: {
    countries: countries,
    country: country
  },
});
