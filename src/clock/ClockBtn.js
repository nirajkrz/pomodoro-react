import React, { Component } from "react";
export default class ClockBtn extends Component {
    render() {
        return (
            <div class="row">
                <button class="btn" id="start-btn">Start</button>
                <button class="btn" id="stop-btn">Stop</button>
                <button class="btn" id="reset-btn">Reset</button>
            </div>
        );
    }
}