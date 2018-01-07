import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header';
import MainDashboard from './components/MainDashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <MainDashboard />          
          <p className="App-intro">
            {new Date().getFullYear()}
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
