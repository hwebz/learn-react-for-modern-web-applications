import React, { useEffect } from 'react';
import { Button } from './Button';

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
            <Button onClick={setNumberOfClicks}>Click Me!</Button>
        </>
    )
}