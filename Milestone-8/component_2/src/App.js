import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      {
        <Counter></Counter>
      }
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrese = () => setCount(count + 1);
  const handleDecrese = () => setCount(count - 1);

  console.log(count, setCount);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrese}>Increase</button>
      <button onClick={handleDecrese}>Decrease</button>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '2px solid blue',
    borderRadius: '10px'
  }
  return (
    <div className="product" style={productStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Price: {props.price}</h4>
    </div>
  )
}

export default App;

/*
 const products = [
    { name: 'mobile', price: 15000 },
    { name: 'laptop', price: 150000 },
    { name: 'camera', price: 55000 },
    { name: 'watch', price: 5000 },
    { name: 'shoe', price: 500 },
  ]
*/

// products.map(product => <Product name={product.name} price={product.price}></Product>)