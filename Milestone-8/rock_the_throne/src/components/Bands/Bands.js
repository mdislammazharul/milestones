import React from 'react';
import './Bands.css'
// import Rating from 'react-rating';

const Bands = (props) => {
    // console.log(props);
    const { name, img, albums, category, establish, rate, star, starCount } = props.band
    return (
        <div className="col-md-4 mb-3 mt-3">
            <div className="card h-100 card-background">
                <div className="band-image">
                    <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h3 className="card-title text-warning">{name}</h3>
                    <p className="card-text text-light">Genre: {category}</p>
                    <p className="card-text text-light">Establish: {establish}</p>
                    <p className="card-text text-light">Total Albums: {albums}</p>
                    {/* <Rating
                        initialRating={star}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly>
                    </Rating> */}
                    {/* <p className="card-text text-light">Star: {star}</p> */}
                    <p className="card-text text-light">Star: {starCount}</p>
                    <h4 className="card-text text-light">Budget: <strong className="text-warning">{rate}</strong> BDT</h4>

                    <div className="button">
                        {
                            props.band.isAdded ? (
                                <button className="btn btn-danger mt-3"><i class="fas fa-guitar"></i> <strong>Already Added</strong></button>
                            ) : (
                                <button onClick={() => props.handleCost(props.band)} className="btn btn-warning mt-3"><i class="fas fa-guitar"></i> <strong>Add to Lsit</strong></button>
                            )
                        }
                        <button className="btn btn-danger mt-3"><i class="fab fa-youtube"></i> Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bands;