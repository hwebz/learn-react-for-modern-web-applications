// SHOULDN'T USE CLASS-BASED COMPONENTS
// USE FUNCTIONAL COMPONENTS INSTEAD

import React, { Component } from 'react';
import { Button } from '../Button';

export class CounterButtonCB extends Component {
    render() {
        const { numberOfClicks, setNumberOfClicks } = this.props;

        return (
            <>
                <p>You've clicked the button {numberOfClicks} times</p>
                <Button onClick={setNumberOfClicks}>Click Me!</Button>
            </>
        )
    }
}