import React from "react";
import { Link } from "react-router-dom";
import darkBackArrow from '../../../icons/arrow-back-dark.svg';
import lightBackArrow from '../../../icons/arrow-back-light.svg';
import './countryPageStyle.css';


export const Country = ({ theme }) => {
    return (
        <div className="country-page">
            <div className="back-link element">
                <img alt="back-arrow" src={theme === 'dark' ? darkBackArrow : lightBackArrow}></img> <p>Back</p>
            </div>
            <main className="main-country">
                <img className="country-flag-image" alt='country-flag-img' src='https://flagcdn.com/ar.svg'></img>
                <div className="country-infos-container">
                    <p className="name">Argentina</p>
                    <div className="country-infos-main">
                        <div className="infos-one">
                            <p className="info native-name"><span className="info-title">Native Name: </span>198499984</p>
                            <p className="info popolation"><span className="info-title">Population: </span>198499984</p>
                            <p className="info popolation"><span className="info-title">Region: </span>198499984</p>
                            <p className="info region"><span className="info-title">Sub Region: </span>198499984</p>
                            <p className="info sub-region"><span className="info-title">Capital: </span>198499984</p>
                        </div>
                        <div className="infos-two">
                            <p className="info top-level-domain"><span className="info-title">Top Level Domain: </span>198499984</p>
                            <p className="info currencies"><span className="info-title">Currencies: </span>198499984</p>
                            <p className="info languages"><span className="info-title">Languages: </span>198499984</p>
                        </div>
                    </div>
                    <div className="country-infos-aside">
                        <p className="info-title">Border Countries:</p>
                        <div className="border-countries">
                            <div className="country-link element"><div to='#'><p>France</p></div></div>
                            <div className="country-link element"><div to='#'><p>Germany</p></div></div>
                            <div className="country-link element"><div to='#'><p>Netherlands</p></div></div>
                            <div className="country-link element"><div to='#'><p>Netherlands</p></div></div>
                            <div className="country-link element"><div to='#'><p>Netherlands</p></div></div>
                            <div className="country-link element"><div to='#'><p>Netherlands</p></div></div>
                            <div className="country-link element"><div to='#'><p>Netherlands</p></div></div>
                            <div className="country-link element"><div to='#'><p>Netherlands</p></div></div>
                            <div className="country-link element"><div to='#'><p>Netherlands</p></div></div>
                            <div className="country-link element"><div to='#'><p>Netherlands</p></div></div>
                            <div className="country-link element"><div to='#'><p>Netherlands</p></div></div>
                            <div className="country-link element"><div to='#'><p>Netherlands</p></div></div>
                            <div className="country-link element"><div to='#'><p>Netherlands</p></div></div>
                            <div className="country-link element"><div to='#'><p>Netherlands</p></div></div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}