import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Page3 from './Pages/Home/Page3/Page3';
import Page4 from './Pages/Home/Page4/Page4';
import Page5 from './Pages/Home/Page5/Page5';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import './App.css'


function App() {
  return (
    <div className="App.css">
      <AuthProvider>
        <Router>
          <Header></Header>
          <div id="body">
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/page3">
                <Page3></Page3>
              </Route>
              <PrivateRoute path="/page4">
                <Page4></Page4>
              </PrivateRoute>
              <PrivateRoute path="/page5">
                <Page5></Page5>
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </div>
          <div id="footer">
            <Footer></Footer>
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
