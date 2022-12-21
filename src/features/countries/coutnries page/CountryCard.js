import React from "react";


export const CountryCard = ({countryInfos}) => {

    return(
        <div className="country-card element">
            <img  alt='country-flag' className="country-flag" src={countryInfos.flag}></img>
            <div className="card-description">
                <p className="country-name">{countryInfos.name}</p>
                <div className="country-infos">
                    <p className="population"><span className="info-title">Population: </span>countryinfos.population</p>
                    <p className="region"><span className="info-title">Region: </span>countryinfos.region</p>
                    <p className="capital"><span className="info-title">Capital: </span>countryinfos.capital</p>
                </div>
            </div>
        </div>
    )
}