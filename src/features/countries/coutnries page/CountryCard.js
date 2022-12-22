import React from "react";
import { Link } from "react-router-dom";

export const CountryCard = ({countryInfos}) => {

    return(
        <Link to={`/countries/${countryInfos.code}`} className="country-card element">
            <div  className="country-flag" style={{background:`url(${countryInfos.flag}) no-repeat`,backgroundSize:'100% 100%'}}></div>
            <div className="card-description">
                <p className="country-name">{countryInfos.name}</p>
                <div className="country-infos">
                    <p className="population"><span className="info-title">Population: </span>{countryInfos.population}</p>
                    <p className="region"><span className="info-title">Region: </span>{countryInfos.region}</p>
                    <p className="capital"><span className="info-title">Capital: </span>{countryInfos.capital.join(', ')}</p>
                </div>
            </div>
        </Link>
    )
}