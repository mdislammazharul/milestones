import React from 'react';
import { add } from '../Utilities/Storage';

const Cosmetics = () => {
    const num1 = 55;
    const num2 = 43;
    const sum = add(num1, num2)
    return (
        <div>
            <h1>{sum}</h1>
        </div>
    );
};

export default Cosmetics;