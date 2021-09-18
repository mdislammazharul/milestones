import logo from './logo.svg';
import './App.css';

function App() {
  const cinemas = [
    { nayok: 'Kuber', nayika: 'Kopila' },
    { nayok: 'Rubel', nayika: 'Sabnoor' },
    { nayok: 'Rajjak', nayika: 'Kobori' },
    { nayok: 'Jashim', nayika: 'Suchorita' },
  ]
  return (
    <div className="App">
      {
        cinemas.map(cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
      }

    </div>
  );
}

function Cinema(props) {
  return (
    <div style={{
      backgroundColor: 'skyblue',
      border: '3px solid lightsalmon',
      margin: '20px',
      borderRadius: '20px'
    }}>
      <h2>Nayok: {props.nayok}</h2>
      <h4>Nayok: {props.nayika}</h4>
    </div>
  )
}
export default App;
