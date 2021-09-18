import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
      <Mycomponent product="laptop" price="50000"></Mycomponent>
      <Mycomponent product="mobile" price="20000"></Mycomponent>
      <Mycomponent product="watch" price="3000"></Mycomponent>
    </div>
  );
}

// ----------- Load User Data -------------

function LoadUsers() {
  // state declaration
  const [users, setUsers] = useState([])
  // function for data load --> useEffect
  // useEffect will take two parameters --> 1. an anonymous function 2. an empty array
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data)) // fetched data have to set in setUsers --> 'setUsers' from state declaration
  }, [])
  return (
    <div>
      <h1>Users Loaded: {users.length}</h1>
      {
        users.map(user => <User name={user.name} phone={user.phone}></User>)
      }
    </div>
  )
}

// component for Users
function User(props) {
  return (
    <div style={{
      backgroundColor: 'skyblue',
      border: '3px solid lightsalmon',
      margin: '20px',
      borderRadius: '20px'
    }}>
      <h2>Name: {props.name}</h2>
      <p>Call me: {props.phone}</p>
    </div>
  )
}

// ----------- Add Ponit ---------------
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
