import React, { Component } from "react";
import './Clock.css';
class Clock extends Component {
  render() {
    return (
        <div className="row">
        <div className="col-xs-1 col-sm-4 col-lg-5" ></div>
        <div className="col-xs-10 col-sm-4 col-lg-2" id="session-settings">
          <div className="row noselect">
            <div className="col-xs-6">
              <div className="row">Length</div>
              <div className="row">
                <div className="col-xs-4">
                  <span
                    className="glyphicon glyphicon-triangle-left"
                    id="length-minus"
                  />
                </div>

                <div className="col-xs-4" id="length">
                  {" "}
                  25{" "}
                </div>

                <div className="col-xs-4">
                  <span
                    className="glyphicon glyphicon-triangle-right"
                    id="length-plus"
                  />
                </div>
              </div>
            </div>

            <div className="col-xs-6">
              <div className="row">Break</div>
              <div className="row">
                <div className="col-xs-4">
                  <span
                    className="glyphicon glyphicon-triangle-left"
                    id="break-minus"
                  />
                </div>
                <div className="col-xs-4" id="break">
                  {" "}
                  5{" "}
                </div>
                <div className="col-xs-4">
                  <span
                    className="glyphicon glyphicon-triangle-right"
                    id="break-plus"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-1 col-sm-4 col-lg-5"></div>
      </div>
    );
  }
}

export default Clock;
