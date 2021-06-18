import React from 'react';
import spinner from './spinner.gif'
import './style.css'

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="Loading" />
            <h1>Fetching Data</h1>
        </div>
    )
}

export default Loader
