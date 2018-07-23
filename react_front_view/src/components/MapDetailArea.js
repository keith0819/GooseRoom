import React from 'react'
import '../styles/common.scss'
import MapDetail from './MapDetail';

const MapDetailArea = () => {
  return (
    <div className="map-wrapper">
      <p className="address">207th Street at 53a Avenue</p>
      <MapDetail isMarkerShown/>
    </div>
  )
}

export default MapDetailArea