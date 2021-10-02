import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Special = () => {
    const ornaments = useContext(RingContext);
    return (
        <div>
            <h2>Special</h2>
            <h5>{ornaments}</h5>
        </div>
    );
};

export default Special;