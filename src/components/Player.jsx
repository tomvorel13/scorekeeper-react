import React, { Component } from "react";
import Counter from "./Counter";

class Player extends Component {
  render() {
    return (
      <div className="player">
        <div className="player-name">
          <a className="remove-player" onClick={this.props.onRemove}>
            X
          </a>
          {this.props.name}
        </div>
        <div className="player-score">
          <Counter
            score={this.props.score}
            onChange={this.props.onScoreChange}
          />
        </div>
      </div>
    );
  }
}

export default Player;
