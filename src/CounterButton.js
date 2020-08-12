import React, { useState } from 'react';

export const CounterButton = ({ numberOfClicks, setNumberOfClicks }) => {
    // Component rendering twice is a feature on dev env only
    console.log('Rendering CounterButton');
    return (
        <>
            <p>You've clicked the button {numberOfClicks} times</p>
            <button onClick={setNumberOfClicks}>Click Me!</button>
        </>
    )
}