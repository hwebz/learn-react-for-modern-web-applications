import React, { Component } from 'react';

export class CounterButtonCB extends Component {
    render() {
        const { numberOfClicks, setNumberOfClicks } = this.props;

        return (
            <>
                <p>You've clicked the button {numberOfClicks} times</p>
                <button onClick={setNumberOfClicks}>Click Me!</button>
            </>
        )
    }
}