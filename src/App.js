import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from "./screens/Home";
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/rewards" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;