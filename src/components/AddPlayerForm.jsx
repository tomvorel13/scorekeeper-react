import React, { Component } from "react";

class AddPlayerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.onAdd(this.state.name);
    this.setState({ name: "" });
  }

  onNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.onNameChange.bind(this)}
          />
          <input type="submit" value="Add player" />
        </form>
      </div>
    );
  }
}

export default AddPlayerForm;
