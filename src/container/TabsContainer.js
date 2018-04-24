import React, { Component } from "react";
import Tabs from "material-ui/Tabs/Tabs";
import Tab from "material-ui/Tabs/Tab";
import { Link } from "react-router-dom";

class TabsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index) {
    this.setState({
      tab: index
    });
  }

  render() {
    return (
      <Tabs align="left" value={this.state.tab} onChange={this.handleChange}>
        <Tab label="Dashboard" component={Link} to="/" />
        <Tab label="Map" component={Link} to="/map" />
      </Tabs>
    );
  }
}

export default TabsContainer;
