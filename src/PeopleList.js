import React from 'react';

export const PeopleList = ({ people }) => {
    return people.map((person, idx) => {
        return (
            <div key={idx}>
                <h3>{person.name}</h3>
                <p>{person.age}</p>
                <p>{person.hairColor}</p>
            </div>
        )
    })
}