import React, { Component } from "react";
import Row from 'react-bootstrap/lib/Row';
import { Button } from 'react-bootstrap';

export default class ClockBtn extends Component {
    render() {
        return (
            <Row>
                <Button type="button" variant="primary" id="start-btn">Start</Button>
                <Button type="button" variant="secondary" id="stop-btn">Stop</Button>
                <Button type="button" variant="primary" id="reset-btn">Reset</Button>
            </Row>
        );
    }
}