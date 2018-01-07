import React, { Component } from 'react';
import logo from '../assets/had9000.svg';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">HAD9000 - Home Automation Dashboard</h1>
            </header>
        );
    }
}

export default Header;