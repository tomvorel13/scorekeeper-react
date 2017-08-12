import React, { Component } from "react";
import Header from "./components/Header";
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: this.props.initialPlayers
    };
  }

  onScoreChange(index, delta) {
    console.log("onScoreChange", index, delta);
    this.state.players[index].score += delta;
    this.setState(this.state);
  }

  onPlayerAdd(name) {
    this.state.players.push({
      name: name,
      score: 0
    });
    this.setState(this.state);
  }

  onRemovePlayer(index) {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  }

  render() {
    return (
      <div className="application">
        <Header title={this.props.title} players={this.state.players} />

        <div className="players">
          {this.state.players.map((player, index) => {
            return (
              <Player
                onScoreChange={function(delta) {
                  this.onScoreChange(index, delta);
                }.bind(this)}
                onRemove={() => {
                  this.onRemovePlayer(index);
                }}
                key={player.name}
                name={player.name}
                score={player.score}
              />
            );
          })}
        </div>
        <AddPlayerForm onAdd={this.onPlayerAdd.bind(this)} />
      </div>
    );
  }
}

App.defaultProps = {
  title: "Scoreboard"
};

export default App;
