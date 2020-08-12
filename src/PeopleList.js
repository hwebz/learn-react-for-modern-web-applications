import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const PeopleList = ({ people }) => {
    const theme = useContext(ThemeContext);

    return people.map((person, idx) => {
        return (
            <div style={{
                backgroundColor: theme === 'dark' ? 'black' : 'white',
                color: theme === 'dark' ? 'white' : 'black'
            }} key={idx}>
                <h3>{person.name}</h3>
                <p>{person.age}</p>
                <p>{person.hairColor}</p>
            </div>
        )
    })
}