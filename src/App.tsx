import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppContainer from './AppContainer';
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends React.Component {
  componentDidMount(){
    AOS.init({
      duration: 1500,
    })
  }

  render(){
    return(
      <Router>
        <AppContainer />
      </Router>
    )
  }
};

export default App;
