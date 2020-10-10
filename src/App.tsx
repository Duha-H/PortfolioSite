import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppContainer from './AppContainer';
import Home from './home/Home';

function App() {
  return (
    <Router>
      <AppContainer />
    </Router>
  );
}

export default App;
