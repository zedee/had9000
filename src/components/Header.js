import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import logo from '../assets/had9000.svg';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <AppBar title="HAD9000 - Home Automation Dashboard" />
                <img src={logo} className="App-logo" alt="logo" />                
            </header>            
        );
    }
}

export default Header;