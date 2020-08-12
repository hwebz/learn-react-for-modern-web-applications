import React, { useState, useEffect } from 'react';
import { CounterButton } from '../CounterButton';
import { CongratulationsMessage } from '../CongratulationsMessage';
import { DisplayIf } from '../DisplayIf';

export const CounterButtonPage = () => {
    const [numberOfClicks, setNumberOfClicks] = useState(
        Number(localStorage.getItem('numberOfClicks')) || 0
    );
    const [hideMessage, setHideMessage] = useState(false);

    useEffect(() => {
        localStorage.setItem('numberOfClicks', numberOfClicks);
    }, [numberOfClicks])

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