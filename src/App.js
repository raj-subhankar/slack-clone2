import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Switch>
            <Route path="/" exact>
              <Header />
            </Route>
          </Switch>
        </>
      </Router>      
    </div>
  );
}

export default App;
