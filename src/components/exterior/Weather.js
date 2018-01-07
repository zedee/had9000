import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import WeatherDataFetcher from '../../utils/WeatherDataFetcher';

class Weather extends Component {
    constructor (props) {
        super(props);
        this.state = {
            city: 'Barcelona',
            date: new Date(),
            temperature: {
                units: 'C'
            },
            weather: {
                main: {
                    temp: '--'
                }
            }
        }
        this.style = {
            padding: 10
        }
    }

    componentDidMount() {
        const weatherData = new WeatherDataFetcher().loadData('offline');

        weatherData.then(data => {
            console.log(data);

            data.main.temp = this.setTemperatureUnits(data.main.temp);
            
            this.setState({
                weather: data
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    componentDidUpdate(prevProps, prevState) {
    }

    setTemperatureUnits(temperature) {
        if (typeof temperature === 'number') {
            switch (this.state.temperature.units) {
                case 'C':
                    return Math.round(temperature - 274.0);
                    break;
                case 'K':
                    return temperature;
                    break;
                default:
                    return temperature;
                    break;
            }   
        }
        else return temperature;
    }

    render() {
        return (
            <Paper style={this.style} zDepth={2}>
                <p>{this.state.city} {this.state.date.toDateString()}</p>
                <h1>{this.state.weather.main.temp} {this.state.temperature.units}</h1>
            </Paper>
        )
    }
}

export default Weather;