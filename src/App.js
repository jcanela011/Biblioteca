import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/formRegLibro';
import Categoria from './components/Categoria';
import Estante from './components/Estante';
import Tipo from './components/Tipo';
import Usuarios from './components/Usuarios';
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
            <Route path="/Categoria" component={Categoria} />
            <Route path="/Estante" component={Estante} />
            <Route path="/Tipo" component={Tipo} />
            <Route path="/Usuarios" component={Usuarios} />
            <Route component={Page404} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
