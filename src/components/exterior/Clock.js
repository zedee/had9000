import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

class Clock extends Component {
    constructor (props) {
        super(props);
        this.state = {
            time: new Date()            
        };
        this.style = {
            padding: 10
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    render() {
        return (
            <Paper style={this.style} zDepth={2}>     
                <p>Current Time:</p>           
                <h1>{this.state.time.toLocaleTimeString()}</h1>
            </Paper>
        )
    }
}

export default Clock;