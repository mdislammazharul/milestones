import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';
import AllNews from './pages/AllNews/AllNews';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/blog">
            <Blog></Blog>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/cart">
            <Cart></Cart>
          </Route>
          <Route exact path="/news/:sourceId">
            <AllNews></AllNews>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
