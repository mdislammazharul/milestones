import { useEffect } from "react";
import { useState } from "react"

// 1. first of all, have to declare a function
// 2. have to return an array, why array? bcz--> we want to send multiple data in the single array
const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    // return necessary things
    return [products];
}

// have to write export for using from another file
export default useProducts;