import React, { useState } from 'react';

export const CounterButton = () => {
    // Component rendering twice is a feature on dev env only
    console.log('Rendering CounterButton');
    const [numberOfClicks, setNumberOfClicks] = useState(0);

    const increment = () => setNumberOfClicks(numberOfClicks + 1);

    return (
        <>
            <p>You've clicked the button {numberOfClicks} times</p>
            <button onClick={increment}>Click Me!</button>
        </>
    )
}