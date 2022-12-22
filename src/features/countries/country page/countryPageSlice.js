import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const loadCountry = createAsyncThunk('country/loadCountry',
    async (countryCode) => {
        
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
        const json = await response.json();
        const countryObj = json[0]

        const filteredCountryData = {
            name: countryObj.name.common,
            capital: countryObj.capital !== undefined ? countryObj.capital : [],
            topLevelDomain: countryObj.tld[0] !== undefined ? countryObj.tld[0] : '',
            region: countryObj.region !== undefined ? countryObj.region : '',
            subregion: countryObj.subregion !== undefined ?  countryObj.subregion:'',
            population: countryObj.population,
            nativeName: countryObj.name.nativeName ? Object.values(countryObj.name.nativeName)[0].official :[],
            currencies: countryObj.currencies ? Object.values(countryObj.currencies).map(currency => currency.name) :[],
            languages: countryObj.languages ? Object.values(countryObj.languages) :[],
            flag: countryObj.flags.svg,
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