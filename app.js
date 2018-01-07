import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" render={() => <h1>Home page</h1>} />
      <Route path="/about" render={() => <h1>About page</h1>} />
      <Route render={() => <h1>Not found</h1>} />
    </Switch>

    <p>Links:</p>
    <ul>
      <li>
        <Link to="/">Home page</Link>
      </li>
      <li>
        <Link to="/about">About page</Link>
      </li>
    </ul>
  </div>
);

export default App;
