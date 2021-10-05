import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1>This is about</h1>
            <Link to="/home">
                <button className="btn btn-danger">Go Home</button>
            </Link>
        </div>
    );
};

export default About;