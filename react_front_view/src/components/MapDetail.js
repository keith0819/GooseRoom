import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class MapDetail extends Component {
  render() {
    const Map = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDrEW2DrI424aSFLsW-QXQAHs_YCeNhYGQ",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
      }),
      withScriptjs,
      withGoogleMap
    )((props) => 
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 49.283, lng: -123.120 }}
      >
        <Marker 
          position={{ lat: 49.283, lng: -123.120 }} 
        />
      </GoogleMap>
    )
    return(
      <div>
        <Map
          loadingElement= {<div style={{ height: `100%` }} /> }
          containerElement={ <div style={{ height: `400px` }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
    )
  }
}

export default withRouter(MapDetail)