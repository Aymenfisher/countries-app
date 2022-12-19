import React from "react";
import { Link } from "react-router-dom";
import darkBackArrow from '../../icons/arrow-back-dark.svg';
import lightBackArrow from '../../icons/arrow-back-light.svg';


export const Country = ({ theme }) => {
    return (
        <div className="country-page">
            <div className="back-link">
                <div><img alt="back-arrow" src={theme === 'dark' ? darkBackArrow : lightBackArrow}></img> <p>Back</p></div>
            </div>
            <main className="main-country">
                <img alt='country-flag' src='https://flagcdn.com/w320/ar.png'></img>
                <div className="country-infos-container">
                    <p className="country-name">Argentina</p>
                    <div className="country-infos-main">
                        <div className="infos-one">
                            <p className="native-name"><span className="info-title">Native Name: </span>198499984</p>
                            <p className="popolation"><span className="info-title">Population: </span>198499984</p>
                            <p className="popolation"><span className="info-title">Region: </span>198499984</p>
                            <p className="region"><span className="info-title">Sub Region: </span>198499984</p>
                            <p className="sub-region"><span className="info-title">Capital: </span>198499984</p>
                        </div>
                        <div className="infos-two">
                            <p className="top-level-domain"><span className="info-title">Top Level Domain: </span>198499984</p>
                            <p className="currencies"><span className="info-title">Currencies: </span>198499984</p>
                            <p className="languages"><span className="info-title">Languages: </span>198499984</p>
                        </div>
                    </div>
                    <div className="country-infos-aside">
                        <p className="info-title">Border Countries:</p>
                        <div className="border-countries">
                            <div className="country-link"><div to='#'>France</div></div>
                            <div className="country-link"><div to='#'>Germany</div></div>
                            <div className="country-link"><div to='#'>Netherlands</div></div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}