import React, { useEffect, useState } from 'react';
import Bands from '../Bands/Bands';
import Cost from '../Cost/Cost';
import './Concert.css'

const Concert = () => {
    const [bands, setBands] = useState([])

    useEffect(() => {
        fetch('./bands.JSON')
            .then(res => res.json())
            .then(data => setBands(data))
    }, [])

    // 
    const [cost, setCost] = useState([]);
    // const [displayProducts, setDisplayProducts] = useState([]);

    const handleCost = (band) => {
        const newBand = [...cost, band]
        setCost(newBand)
        // console.log(newBand)
    }



    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            bands.map(band => <Bands
                                key={band.key}
                                band={band}
                                handleCost={handleCost}
                            ></Bands>)
                        }
                    </div>
                </div>

                <div className="col-md-3">
                    <Cost
                        cost={cost}
                    ></Cost>
                </div>
            </div>
        </div>
    );
};

export default Concert;