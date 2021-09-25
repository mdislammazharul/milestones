import React, { useEffect } from 'react';
import './Home.css'

const Home = () => {

    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => console.log(data.results))
    }, [])
    return (
        <div>

        </div>
    );
};

export default Home;