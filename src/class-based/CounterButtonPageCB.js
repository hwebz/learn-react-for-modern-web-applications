// SHOULDN'T USE CLASS-BASED COMPONENTS
// USE FUNCTIONAL COMPONENTS INSTEAD

import React, { Component } from 'react';
import { DisplayIf } from '../DisplayIf';
import { CongratulationsMessageCB } from './CongratulationsMessageCB'
import { CounterButtonCB } from './CounterButtonCB'
import { withRouter } from 'react-router-dom';
import { parse } from 'query-string';

class CounterButtonPageCB extends Component {

    state = {
        numberOfClicks: 0,
        hideMessage: false
    }

    constructor(props) {
        super(props);
        
        // this.increment = this.increment.bind(this);
    }

    componentDidMount() {
        const location = this.props.location || {}
        const startingValue = parse(location.search).startingValue;

        this.setState({
            numberOfClicks: Number(startingValue)
        })
    }

    increment = () => {
        this.setState({
            numberOfClicks: this.state.numberOfClicks + 1
        })
    }

    render() {
        const { numberOfClicks, hideMessage } = this.state;

        return (
            <>
                <h1>The Counter Button Page</h1>
                <DisplayIf condition={!hideMessage}>
                    <CongratulationsMessageCB
                        numberOfClicks={numberOfClicks}
                        threshold={10}
                        onHide={() => this.setState({
                            hideMessage: true
                        })}
                    />
                </DisplayIf>
                <CounterButtonCB numberOfClicks={numberOfClicks} setNumberOfClicks={this.increment} />
            </>
        );
    }
}

export default withRouter(CounterButtonPageCB);