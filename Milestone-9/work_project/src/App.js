import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import TeamDetails from './components/TeamDetails/TeamDetails';
import Sports from './components/Sports/Sports';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Banner></Banner>
        {/* why have to write switch? bcz, if a url match with a Route, then it will no go to another Route */}
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          {/* we again put home component here, bcz when we input /home to the url, then we will show home */}
          <Route path="/home">
            <Home></Home>
          </Route>
          {/* TeamDetails is a dynamic page, bcz we load it by clicking Details button. */}
          <Route path="/details/:teamId">
            <TeamDetails></TeamDetails>
          </Route>
          <Route path="/sports">
            <Sports></Sports>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contacts">
            <Contacts></Contacts>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
