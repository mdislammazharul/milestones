import userEvent from '@testing-library/user-event';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Home.css'

const Home = () => {
    const {user} = useAuth();
    return (
        <div className="home">
            <h1>This is Home</h1>
            <h5>User: {user.displayName}</h5>
        </div>
    );
};

export default Home;