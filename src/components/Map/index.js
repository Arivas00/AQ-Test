import React from 'react'
import GoogleMapReact from 'google-map-react'
import './style.css'
import LocationMarker from '../LocationMarker'

const Map = ({ center, zoom}) => {
    return (
        <div className="map">
            <GoogleMapReact 
                bootstrapURLKeys={{ key: 'AIzaSyA28pB-AOOJJyIJltg74mura6CBk4h2Uc8' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                <LocationMarker lat={center.lat} lng={center.lng} />
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
