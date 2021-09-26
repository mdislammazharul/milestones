import React from 'react';
import './Cost.css'

const Cost = (props) => {
    const { cost } = props;
    const total = cost.reduce((previous, band) => previous + band.rate, 0)
    return (
        <div>
            <h1 className="text-warning">Total Band: {props.cost.length}</h1>
            <h1 className="text-warning">Total: {total}</h1>
            {
                cost.map(pd => <div className="card h-100 card-background">
                    <div className="band-image">
                        <img src={pd.img} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title text-warning">{pd.name}</h3>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Cost;