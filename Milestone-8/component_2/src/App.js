import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
      <LoadComments></LoadComments>
    </div>
  );
}

// load User data from API
function ExternalUsers() {
  // to load data from API, firstly we have to setup a state
  const [users, setUsers] = useState([]); // if the API cannot be loaded for any reason, then the array's default value will be --> empty array
  useEffect(() => { // useEffect((),[]) --> useEffect(arrow function, empty array)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>External Users</h3>
      {
        users.map(user => <User name={user.name} email={user.email}></User>) // User --> has a Component below
      }
    </div>
  )
}

// load user Comments
function LoadComments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setComments(data))
  }, []);

  return (
    <div>
      <h3>Load Comments</h3>
      {
        comments.map(comment => <Comment title={comment.title} body={comment.body}> </Comment>) // Comment --> has a Component below
      }
    </div>
  )
}

// ----------- Components ------------

function User(props) {
  return (
    <div className="product">
      <h2>name: {props.name}</h2>
      <p>email: {props.email}</p>
    </div>
  )
}

function Comment(props) {
  return (
    <div className="product">
      <h4>Title: {props.title}</h4>
      <p>Body: {props.body}</p>
    </div>
  )
}

// useState & onClick Event Handler
function Counter() {
  const [count, setCount] = useState(0); // default count value = 0
  const handleIncrese = () => setCount(count + 1);
  const handleDecrese = () => setCount(count - 1);

  console.log(count, setCount);
  return (
    <div>
      <h1>Count: {count}</h1>
      {/* onClick --> C capital letter & have to use dynamic value using {} */}
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