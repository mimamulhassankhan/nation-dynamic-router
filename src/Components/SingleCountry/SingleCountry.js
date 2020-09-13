import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import ModalComponent from '../ModalComponent/ModalComponent';

const SingleCountry = (props) => {
    let history = useHistory();
    const [modalShow, setModalShow] = useState(false);

    const clickHandler = (countryName) =>{
        history.push(`/country/${countryName}`);
    }

    const {flag, name, capital, alpha3Code, area, population, subregion, region} = props.country;
    
    return (
        <div className="m-auto">
            <ModalComponent data={props.country} show={modalShow} onHide={() => setModalShow(false)} />
            <Card className="shadow m-3 border bg-dark text-white" style={{ width: '35rem' }}>
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
                <div className="text-right mt-1">
                    <Link to={`/country/${name}`}>
                        <Button variant="primary">Go somewhere</Button>
                    </Link>
                    
                    <Button onClick={() => clickHandler(name)} className="ml-1" variant="secondary">Link1</Button>
                    <Button onClick={() => setModalShow(true)} className="ml-1" variant="danger">Modal Show</Button>
                    
                </div>
            </Card.Body>
            </Card>
        </div>
    );
};

export default SingleCountry;