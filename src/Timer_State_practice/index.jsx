import React, { Component } from "react";

export class Timer extends Component {
  state = {
    count: 0,
  };
  intervalId = null; // initialilly intervalId is null
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrementCount = () => {
    this.state.count > 0 && this.setState({ count: this.state.count - 1 });
  };
  intervalId = null;
  startTimer = () => {
    if (this.state.count > 0 && !this.intervalId) {
      this.intervalId = setInterval(() => {
        this.setState({ count: this.state.count - 1 }, () => {
          if (this.state.count === 0) {
            alert("Counter Finished");
            clearInterval(this.intervalId);
            this.intervalId = null;
          }
        });
      }, 1000);
    }
  };

  stopTimer = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  };
  resetTimer = () => {
    this.setState({ count: 0 });
    clearInterval(this.intervalId);
    this.intervalId = null;
  };

  //// here is only one componet task is divide this into multiple component
  /// task work with second and minutes
  render() {
    return (
      <div className="container m-auto">
        <p>Lets Create a timer with State </p>

        <div className="flex justify-center">
          <button onClick={this.decrementCount} className={`px-3 py-2  m-2 ${this.state.count <= 0 ? "bg-gray-50" : "bg-gray-200"}`}>
            -
          </button>
          <h1 className="text-xl">{this.state.count}</h1>
          <button onClick={this.incrementCount} className="px-3 py-2 bg-gray-200 m-2">
            +
          </button>
        </div>
        <div className="timer flex justify-center">
          <button onClick={this.startTimer} className="px-3 py-2 bg-gray-200 m-2">
            Start
          </button>
          <button className="px-3 py-2 bg-gray-200 m-2" onClick={this.stopTimer}>
            Stop
          </button>
          <button className="px-3 py-2 bg-gray-200 m-2" onClick={this.resetTimer}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
