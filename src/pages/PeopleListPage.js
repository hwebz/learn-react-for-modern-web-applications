import React from 'react';
import { PeopleList } from '../PeopleList';

const people = [
    {
        name: "John",
        age: 45,
        hairColor: 'blonde'
    },
    {
        name: "Anna",
        age: 35,
        hairColor: 'black'
    },
    {
        name: "Micheal",
        age: 25,
        hairColor: 'pink'
    }
]

export const PeopleListPage = () => {
    return (
        <>
            <h1>The People List Page</h1>
            <PeopleList people={people} />
        </>
    )
}