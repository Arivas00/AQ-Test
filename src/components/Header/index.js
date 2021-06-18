import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.css';


export default function Header() {
    return (
        <div data-testid="header-1" className="heading">
            <Row>
                <h1 className="title">Air Quality in the US</h1>
            </Row>
        </div>

    )
};