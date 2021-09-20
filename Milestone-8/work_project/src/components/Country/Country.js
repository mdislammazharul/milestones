import React from 'react';
import './Country.css'

const Country = (props) => {
    const { flag, name, capital, population } = props.country;
    return (
        <div className="country">
            <img src={flag} alt="" />
            <h4>Country Name: {name}</h4>
            <p>Country Capital: {capital}</p>
            <p>Country Population: {population}</p>
        </div>
    );
};

export default Country;