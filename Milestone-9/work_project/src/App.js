import './App.css';
import AllTeams from './components/AllTeams/AllTeams';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TeamDetails from './components/TeamDetails/TeamDetails';

function App() {
  return (
    <div className="App">
      <h1>I'm Header</h1>
      <Router>
        <Switch>
          <Route exact path="/">
            <AllTeams></AllTeams>
          </Route>
          <Route path="/details/:teamId">
            <TeamDetails></TeamDetails>
          </Route>
        </Switch>
      </Router>
      <h1>I'm Footer</h1>
    </div>
  );
}

export default App;
