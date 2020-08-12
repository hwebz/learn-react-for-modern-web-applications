// SHOULDN'T USE CLASS-BASED COMPONENTS
// USE FUNCTIONAL COMPONENTS INSTEAD

import React, { Component } from 'react';
import { DisplayIf } from '../DisplayIf';

export class CongratulationsMessageCB extends Component {
    render() {
        const { numberOfClicks, threshold, onHide } = this.props;
        
        return (
            <DisplayIf condition={numberOfClicks >= threshold}>
                <h1>Congratulations! You've reached {threshold} number of clicks</h1>
                <button onClick={onHide}>Hide</button>
            </DisplayIf>
        )
    }
}