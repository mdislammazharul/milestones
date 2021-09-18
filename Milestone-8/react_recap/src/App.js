import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Mycomponent product="laptop" price="50000"></Mycomponent>
      <Mycomponent product="mobile" price="20000"></Mycomponent>
      <Mycomponent product="watch" price="3000"></Mycomponent>
    </div>
  );
}

function Mycomponent(props) {
  const [point, setPoint] = useState(1)
  const myStyle = {
    backgroundColor: 'lightgreen',
    borderRadius: '10px',
    border: '10px solid red',
    padding: '10px',
    margin: '10px'
  }
  const handleAddPoints = () => {
    const newPonits = point * 2;
    setPoint(newPonits);
  }
  return (
    <div style={myStyle}>
      <h1>Products: {props.product}</h1>
      <h4>Price: {props.price}</h4>
      <h4>Points: {point}</h4>
      <button onClick={handleAddPoints}>Add Points</button>
      {/* if we write handleAddPoints() --> that means the first parenthesis, then it will imidiately call the function. it will not wait for the onClick. */}
    </div>
  )
}

export default App;
