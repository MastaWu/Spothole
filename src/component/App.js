import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from "../container/NavigationBar";
import Dashboard from "./Dashboard";
// import MapContainer from "./container/MapContainer";

class App extends Component {
  render() {
    const styles = {
      container: {
        height: "100%",
        margin: "20px 20px 20px 15px"
      }
    };
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <div style={styles.container}>
            <Route exact path="/" component={Dashboard} />
            <Route path="/map" component={Map} />
          </div>
        </div>
      </Router>
    );
  }
}

const Map = () => <div>Testing map</div>;

export default App;
