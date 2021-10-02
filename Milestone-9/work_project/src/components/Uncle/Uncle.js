import React from 'react';

const Uncle = (props) => {
    const { house } = props;
    return (
        <div>
            <h2>Uncle</h2>
            <h5>House: {house}</h5>
        </div>
    );
};

export default Uncle;