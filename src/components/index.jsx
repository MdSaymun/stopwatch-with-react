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
    this.setState({ setTimer: e.target.value * 1000 * 60, value: e.target.value });
    this.setState({ errMsg: "" });
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
  // task : i Can cear the input value after clicking settimer stoptimer and resetTimer

  // handle data type
  handleBlur = () => {
    if (!Number(this.state.value)) {
      // alert("input should be number");
      this.setState({ errMsg: "input should be number" });
    }
  };
  render() {
    let name = "saymun";
    let miliSecond = this.state.setTimer;
    let second = Math.round(this.state.setTimer / 1000);
    let minute = Math.floor(this.state.setTimer / 1000 / 60) <= 0 ? 0 : Math.floor(Math.floor(this.state.setTimer / 1000 / 60));
    return (
      <div>
        <h2 className="text-center text-lg uppercase">{name}</h2>
        <div className="text-center flex justify-between w-1/2 mx-auto my-2">
          <p>
            {`${miliSecond > 0 ? "Remaining" : ""}`} MiliSecond : {miliSecond}
          </p>
          <p>
            {`${second > 0 ? "Remaining" : ""}`} Second : {second}
          </p>
          <p>
            {`${minute > 0 ? "Remaining" : ""}`} Minute : {minute}
          </p>
        </div>
        <div className="flex flex-col w-1/3 m-auto ">
          {/* I can get set time from input  */}
          <input
            id="TimerInput"
            className="border-2 shadow p-2 mt-5"
            name="inputTime"
            type="number"
            onChange={this.setTime}
            placeholder="set your desired time for set timer"
            value={this.state.value}
            onBlur={this.handleBlur}
          />
          <p className="text-red-500">{this.state.errMsg}</p>
          <div className="buttons flex items-center justify-between p-2 py-5">
            <button className="bg-gray-800 text-white py-1 px-2" onClick={this.setTimerfunc}>
              {/* SetTime for {Math.floor(this.state.setTimer / 1000 / 60) === 0 ? null : Math.floor(this.state.setTimer / 1000 / 60)} Minute */}
              {/* Set Timer {minute === 0 ? "" : `for ${minute} ${minute > 1 ? "Minutes" : "Minute"}`} */}
              Start
            </button>
            <button className="bg-red-400 text-white py-1 px-2" onClick={this.stopTimer}>
              Stop
            </button>
            <button className="bg-gray-800 text-white py-1 px-2" onClick={this.resetTimer}>
              Reset
            </button>
            <button className="bg-green-400 text-white py-1 px-2" onClick={this.resumeTimer}>
              Resume
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Practice;
