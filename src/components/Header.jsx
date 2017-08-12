import React, { Component } from "react";
import Stopwatch from "./Stopwatch";
import Stats from "./Stats";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Stats players={this.props.players} />
        <h1>
          {this.props.title}
        </h1>
        <Stopwatch />
      </div>
    );
  }
}

export default Header;
