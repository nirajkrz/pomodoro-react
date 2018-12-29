import React, { Component } from "react";
import Row from "react-bootstrap/lib/Row";
import "./Clock.css";
import ProgressBarCircle from "../ProgressBar/ProgressBar";
import ClockBtn from "./ClockBtn";
import TimerConfig from "../TimerConfig/TimerConfig";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: "00", // responsible for the seconds
      minutes: "" // responsible for the minutes
    };
  }

  startTimer() {
    this.setState({
      timerState: 1,
      timer: setInterval(this.reduceTimer, 1000)
    });
  }

  formatNumber(number) {
    return number < 10 ? "0" + number : number;
  }

  render() {
    return (
      <Row>
        <TimerConfig/>
        <ProgressBarCircle />
          <ClockBtn
            startTimer={this.startTimer}
            stopTimer={this.stopTimer}
            resetTimer={this.resetTimer}
          />
      </Row>
    );
  }
}

export default Clock;
