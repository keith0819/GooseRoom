import React, { Component } from 'react'
// import axios from 'axios';
import { withRouter } from 'react-router'
import { compose, withProps,withHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class MyMapComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      makers: [],
      posts: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/posts')
    .then((response) => {
        console.log(response)
        this.setState({posts: response.data})
    })
    .catch((data) => {
        console.log(data)
    })
    
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
          // {this.state.posts.map((data) => {
          //   return(
          //     <MyMapComponent data={ data } key={ data.id }/>
          //   )
          // })}
          // this.props.history.push(`/detail/${this.props.data.id}`)
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
