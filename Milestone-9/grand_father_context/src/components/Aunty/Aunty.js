import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Aunty = () => {
    const [ornaments, house] = useContext(RingContext);
    return (
        <div>
            <h2>Aunty</h2>
            <h5>Ring: {ornaments}</h5>
            <h5>House: {house}</h5>
        </div>
    );
};

export default Aunty;