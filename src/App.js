import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Users from './pages/Users';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' component={ Users } />
      </Switch>
    </>
  );
};
