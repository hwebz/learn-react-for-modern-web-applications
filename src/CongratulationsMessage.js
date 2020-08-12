import React, { useEffect } from 'react';
import { DisplayIf } from './DisplayIf';

export const CongratulationsMessage = ({ numberOfClicks, threshold, onHide }) => {

    useEffect(() => {
        return () => console.log('CongratulationsMessage unmounted!')
    }, [])

    return (
        <DisplayIf condition={numberOfClicks >= threshold}>
            <h1>Congratulations! You've reached {threshold} number of clicks</h1>
            <button onClick={onHide}>Hide</button>
        </DisplayIf>
    )
}