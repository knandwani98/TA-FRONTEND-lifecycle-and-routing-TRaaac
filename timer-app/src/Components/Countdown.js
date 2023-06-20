import React, { Component } from "react";

const Countdown = ({
  state,
  handleZero,
  handlePlus,
  handleMinus,
  toggleCard,
  handleReset,
  handleStart,
}) => {
  return (
    <>
      <div className="card">
        {/* Close Button */}
        <button
          onClick={() => {
            toggleCard("countdown");
            handleReset("countdown");
          }}
          className="close"
        >
          x
        </button>

        <h3>Countdown</h3>

        <h2>Hours:Minutes:Seconds</h2>

        <div>
          <button onClick={() => handlePlus("hours")} className="arrow up">
            ⬆
          </button>
          <button onClick={() => handlePlus("minutes")} className="arrow up">
            ⬆
          </button>
          <button onClick={() => handlePlus("seconds")} className="arrow up">
            ⬆
          </button>
        </div>

        <h3>
          {handleZero(state.countdown.hours)}:
          {handleZero(state.countdown.minutes)}:
          {handleZero(state.countdown.seconds)}
        </h3>

        <div>
          <button onClick={() => handleMinus("hours")} className="arrow down">
            ⬇
          </button>
          <button onClick={() => handleMinus("minutes")} className="arrow down">
            ⬇
          </button>
          <button onClick={() => handleMinus("seconds")} className="arrow down">
            ⬇
          </button>
        </div>

        <div className="start flex">
          <button onClick={() => handleStart("countdown")}>Start</button>
        </div>
      </div>
    </>
  );
};

export default Countdown;
