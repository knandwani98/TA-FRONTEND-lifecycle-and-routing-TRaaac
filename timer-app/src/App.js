import React, { Component } from "react";
import Stopwatch from "./Components/Stopwatch";
import Countdown from "./Components/Countdown";

class App extends Component {
  constructor(prop) {
    super();

    this.state = {
      countdown: {
        hours: 0,
        minutes: 0,
        seconds: 0,
      },

      show: {
        stopwatch: false,
        countdown: false,
      },
    };
  }

  handleReset = (watch) => {
    if (watch === "countdown") {
      this.setState({
        countdown: {
          hours: 0,
          minutes: 0,
          seconds: 0,
        },
      });
    }
  };

  handleZero = (counter) => {
    if (+counter < 10) {
      return `0${counter}`;
    }
    return counter;
  };

  handlePlus = (counter) => {
    let prevState = this.state.countdown;
    prevState[counter] = prevState[counter] + 1;

    this.setState({
      countdown: prevState,
    });
  };

  handleMinus = (counter) => {
    let prevState = this.state.countdown;

    if (prevState[counter] > 0) {
      prevState[counter] = prevState[counter] - 1;

      this.setState({
        countdown: prevState,
      });
    }

    return;
  };

  toggleCard = (watch) => {
    let prevState = this.state.show;
    prevState[watch] = !prevState[watch];

    this.setState({
      show: prevState,
    });
  };

  render() {
    return (
      <>
        <section className="main">
          <h1>⌛️ Timers ⏳</h1>
          <div className=" card-container flex nav">
            {!this.state.show.stopwatch ? (
              <button onClick={() => this.toggleCard("stopwatch")}>
                Show Stopwatch
              </button>
            ) : (
              <Stopwatch toggleCard={this.toggleCard} />
            )}

            {!this.state.show.countdown ? (
              <button onClick={() => this.toggleCard("countdown")}>
                Show Countdown
              </button>
            ) : (
              <Countdown
                handleReset={this.handleReset}
                handleZero={this.handleZero}
                toggleCard={this.toggleCard}
                state={this.state}
                handlePlus={this.handlePlus}
                handleMinus={this.handleMinus}
              />
            )}
          </div>
        </section>
      </>
    );
  }
}

export default App;
