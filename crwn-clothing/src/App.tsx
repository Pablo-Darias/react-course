import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { ShopPage } from './pages/ShopPage'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
