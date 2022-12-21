import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadAllCountries = createAsyncThunk(
    'countries/loadAllCountries',
    async () => {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const json = await response.json();
        console.log(response)
        const countriesFiltered = {}
        json.map(country =>
            countriesFiltered[country.name] = {
                name: country.name,
                capital: country.capital,
                region: country.region,
                population: country.population,
                flag: country.flag,
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
        hasError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                loadAllCountries.pending, (state) => {
                    state.isLoadingCountries = true;
                    state.hasError = false;
                }
            )
            .addCase(
                loadAllCountries.fulfilled, (state, action) => {
                    state.hasError = false;
                    state.countries = action.payload;
                    state.isLoadingCountries = false;
                }
            )
            .addCase(
                loadAllCountries.rejected, (state) => {
                    state.isLoadingCountries = false;
                    state.hasError = true;
                }
            )
    }
})

//action makers




// selectors
export const selectAllCountries = state => Object.values(state.countries)

export const selectCountriesByRegion = (state, region) => {
    return Object.values(state.countries).filter(country => country.region === region)
}

export const isLoadingCountries = state => state.countries.isLoadingCountries

export default countries.reducer