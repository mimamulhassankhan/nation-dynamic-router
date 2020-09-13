import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import SingleCountry from '../SingleCountry/SingleCountry';

const Country = () => {
    let {countryName} = useParams();
    const [singleCountry, setSingleCountry] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => setSingleCountry(data))
        .catch(er => console.log(er));
    }, []);
    
    return (
        <div>
            {
                singleCountry.map(country => {return(
                    <Card className="shadow m-auto" style={{ width: '50rem' }}>
                    <Card.Img height={350} variant="top" src={country.flag} />
                    <Card.Body>
                        <div className="border-bottom">
                            <Card.Title>{country.name}</Card.Title>
                            <Card.Subtitle>{country.alpha3Code}</Card.Subtitle>
                        </div>
                        <br/>
                        <div className="d-flex justify-content-between border-bottom">
                            <div>
                                <p><strong>Capital: <span className="text-warning">{country.capital}</span></strong></p>
                                <p><strong>Area: <span className="text-danger">{country.area} sq. KM</span></strong></p>
                                <p><strong>Population: <span className="text-info">{country.population} approx.</span></strong></p>
                            </div>
                            <div className="text-left">
                                <p><strong>Sub-Region: <span className="text-warning">{country.subregion}</span></strong></p>
                                <p><strong>Region: <span className="text-danger">{country.region} </span></strong></p>
        
                            </div>
                        </div>
                    </Card.Body>
                </Card> 
                )}
                
                )
            }
            { /* <Card className="shadow" style={{ width: '50rem' }}>
            <Card.Img height={200} variant="top" src={flag} />
            <Card.Body>
                <div className="border-bottom">
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>{alpha3Code}</Card.Subtitle>
                </div>
                <br/>
                <div className="d-flex justify-content-between border-bottom">
                    <div>
                        <p><strong>Capital: <span className="text-warning">{capital}</span></strong></p>
                        <p><strong>Area: <span className="text-danger">{area} sq. KM</span></strong></p>
                        <p><strong>Population: <span className="text-info">{population} approx.</span></strong></p>
                    </div>
                    <div className="text-left">
                        <p><strong>Sub-Region: <span className="text-warning">{subregion}</span></strong></p>
                        <p><strong>Region: <span className="text-danger">{region} </span></strong></p>

                    </div>
                </div>
            </Card.Body>
            </Card>    */}
        </div>
    );
};

export default Country;