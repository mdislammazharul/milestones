import React from 'react';
import './Food.css'

const Food = (props) => {
    const { strMeal, strCategory, strMealThumb, strArea } = props.food || {};
    return (
        <div className="col-md-4 my-3">
            <div className="card h-100">
                <img src={strMealThumb} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{strMeal}</h5>
                    <p className="card-text"><small>{strCategory}</small></p>
                    <small className="text-muted">{strArea}</small>
                </div>
                <div className="card-footer">
                    <button onClick={() => props.handleDetails(props.food)} type="button" className="btn btn-warning">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Food;