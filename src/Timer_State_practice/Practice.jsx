import React, { Component } from "react";
export class Practice extends Component {
  state = {
    setTimer: 0,
    value: "",
    errMsg: "",
  };

  inputType = this.state.setTimer;

  setTimerfunc = () => {
    // if (!Number(this.inputType)) {
    //     this.setState({ errMsg: "input should be number" })
    // } else {

    //     this.setState({ errMsg: "" })
    // }
    this.timerStart();
  };
  setTime = (e) => {
    if (e.target.name === "inputTime" && !Number(e.target.value)) {
      alert("input should be number");
      // this.setState({ errMsg: "input should be number" });
    } else {
      this.setState({ setTimer: e.target.value * 1000 * 60, value: e.target.value });
      this.setState({ errMsg: "" });
    }
    this.setState({ setTimer: e.target.value * 1000 * 60, value: e.target.value });
  };

  intervalId = null;
  timerStart = () => {
    if (this.state.setTimer > 0 && !this.intervalId) {
      this.intervalId = setInterval(() => {
        this.setState({ setTimer: this.state.setTimer - 1, value: "" }, () => {
          if (this.state.setTimer === 0) {
            alert("timer Finished");
            clearInterval(this.intervalId);
            this.intervalId = null;
          }
        });
      }, 1);
    }
  };
  stopTimer = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
  };

  resetTimer = () => {
    this.setState({ setTimer: 0, value: "" });
    clearInterval(this.intervalId);
    this.intervalId = null;
  };

  resumeTimer = () => {
    this.setState({ setTimer: this.state.setTimer, value: "" });
    this.timerStart();
  };

  // task :  i can update this timer including resume option
  // task : i Can clear the input value after clicking settimer stoptimer and resetTimer

  render() {
    let name = "MdSaymun";
    let miliSecond = this.state.setTimer;
    let second = Math.round(this.state.setTimer / 1000);
    let minute = Math.floor(this.state.setTimer / 1000 / 60) <= 0 ? 0 : Math.floor(Math.round(this.state.setTimer / 1000 / 60));
    return (
      <div>
        <h2 className="text-center text-lg uppercase">{name}</h2>
        <div className="text-center">
          <p>Remaining MiliSecond : {miliSecond} </p>
          <p>Remaining Second : {second} </p>
          <p>Remaining Minute : {minute}</p>
        </div>
        <div className="flex flex-col w-1/3 m-auto ">
          {/* I can get set time from input  */}
          <input
            id="TimerInput"
            className="border-2 shadow p-2"
            name="inputTime"
            type="text"
            onChange={this.setTime}
            placeholder="set your desired time for set timer"
            value={this.state.value}
          />
          {/* <p className="text-red-500">{this.state.errMsg}</p> */}
          <button onClick={this.setTimerfunc}>SetTime for {Math.floor(this.state.setTimer / 1000 / 60) === 0 ? null : Math.floor(this.state.setTimer / 1000 / 60)} Minute</button>
          <button onClick={this.stopTimer}>Stop</button>
          <button onClick={this.resetTimer}>Reset</button>
          <button onClick={this.resumeTimer}>Resume</button>
        </div>
      </div>
    );
  }
}

export default Practice;
