import React, { useState } from "react";

const TimerApp = () => {
  const [value, setValue] = useState("");
  const [timer, setTimer] = useState(0);
  const handleTimer = (e) => {
    setValue(e.target.value);
    setTimer(value * 1000 * 60);
  };
  const startTimer = () => {};
  return (
    <div>
      <input type="number" onChange={handleTimer} />
      <button onClick={startTimer}>Start</button>
    </div>
  );
};

export default TimerApp;
