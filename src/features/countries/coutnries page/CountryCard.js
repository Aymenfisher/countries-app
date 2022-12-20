import React from "react";


export const CountryCard = () => {

    return(
        <div className="country-card element">
            <img  alt='country-flag' className="country-flag" src='https://flagcdn.com/ar.svg'></img>
            <div className="card-description">
                <p className="country-name">Argentina</p>
                <div className="country-infos">
                    <p className="popolation"><span className="info-title">Population: </span>198499984</p>
                    <p className="region"><span className="info-title">Region: </span>Americas</p>
                    <p className="capital"><span className="info-title">Capital: </span>Buones Aeres</p>
                </div>
            </div>
        </div>
    )
}