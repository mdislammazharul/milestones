import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, email, website, address } = props.friend;

    // history for button onclick
    const history = useHistory();

    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: '10px'
    }
    const url = `/friend/${id}`;

    // button onclick function
    const handleFriendClick = () => {
        history.push(url)
    }
    return (
        <div style={friendStyle}>
            <h2>I am: {name}</h2>
            <h5>Call me: {email}</h5>
            <p>Visit me: {website}</p>
            <p><small>I am from: {address.city}</small></p>

            {/* 3 ways to link another page */}
            {/* anchor link */}
            <Link to={url}>Visit Me</Link>
            <br />
            {/* button under link */}
            <Link to={url}>
                <button>Visite Me</button>
            </Link>
            <br />
            {/* button onclick */}
            <button onClick={handleFriendClick}>
                Visite Me Again
            </button>

        </div>
    );
};

export default Friend;