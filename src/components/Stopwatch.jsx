import React, { Component } from "react";

class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      elapsedTime: 0,
      previousTime: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.onTick.bind(this), 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onTick() {
    if (this.state.running) {
      let now = Date.now();
      this.setState({
        previousTime: now,
        elapsedTime: this.state.elapsedTime + (now - this.state.previousTime)
      });
    }
  }

  onStart() {
    this.setState({
      running: true,
      previousTime: Date.now()
    });
  }

  onStop() {
    this.setState({
      running: false
    });
  }

  onReset() {
    this.setState({
      elapsedTime: 0,
      previousTime: Date.now()
    });
  }

  render() {
    let startStop;
    if (this.state.running) {
      startStop = <button onClick={this.onStop.bind(this)}>Stop</button>;
    } else {
      startStop = <button onClick={this.onStart.bind(this)}>Start</button>;
    }

    const seconds = Math.floor(this.state.elapsedTime / 1000);

    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <div className="stopwatch-time">
          {seconds}
        </div>
        {startStop}
        <button onClick={this.onReset.bind(this)}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
