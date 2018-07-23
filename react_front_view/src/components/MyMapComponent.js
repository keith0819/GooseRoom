import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { compose, withProps,withHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class MyMapComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      makers: [],
    }
  }

  componentDidMount() {
    this.setState({
      markers: [
        {lat: 49.283, lng: -123.120},
        {lat: 49.281, lng: -123.120}
       ]
    })
  }

  render() {
    const Map = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDrEW2DrI424aSFLsW-QXQAHs_YCeNhYGQ",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
      }),
      withHandlers({
        onMarkerClick: () => () => {
          this.props.history.push('/detail')
        },
      }),
      withScriptjs,
      withGoogleMap
    )((props) => 
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 49.220, lng: -123.050 }}
      >
        {this.state.markers.map((marker, i) => {
          return (
            <Marker 
            key={i}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={props.onMarkerClick} 
            />
          )
        })}
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

export default withRouter(MyMapComponent)
