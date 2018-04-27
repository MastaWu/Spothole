import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const Map = props => {
  console.log(props.coordinates);
  return (
    <GoogleMap defaultZoom={8} defaultCenter={props.center}>
      {props.coordinates.map((coordinate, index) => (
        <Marker
          key={index}
          position={{
            lat: coordinate.lat,
            lng: coordinate.lng
          }}
        />
      ))}
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(Map));
