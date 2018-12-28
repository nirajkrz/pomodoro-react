import React, { Component } from "react";
import "./App.css";
import Clock from './clock/Clock';
import ProgressBarCircle from './ProgressBar/ProgressBar';
import ClockBtn from './clock/ClockBtn';

class App extends Component {
  render() {
    return (
      <div className="App"><h1>Pomodoro Clock</h1>
      <Clock /><ProgressBarCircle/><ClockBtn/></div>);
  }
}

export default App;
