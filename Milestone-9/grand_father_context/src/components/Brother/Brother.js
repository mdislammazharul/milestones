import React from 'react';

const Brother = (props) => {
    const { house } = props;
    return (
        <div>
            <h2>Brothers</h2>
            <h5>House: {house}</h5>
        </div>
    );
};

export default Brother;