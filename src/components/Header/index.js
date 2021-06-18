import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.css';


export default function Header() {
    return (
        <div className="heading">
            <Row>
                <h1 className="title">Air Quality in the US</h1>
            </Row>
            <Row>
                <p>Below you will find air quality of locations greater than or equal to 5 µg/m³</p>
            </Row>
        </div>

    )
};