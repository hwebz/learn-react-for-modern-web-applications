import React from 'react';
import { DangerButton } from '../Button';

export const UncontrolledFormPage = () => {
    const nameInput = React.createRef();
    const emailInput = React.createRef();
    const favoriteColorInput = React.createRef();
    
    const submitForm = e => {
        e.preventDefault();
        alert(`
            Your name: ${nameInput.current.value},
            Your email: ${emailInput.current.value},
            Your favorite color: ${favoriteColorInput.current.value}
        `)
    }

    return (
        <form>
            <h3>Please enter your information:</h3>
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    ref={nameInput}
                />
            </div>
            <div>
            <input
                    type="text"
                    placeholder="Email"
                    ref={emailInput}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Favorite Color"
                    ref={favoriteColorInput}
                />
            </div>
            <DangerButton onClick={submitForm}>Submit</DangerButton>
        </form>
    )
}