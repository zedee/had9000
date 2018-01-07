import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

class Clock extends Component {
    constructor (props) {
        super(props);
        this.state = {
            date: new Date(),
            time: new Date()            
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
            <Paper className="paperBlock paperBlock-100" zDepth={2}>
                <p>{this.state.date.toDateString()}</p>
                <h1>{this.state.time.toLocaleTimeString()}</h1>
            </Paper>
        )
    }
}

export default Clock;