import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Users from './pages/Users';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={ Users } />
      </Switch>
    </BrowserRouter>
  );
};
