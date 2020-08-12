import React, { useState } from 'react';
import { CounterButton } from '../CounterButton';
import { CongratulationsMessage } from '../CongratulationsMessage';
import { useParams, useLocation } from 'react-router-dom';
import { parse } from 'query-string';

export const CounterButtonPage = () => {
    const { name } = useParams();
    const location = useLocation();
    console.log(parse(location.search));
    const [numberOfClicks, setNumberOfClicks] = useState(0);
    const [hideMessage, setHideMessage] = useState(false);

    const increment = () => setNumberOfClicks(numberOfClicks + 1);

    return (
        <>
            <h1>{name}'s Counter Button Page</h1>
            {
            hideMessage
                ? null
                : <CongratulationsMessage
                    numberOfClicks={numberOfClicks}
                    threshold={10}
                    onHide={() => setHideMessage(true)}
                />
            }
            <CounterButton numberOfClicks={numberOfClicks} setNumberOfClicks={increment} />
        </>
    );
}