import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);
  const nameRef = useRef();
  const emailRef = useRef();

  // to load previous value from the localhost
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  const handleAddUser = e => {
    // take input value from input field for newUser
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const newUser = { name: name, email: email }

    // to add newUsers and send data to the server
    // data should be JSON format, so have to write more code in fetch 
    fetch('http://localhost:5000/users', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(data => {
        const addedUser = data;
        const newUsers = [...users, addedUser];
        setUsers(newUsers)
      })

    nameRef.current.value = '';
    emailRef.current.value = '';
    e.preventDefault();
  }

  return (
    <div className="App">
      <h2>Found Users: {users.length}</h2>

      <form onSubmit={handleAddUser}>
        <input type="text" ref={nameRef} placeholder="name" />
        <input type="email" ref={emailRef} id="" placeholder="email" />
        <input type="submit" value="submit" />
      </form>

      <ul>
        {
          users.map(user => <li key={user.id}>{user.id}: {user.name}, {user.email}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
