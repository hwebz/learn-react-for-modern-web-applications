import React, { useState, useEffect } from 'react';

export const CounterButton = ({ numberOfClicks, setNumberOfClicks }) => {
    // Component rendering twice is a feature on dev env only
    console.log('Rendering CounterButton');

    useEffect(() => {
        console.log('useEffect function called!')
        // Be careful when updating state inside useEffect
        // because it will make infinite loop
        // setNumberOfClicks()
        return () => console.log('Unmounting!');
    }, [numberOfClicks]) // [] for no side effects

    return (
        <>
            <p>You've clicked the button {numberOfClicks} times</p>
            <button onClick={setNumberOfClicks}>Click Me!</button>
        </>
    )
}