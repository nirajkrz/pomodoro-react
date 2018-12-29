
import React from "react";
import Row from "react-bootstrap/lib/Row";

const TimerConfig = () => (
    <div>
        <div className="col-xs-1 col-sm-4 col-lg-5" />
        <div className="col-xs-10 col-sm-4 col-lg-2" id="session-settings">
          <div className="row noselect">
            <div className="col-xs-6">
              <Row>Length</Row>
              <Row>
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
              </Row>
            </div>

            <div className="col-xs-6">
              <Row>Break</Row>
              <Row>
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
              </Row>
            </div>
          </div>
        </div>
        <div className="col-xs-1 col-sm-4 col-lg-5" />
    </div>
);

export default TimerConfig;