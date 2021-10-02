import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Special = () => {
    const [ornaments, house] = useContext(RingContext);
    return (
        <div>
            <h2>Special</h2>
            <h5>Ring: {ornaments}</h5>
            <h5>House: {house}</h5>
        </div>
    );
};

export default Special;