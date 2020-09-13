import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Country from './Components/Country/Country';

function App() {
  return (
    <div className="bg-secondary">
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/country/:countryName">
            <Country/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
