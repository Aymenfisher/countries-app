import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const loadCountry = createAsyncThunk('country/loadCountry',
    async (countryName) => {
        
        const response = await fetch(`https://restcountries.com/v2/name/${countryName}`);
        const json = await response.json();
        const countryObj = json[0]

        const filteredCountryData = {
            name: countryObj.name,
            capital: countryObj.capital,
            topLevelDomain: countryObj.topLevelDomain[0],
            region: countryObj.region,
            subregion: countryObj.subregion,
            population: countryObj.population,
            nativeName: countryObj.nativeName,
            currencies: countryObj.currencies.map(currency => currency.name),
            languages: countryObj.languages.map(language => language.name),
            flag: countryObj.flag,
            borders: countryObj.borders ? countryObj.borders : []
        }
        return filteredCountryData
        
    }
)

const country = createSlice({
    name:'country',
    initialState:{
        countryInfos:{},
        isLoadingCountry:true,
        hasErrorCountry: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCountry.pending,
                (state) =>{
                    state.isLoadingCountry = true;
                    state.hasErrorCountry = false;
                }
                )
            .addCase(loadCountry.fulfilled,(state,action) =>{
                state.countryInfos = action.payload
                state.isLoadingCountry = false;
                state.hasErrorCountry = false;
            })
            .addCase(loadCountry.rejected,(state,action) =>{
                state.isLoadingCountry = false;
                state.hasErrorCountry = true;
            })
    }
})

export const selectCountry = state => state.country.countryInfos;
export const isLoadingCountry = state => state.country.isLoadingCountry;
export const hasErrorCountry = state => state.country.hasErrorCountry;

export default country.reducer;