import React, { Component } from "react";
import "./Timer.css";
import TimerButton from "../TimerButton/TimerButton";

class Timer extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      minutes: 25,
      seconds: 0,
      isOn: false,
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    // @ts-ignore
    if (this.state.isOn === true) {
      return;
    }
    // @ts-ignore
    this.myInterval = setInterval(() => {
      // @ts-ignore
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        // @ts-ignore
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          // @ts-ignore
          clearInterval(this.myInterval);
        } else {
          // @ts-ignore
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
    this.setState({ isOn: true });
  }

  stopTimer() {
    // @ts-ignore
    clearInterval(this.myInterval);
    this.setState({ isOn: false });
  }

  resetTimer() {
    this.stopTimer();
    this.setState({
      minutes: 25,
      seconds: 0,
    });
  }

  render = () => {
    // @ts-ignore
    const { minutes, seconds } = this.state;

    return (
      <div className="timer-container">
        <div className="time-display">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
        <div className="timer-button-container">
          <TimerButton
            // @ts-ignore
            className="start-timer"
            buttonAction={this.startTimer}
            buttonValue={"Start"}
          />
          <TimerButton
            // @ts-ignore
            className="stop-timer"
            buttonAction={this.stopTimer}
            buttonValue={"Stop"}
          />
          <TimerButton
            // @ts-ignore
            className="reset-timer"
            buttonAction={this.resetTimer}
            buttonValue={"Reset"}
          />
        </div>
      </div>
    );
  };
}

export default Timer;