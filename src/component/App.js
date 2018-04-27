import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import AddIcon from "@material-ui/icons/Add";
import Dashboard from "./Dashboard";
import AddHoleModal from "./AddHoleModal";
import NavigationBar from "../container/NavigationBar";
import MapContainer from "../container/MapContainer";

import "./App.css";

const styles = theme => ({
  icon: {
    position: "absolute",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    const listOfHoles = [];
    for (var i = 0; i < 45; i++) {
      listOfHoles.push({
        size: "Large",
        lat: 12,
        lng: 15,
        description: "Very big"
      });
    }

    this.state = {
      holes: listOfHoles,
      open: false
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen = () => {
    this.setState({ ...this.state, open: true });
  };

  handleClose = () => {
    this.setState({ ...this.state, open: false });
  };

  render() {
    const styles = {
      container: { margin: "20px" }
    };

    const { classes, theme } = this.props;
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <div style={styles.container}>
            <Route
              exact
              path="/"
              render={() => <Dashboard holes={this.state.holes} />}
            />
            <Route path="/map" component={MapContainer} />
          </div>
          <AddHoleModal open={this.state.open} handleClose={this.handleClose} />
          <Button
            variant="fab"
            className={classes.icon}
            color="secondary"
            onClick={this.handleOpen}
          >
            <AddIcon />
          </Button>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
