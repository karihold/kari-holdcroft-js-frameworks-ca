import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './App.scss';
import HomePage from './components/HomePage/HomePage';
import GameDetailsPage from './components/GameDetailsPage/GameDetailsPage';
import ContactPage from './components/ContactPage/ContactPage';

const baseUrl = 'https://api.rawg.io/api/games';

function App() {
  return (
    <Router>
      <nav>
        <ul className="nav-wrapper">
          <li>
            <NavLink className="nav-link" activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" activeClassName="active" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <HomePage baseUrl={baseUrl} />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/game/:id">
          <GameDetailsPage baseUrl={baseUrl} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
