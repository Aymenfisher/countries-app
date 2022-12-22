import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import darkBackArrow from '../../../icons/arrow-back-dark.svg';
import lightBackArrow from '../../../icons/arrow-back-light.svg';
import homeLight from '../../../icons/home-light.svg';
import homeDark from '../../../icons/home-dark.svg';
import { loadCountry, selectCountry,isLoadingCountry,hasErrorCountry } from "./countryPageSlice";
import { useSelector, useDispatch } from 'react-redux';
import { Loading } from "../../../components/Loading";
import { ErrorPage } from "../../../components/ErrorPage";
import { NoResults } from "../../../components/NoResults";
import './countryPageStyle.css';


export const Country = ({ theme }) => {
    const {name} = useParams();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const countryInfos = useSelector(selectCountry);
    const isLoading = useSelector(isLoadingCountry);
    const hasError = useSelector(hasErrorCountry);

    useEffect(() =>{
        dispatch(loadCountry(name))
    },[navigate])

    if(isLoading){
        return <Loading theme={theme} />
    }
    if(hasError){
        return <ErrorPage/>
    }
    if(countryInfos === undefined){
        return <NoResults/>
    }





    return (
        <div className="country-page">
            <div className="navigations">
            <div onClick={() => navigate(-1)} className="icon-link element">
                <img alt="back-arrow" src={theme === 'dark' ? darkBackArrow : lightBackArrow}></img> <p id="back">Back</p>
            </div>
            <div onClick={() => navigate('/')} className="icon-link element">
                <img alt="home-icon" src={theme === 'dark' ? homeDark : homeLight}></img> <p id="home">Home</p>
            </div>
            </div>

            <main className="main-country">
                <img className="country-flag-image" alt='country-flag-img' src={countryInfos.flag}></img>
                <div className="country-infos-container">
                    <p className="name">{countryInfos.name}</p>
                    <div className="country-infos-main">
                        <div className="infos-one">
                            <p className="info native-name"><span className="info-title">Native Name: </span>{countryInfos.nativeName}</p>
                            <p className="info population"><span className="info-title">Population: </span>{countryInfos.population}</p>
                            <p className="info popolation"><span className="info-title">Region: </span>{countryInfos.region}</p>
                            <p className="info region"><span className="info-title">Sub Region: </span>{countryInfos.subregion}</p>
                            <p className="info sub-region"><span className="info-title">Capital: </span>{countryInfos.capital}</p>
                        </div>
                        <div className="infos-two">
                            <p className="info top-level-domain"><span className="info-title">Top Level Domain: </span>{countryInfos.topLevelDomain}</p>
                            <p className="info currencies"><span className="info-title">Currencies: </span>{countryInfos.currencies.join(', ')}</p>
                            <p className="info languages"><span className="info-title">Languages: </span>{countryInfos.languages.join(', ')}</p>
                        </div>
                    </div>
                    <div className="country-infos-aside">
                        <p className="info-title">Border Countries:</p>
                        <div className="border-countries">
                            {
                                countryInfos.borders.map((cioc) =>{
                                    return <Link to={`/countries/${cioc}`} className="country-link element" key={cioc}><div to='#'><p>{cioc}</p></div></Link>
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}