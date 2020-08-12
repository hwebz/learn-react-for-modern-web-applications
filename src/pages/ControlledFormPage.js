import React, { useState } from 'react';

export const ControlledFormPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [favoriteColor, setFavoriteColor] = useState('');

    const submitForm = e => {
        e.preventDefault();
        alert(`
            Your name: ${name},
            Your email: ${email},
            Your favorite color: ${favoriteColor}
        `)
    }

    return (
        <form>
            <h3>Please enter your information:</h3>
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div>
            <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Favorite Color"
                    value={favoriteColor}
                    onChange={e => setFavoriteColor(e.target.value)}
                />
            </div>
            <button onClick={submitForm}>Submit</button>
        </form>
    )
}