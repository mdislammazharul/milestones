import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Food from '../Food/Food';
import './Meals.css'

const Meals = () => {

    const [meals, setMeals] = useState([]);
    const [details, setDetails] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    const handleDetails = (food) => {
        const newFood = [...details, food]
        setDetails(newFood)
    }

    useEffect(() => {
        fetch('./meals.json')
            .then(res => res.json())
            .then(data => {
                setMeals(data)
                setDisplayProducts(data)
            });
    }, [])

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
        console.log(matchedProducts.length);
    }

    return (
        <div>
            <div className="search-container">
                <input type="text"
                    onChange={handleSearch}
                    placeholder="Search Product" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            {
                                displayProducts.map(food =>
                                    <Food
                                        key={food.idMeal}
                                        food={food}
                                        handleDetails={handleDetails}
                                    ></Food>)
                            }
                        </div>
                    </div>
                    <div className="col-md-3">
                        {
                            <Details
                                details={details}></Details>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meals;