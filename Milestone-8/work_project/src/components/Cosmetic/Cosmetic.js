import React from 'react';
import { addToDb, deleteFromDb } from '../Utilities/Fakedb';

const Cosmetic = (props) => {
    const { name, email, gender, _id } = props.cosmetic;
    // console.log(props.cosmetic);
    const handlePurchase = id => {
        addToDb(id);
    }

    const handleRemove = id => {
        deleteFromDb(id);
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Price: {email}</p>
            <p><small>Gender: {gender}</small></p>
            <button onClick={() => handlePurchase(_id)}>Purchase</button>
            <button onClick={() => handleRemove(_id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;