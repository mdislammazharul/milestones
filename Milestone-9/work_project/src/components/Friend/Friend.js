import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, email, website, address } = props.friend;
    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: '10px'
    }
    const url = `/friend/${id}`;
    return (
        <div style={friendStyle}>
            <h2>I am: {name}</h2>
            <h5>Call me: {email}</h5>
            <p>Visit me: {website}</p>
            <p><small>I am from: {address.city}</small></p>
            <Link to={url}>Visit Me</Link>
        </div>
    );
};

export default Friend;