import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import SingleCountry from '../SingleCountry/SingleCountry';

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect( () => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
        .catch(er => console.log(er));
    },[])

    return (
        <div>
            <CardGroup className="d-flex flex-wrap align-items-center">
                {
                    countries.map(country => <SingleCountry key={country.alpha3Code} country={country}></SingleCountry>)
                }
            </CardGroup>
        </div>
        
    );
};

export default Home;