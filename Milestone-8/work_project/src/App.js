import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';

function App() {
  const items = [
    { name: 'first item', description: 'Our Sahid Minar', img: 'https://media-eng.dhakatribune.com/uploads/2020/02/shaheed-minar-1582212737266.jpg' },
    { name: 'first item', description: 'Our Sahid Minar', img: 'https://media-eng.dhakatribune.com/uploads/2020/02/shaheed-minar-1582212737266.jpg' },
    { name: 'first item', description: 'Our Sahid Minar', img: 'https://media-eng.dhakatribune.com/uploads/2020/02/shaheed-minar-1582212737266.jpg' },
    { name: 'first item', description: 'Our Sahid Minar', img: 'https://media-eng.dhakatribune.com/uploads/2020/02/shaheed-minar-1582212737266.jpg' },
    { name: 'first item', description: 'Our Sahid Minar', img: 'https://media-eng.dhakatribune.com/uploads/2020/02/shaheed-minar-1582212737266.jpg' }
  ]
  return (
    <div className="row row-cols-1 row-cols-md-md-4 g-4">
      {
        items.map(item => <Card item={item}>
        </Card>)
      }
    </div>
  );
}

export default App;
