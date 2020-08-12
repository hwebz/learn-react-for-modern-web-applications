import React, { useState } from 'react';
import { CounterButton } from '../CounterButton';
import { CongratulationsMessage } from '../CongratulationsMessage';
import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';
import { DisplayIf } from '../DisplayIf';

export const CounterButtonPage = () => {
    const location = useLocation();
    const startingValue = parse(location.search).startingValue;
    const [numberOfClicks, setNumberOfClicks] = useState(Number(startingValue));
    const [hideMessage, setHideMessage] = useState(false);

    const increment = () => setNumberOfClicks(numberOfClicks + 1);

    return (
        <>
            <h1>The Counter Button Page</h1>
            <DisplayIf condition={!hideMessage}>
                <CongratulationsMessage
                    numberOfClicks={numberOfClicks}
                    threshold={10}
                    onHide={() => setHideMessage(true)}
                />
            </DisplayIf>
            <CounterButton numberOfClicks={numberOfClicks} setNumberOfClicks={increment} />
        </>
    );
}