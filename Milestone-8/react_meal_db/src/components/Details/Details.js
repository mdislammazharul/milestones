import React from 'react';
import './Details.css'

const Details = (props) => {
    const { details } = props;
    return (
        <div>
            <ul>
                {
                    details.map(food => <li>{food.strMeal}</li>)
                }
            </ul>
        </div>
    );
};

export default Details;