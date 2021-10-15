import React from 'react';
import { useHistory } from 'react-router';

const Page3 = () => {

    const history = useHistory();

    const handlePlaceOrder = () => {
        history.push('/page5');
    }

    return (
        <div>
            <h2>This is Page 3</h2>
            <button onClick={handlePlaceOrder} className="btn btn-warning">Purchase This</button>
        </div>
    );
};

export default Page3;