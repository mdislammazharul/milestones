import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Hello From Countries: {countries.length}</h1>
            {/* data needs to be sent into Country.js file by Props */}
            <div className="countries-container">
                {
                    countries.map(country => <Country
                        key={country.name} //country.name is unique for every country. so it is a key 
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;