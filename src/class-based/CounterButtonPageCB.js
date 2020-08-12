import React, { Component } from 'react';
import { DisplayIf } from '../DisplayIf';
import { CongratulationsMessageCB } from './CongratulationsMessageCB'
import { CounterButtonCB } from './CounterButtonCB'

export class CounterButtonPageCB extends Component {
    render() {
        return (
            <>
                <h1>The Counter Button Page</h1>
                <DisplayIf condition={!hideMessage}>
                    <CongratulationsMessageCB
                        numberOfClicks={numberOfClicks}
                        threshold={10}
                        onHide={() => setHideMessage(true)}
                    />
                </DisplayIf>
                <CounterButtonCB numberOfClicks={numberOfClicks} setNumberOfClicks={increment} />
            </>
        );
    }
}