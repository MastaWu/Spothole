import React, { Component } from "react";
import Map from "../component/Map";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: [
        {
          lat: 38.8048,
          lng: -77.0469
        }
      ],
      center: {
        lat: 38.8048,
        lng: -77.0469
      }
    };
  }

  render() {
    return (
      <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        coordinates={this.state.coordinates}
        center={this.state.center}
      />
    );
  }
}

export default MapContainer;
// apiKey: "AIzaSyDD4EI3h7tgR3XSjrESEAlMEecRc6jGrzI"
