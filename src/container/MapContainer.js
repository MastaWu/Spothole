import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: {
        lat: 40,
        lng: -88
      }
    };
  }

  render() {
    return <div />;
  }
}

export default MapContainer;
// apiKey: "AIzaSyDD4EI3h7tgR3XSjrESEAlMEecRc6jGrzI"
