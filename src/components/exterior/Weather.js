import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

class Weather extends Component {
    constructor (props) {
        super(props);
        this.state = {
            city: 'Barcelona',
            date: new Date(),
            temperature: {
                //TODO: Link it to OpenWeatherMap API
                value: 22,
                units: 'C'
            }
        }
        this.style = {
            padding: 10
        }
    }

    render() {
        return (
            <Paper style={this.style} zDepth={2}>
                <p>{this.state.city} {this.state.date.toDateString()}</p>
                <h1>{this.state.temperature.value} {this.state.temperature.units}</h1>
            </Paper>
        )
    }
}

export default Weather;