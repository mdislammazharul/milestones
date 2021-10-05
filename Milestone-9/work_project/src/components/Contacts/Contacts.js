import React from 'react';
import { Link } from 'react-router-dom';

const Contacts = () => {
    return (
        <div>
            <h1>This is Contacts</h1>
            <Link to="/home">
                <button className="btn btn-danger">Go Home</button>
            </Link>
        </div>
    );
};

export default Contacts;