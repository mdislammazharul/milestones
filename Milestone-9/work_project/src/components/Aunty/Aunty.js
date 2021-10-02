import React from 'react';

const Aunty = (props) => {
    const { house } = props;
    return (
        <div>
            <h2>Aunty</h2>
            <h5>House: {house}</h5>
        </div>
    );
};

export default Aunty;