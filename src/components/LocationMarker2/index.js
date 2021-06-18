import React from 'react';
import { Icon } from '@iconify/react';
import locationIcon from "@iconify/icons-mdi/weather-windy";
import './style.css'

const LocationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="location-icon2"/>
        </div>
    )
}

export default LocationMarker