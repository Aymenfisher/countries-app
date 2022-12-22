import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadAllCountries = createAsyncThunk(
    'countries/loadAllCountries',
    async () => {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const json = await response.json();
        const countriesFiltered = {}
        json.map(country =>
            countriesFiltered[country.name.common] = {
                name: country.name.common,
                capital: country.capital !== undefined ? country.capital : [],
                region: country.region,
                population: country.population,
                flag: country.flags.svg !== undefined ? country.flags.svg : '',
                code: country.cioc !== undefined ?  country.cioc : country.ccn3
            }

        )
        return countriesFiltered
    }
)



const countries = createSlice({
    name: 'countries',
    initialState: {
        countries: {},
        isLoadingCountries: true,
        hasErrorCountries: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                loadAllCountries.pending, (state) => {
                    state.isLoadingCountries = true;
                    state.hasErrorCountries = false;
                }
            )
            .addCase(
                loadAllCountries.fulfilled, (state, action) => {
                    state.countries = action.payload;
                    state.isLoadingCountries = false;
                    state.hasErrorCountries = false;
                }
            )
            .addCase(
                loadAllCountries.rejected, (state) => {
                    state.isLoadingCountries = false;
                    state.hasErrorCountries = true;
                }
            )
    }
})


// selectors
export const selectAllCountries = state => Object.values(state.countries.countries);



export const isLoadingCountries = state => state.countries.isLoadingCountries
export const hasErrorCountries = state => state.countries.hasErrorCountries

export default countries.reducer