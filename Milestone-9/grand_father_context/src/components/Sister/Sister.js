import React from 'react';

const Sister = (props) => {
    const { house } = props;
    return (
        <div>
            <h2>Sister</h2>
            <h5>House: {house}</h5>
        </div>
    );
};

export default Sister;