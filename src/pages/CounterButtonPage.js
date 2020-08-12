import React, { useState, useEffect } from 'react';
import { CounterButton } from '../CounterButton';
import { CongratulationsMessage } from '../CongratulationsMessage';
import { DisplayIf } from '../DisplayIf';
import { usePersistentState } from '../usePersistentState';

export const CounterButtonPage = () => {
    const [numberOfClicks, setNumberOfClicks] = usePersistentState('numberOfClicks', 0, Number)
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