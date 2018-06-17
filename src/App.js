import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/formRegLibro';
import Page404 from './components/Page404';

import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter className="container">
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/formRegLibro" component={Contact} />
            <Route component={Page404} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
