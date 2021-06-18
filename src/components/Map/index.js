import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import './style.css';
import LocationMarker from '../LocationMarker';
import LocationMarker2 from '../LocationMarker2';
import LocationInfo from '../LocationInfo';

const Map = ({ eventData, center, zoom}) => {

    const [locationInfoData, setLocationInfoData] = useState(null)

    const markers = eventData.map(ev => {
        if(ev.value >= 5) {
            return <LocationMarker lat={ev.coordinates.latitude} lng={ev.coordinates.longitude} onClick={() => setLocationInfoData({ location: ev.location })} />
        }
        return null
    })

    const markers2 = eventData.map(ev => {
        if(ev.value <= 5) {
            return <LocationMarker2 lat={ev.coordinates.latitude} lng={ev.coordinates.longitude} onClick={() => setLocationInfoData({ location: ev.location })} />
        }
        return null
    })

    return (
        <div className="map">
            {locationInfoData && <LocationInfo info={locationInfoData} />}
            <GoogleMapReact 
                bootstrapURLKeys={{ key: 'AIzaSyA28pB-AOOJJyIJltg74mura6CBk4h2Uc8' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
                {markers2}
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 39.0156,
        lng: -94.5655
    },
    zoom: 5
}

export default Map
