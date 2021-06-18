import React from 'react'
import './style.css'

const LocationInfo = ({info}) => {
    return (
        <div className="locationInfo">
            <h2>Location Info</h2>
            <ul>
                <li>Location: <strong></strong>{info.location}</li>
            </ul>
        </div>
    )
}

export default LocationInfo
