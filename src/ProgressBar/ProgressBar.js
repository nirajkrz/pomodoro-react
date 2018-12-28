import React, { Component } from "react";
import "./ProgressBar.css";

class ProgressBarCircle extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <div id="pbar" className="progress-pie-chart" data-percent="0">
            <div className="ppc-progress">
              <div className="ppc-progress-fill" />
            </div>
            <div className="ppc-percents">
              <div className="pcc-percents-wrapper">
                <p id="session">WORK</p>
                <p id="time">25:00</p>
                <span>0%</span>
              </div>
            </div>
          </div>
          <progress
            styles={{display: 'none'}}
            id="progress_bar"
            value="0"
            max="100"
          />
        </div>
      </div>
    );
  }
}

export default ProgressBarCircle;