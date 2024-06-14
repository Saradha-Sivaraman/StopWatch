import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  


  const [time, setTime] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
     
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);


  const minutes = Math.floor((time % 360000) / 6000);

  
  const seconds = Math.floor((time % 6000) / 100);

  
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

 
  const reset = () => {
    setTime(0);
    startAndStop();
  };
  return (
    <div>
        <h1> Stopwatch</h1>
      <p>Time: {minutes.toString().padStart(1, "0")}: 
        {seconds.toString().padStart(2, "0")}
      </p>
      <div>
        <button  onClick={startAndStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button  onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;