import logo from './logo.svg';
import './App.css';
import GrandFather from './components/GrandFather/GrandFather';
import { createContext, useState } from 'react';

// create the context name
export const RingContext = createContext('ring')

function App() {
  const [house, setHouse] = useState(1);
  const ornaments = 'gold Ring';
  return (
    <RingContext.Provider value={ornaments}>
      <div className="App">
        <button
          onClick={() => setHouse(house + 1)}
        >Buy a new House</button>
        <GrandFather house={house}></GrandFather>
      </div>
    </RingContext.Provider>
  );
}

export default App;
