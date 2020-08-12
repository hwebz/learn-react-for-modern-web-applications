import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/counter?startingValue=2">Counter</Link>
        </li>
        <li>
            <Link to="/people-list">People List</Link>
        </li>
        <li>
            <Link to="/protected">Protected</Link>
        </li>
        <li>
            <Link to="/forms">Forms</Link>
        </li>
        <li>
            <Link to="/user-profile">User Profile</Link>
        </li>
    </ul>
)